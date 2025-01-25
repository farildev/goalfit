import { ScrollView, TouchableOpacity, RefreshControl, Text, View, TextInput, FlatList } from 'react-native'
import { useState, useCallback } from 'react';
import { useTheme } from '@react-navigation/native';
import { useGetRecipesQuery } from '@/store/services/recipeService';
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import FoodCard from '@/components/Foods/FoodCard';
import FilterIcon from '@/assets/icons/FilterIcon';
import ArrowsIcon from '@/assets/icons/ArrowsIcon';
const HealthyFoodsScreen = () => {
  const { colors } = useTheme();
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const { data, isLoading } = useGetRecipesQuery({
    q: search,
    limit: 10,
  });

  const recipes = data?.recipes;
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={colorScheme === "dark" ? '#000' : '#fff'}
          colors={[colorScheme === "dark" ? '#000000' : '#fff']}
        />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 16 }}
      className="flex-1 p-5">
      <View className="flex-col gap-3">
        <TextInput onChangeText={(value) => setSearch(value)} className="flex-1 p-4 rounded-lg font-albertRegular" placeholderTextColor={'#c0c0c0'} placeholder='Search food name' style={{ borderWidth: 1, borderColor: colors.border, color: colors.text }} />
        <View className="flex-row items-center justify-between">
          <TouchableOpacity activeOpacity={0.7} className="flex-row items-center justify-end gap-2 mt-3">
            <ArrowsIcon width={20} height={20} color={'#fff'} />
            <Text className="text-white font-albertMedium text-md">Order</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} className="flex-row items-center justify-end gap-2 mt-3">
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
          !isLoading && (
            <Text style={{ color: colors.text, textAlign: 'center' }}>
              No recipes found.
            </Text>
          )
        }
      />
    </ScrollView>
  )
}

export default HealthyFoodsScreen