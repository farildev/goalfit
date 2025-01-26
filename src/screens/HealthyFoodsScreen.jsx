import React, { useState, useCallback, useRef } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Text,
  View,
  TextInput,
  FlatList,
  Modal,
  ActivityIndicator
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useGetRecipesQuery } from '@/store/services/recipeService';
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { useDispatch } from 'react-redux';
import api from '@/store/api';
import FoodCard from '@/components/Foods/FoodCard';
import FilterIcon from '@/assets/icons/FilterIcon';
import ArrowsIcon from '@/assets/icons/ArrowsIcon';

const HealthyFoodsScreen = () => {
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const { colors } = useTheme();

  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [sort, setSort] = useState({
    label: "Sırala",
    value: undefined,
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(api.util.invalidateTags(['RECIPES']));
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const { data, isFetching } = useGetRecipesQuery({
    q: search,
    limit: 10,
  });

  const sortOptions = [
    { label: "Sort by name ASC", value: "name:asc" },
    { label: "Sort by name DESC", value: "name:desc" },
  ];

  const handleSort = (selectedSort) => {
    setSort(selectedSort);
    setSortModalVisible(false);
  };

  const recipes = data?.recipes;

  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colorScheme === "dark" ? '#000' : '#fff'}
            colors={[colorScheme === "dark" ? '#000000' : '#fff']}
          />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
        className="flex-1 p-5"
      >
        <View className="flex-col gap-3">
          <TextInput
            onChangeText={(value) => setSearch(value)}
            className="flex-1 p-4 rounded-lg font-albertRegular"
            placeholderTextColor={'#c0c0c0'}
            placeholder='Search food name'
            style={{
              borderWidth: 1,
              borderColor: colors.border,
              color: colors.text
            }}
          />
          <View className="flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => setSortModalVisible(true)}
              activeOpacity={0.7}
              className="flex-row items-center justify-end gap-2 mt-3"
            >
              <ArrowsIcon width={20} height={20} color={'#fff'} />
              <Text className="text-white font-albertMedium text-md">Order</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              className="flex-row items-center justify-end gap-2 mt-3"
            >
              <FilterIcon width={20} height={20} color={'#fff'} />
              <Text className="text-white font-albertMedium text-md">Filters</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{ gap: 10, paddingBottom: 30 }}
          data={recipes}
          renderItem={({ item }) => <FoodCard recipe={item} navigation={navigation} />}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={
            !isFetching ? (
              <Text style={{ color: colors.text, textAlign: 'center' }}>
                No recipes found.
              </Text>
            ) : (<View className="flex-1 items-center justify-center"><ActivityIndicator /></View>)
          }
        />
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={sortModalVisible}
        onRequestClose={() => setSortModalVisible(false)}
      >
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}
        >
          <View style={{
            backgroundColor: colors.tabBarBg,
          }} className="px-5 pb-10 pt-5">
            {sortOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                onPress={() => handleSort(option)}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: colors.border
                }}
                className="px-2 py-5"
              >
                <Text className="font-albertMedium" style={{ color: colors.text }}>{option.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={() => setSortModalVisible(false)}
              className="bg-main-color p-4 rounded-xl"
            >
              <Text className="text-center font-albertSemibold text-lg" style={{ color: colors.text }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default HealthyFoodsScreen;