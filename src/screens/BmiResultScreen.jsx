import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesome5, Foundation, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import GoBackButton from '@/components/GoBackButton';
const BmiResultScreen = ({ route }) => {
  const { bmi, category, age, selectedGender, height, weight } = route.params;
  const { colors } = useTheme();
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <View className="flex-row items-center justify-start w-full gap-2 mt-5">
        <GoBackButton />
        <Text style={{ color: colors.text }} className="text-2xl font-albertSemibold">Your BMI Result</Text>
      </View>
      <View className="flex-1 p-5 flex-col justify-between">

        <View className="mb-10 flex items-center justify-center w-full">
          <AnimatedCircularProgress
            size={270}
            width={18}
            fill={bmi ? (bmi / 40) * 100 : 0}
            tintColor={bmi < 18.5 ? "#FFC107" : bmi < 25 ? "#4CAF50" : "#F44336"}
            backgroundColor="#E0E0E0"
            rotation={0}
          >
            {() => (
              <Text className="text-6xl font-albertSemibold" style={{ color: colors.text }}>
                {bmi || '---'}
              </Text>
            )}
          </AnimatedCircularProgress>

          <Text className="text-xl mt-5 font-albertMedium text-center" style={{ color: colors.text }}>
            {category}
          </Text>
        </View>
      </View>

      <View className="flex-row items-center justify-between flex-wrap px-5 gap-5">
        <View style={{ backgroundColor: colors.cardItem, borderColor: colors.border }} className="w-[47%] relative border gap-1 p-5 rounded-lg">
          <FontAwesome5 className="absolute top-4 right-4" name="birthday-cake" size={20} color={colors.text} />
          <Text style={{ color: colors.text }} className="text-2xl font-albertSemibold">Age</Text>
          <Text className="capitalize text-lg font-albertMedium text-gray-400">{age} years</Text>
        </View>
        <View style={{ backgroundColor: colors.cardItem, borderColor: colors.border }} className="w-[47%] relative border gap-1 p-5 rounded-lg">
          <Foundation className="absolute top-4 right-4" name={selectedGender === "male" ? "male-symbol" : "female-symbol"} size={28} color={colors.text} />
          <Text style={{ color: colors.text }} className="text-2xl font-albertSemibold">Gender</Text>
          <Text className="capitalize text-lg font-albertMedium text-gray-400">{selectedGender}</Text>
        </View>
        <View style={{ backgroundColor: colors.cardItem, borderColor: colors.border }} className="w-[47%] relative border gap-1 p-5 rounded-lg">
          <MaterialIcons className="absolute top-4 right-4" name="height" size={28} color={colors.text} />
          <Text style={{ color: colors.text }} className="text-2xl font-albertSemibold">Height</Text>
          <Text className="capitalize text-lg font-albertMedium text-gray-400">{height.toFixed(0)} cm</Text>
        </View>
        <View style={{ backgroundColor: colors.cardItem, borderColor: colors.border }} className="w-[47%] relative border gap-1 p-5 rounded-lg">
          <MaterialCommunityIcons className="absolute top-4 right-4" name="weight-kilogram" size={24} color={colors.text} />
          <Text style={{ color: colors.text }} className="text-2xl font-albertSemibold">Weight</Text>
          <Text className="capitalize text-lg font-albertMedium text-gray-400">{weight} kg</Text>
        </View>
      </View>

      <View className='w-full px-5'>
        <TouchableOpacity
          style={{ marginBottom: bottom, backgroundColor: colors.button }}
          onPress={() => navigation.goBack()}
          className="bg-black p-4 mt-6 rounded-lg w-full justify-center items-center"
          activeOpacity={0.7}
        >
          <Text className="text-white font-albertSemibold text-lg">Recalculate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BmiResultScreen;
