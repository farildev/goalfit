import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BmiResultScreen = ({ route }) => {
  const { bmi, category } = route.params;
  const { colors } = useTheme();
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <View className="flex-1 p-5">
        <Text className="text-2xl font-albertSemibold text-center mb-6">Your BMI Result</Text>
        <AnimatedCircularProgress
          size={200}
          width={15}
          fill={bmi ? (bmi / 40) * 100 : 0}
          tintColor={bmi < 18.5 ? "#FFC107" : bmi < 25 ? "#4CAF50" : "#F44336"}
          backgroundColor="#E0E0E0"
          rotation={0}
        >
          {() => (
            <Text className="text-4xl font-albertSemibold" style={{ color: colors.text }}>
              {bmi || '---'}
            </Text>
          )}
        </AnimatedCircularProgress>

        <Text className="text-xl mt-5 font-albertMedium text-center" style={{ color: colors.text }}>
          {category}
        </Text>
      </View>

      <View className='w-full px-5'>
        <TouchableOpacity
          style={{ marginBottom: bottom }}
          onPress={() => navigation.goBack()}
          className="bg-black p-4 mt-6 rounded-lg w-full justify-center items-center"
          activeOpacity={0.7}
        >
          <Text className="text-white font-albertSemibold text-md">Recalculate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BmiResultScreen;
