import Slider from '@react-native-community/slider';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Foundation, FontAwesome6 } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { calculateBMI } from '@/utils/bmiCalculator';
import { useNavigation } from '@react-navigation/native';
const BmiTrackScreen = () => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [selectedGender, setSelectedGender] = useState("male");

  const handleCalculate = () => {
    const { bmi, category } = calculateBMI(parseFloat(weight), parseFloat(height), parseInt(age), selectedGender);
    navigate('BmiResult', { bmi, category });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
      <View className="flex-1 p-5">
        <Text className="text-2xl font-albertSemibold mb-6">Calculate Your BMI</Text>
        <View className="flex-1">
          <View className="flex-col gap-2">
            <View className="flex-row gap-5">
              <TouchableOpacity onPress={() => setSelectedGender("male")} activeOpacity={0.8}
                className={`flex-1 justify-center items-center flex-col p-5 rounded-xl ${selectedGender === "male" && "border-2 border-main-color"}`}
                style={{ backgroundColor: colors.cardItem }}
              >
                {selectedGender === 'male' && <View className="absolute top-2 right-2"><FontAwesome6 name="check-circle" size={20} color={Colors.mainColor} /></View>}
                <Foundation name="male-symbol" size={64} color={Colors.mainColor} />
                <Text className="font-albertMedium text-lg" style={{ color: colors.text }}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedGender("female")} activeOpacity={0.8}
                className={`flex-1 justify-center items-center flex-col p-5 rounded-xl ${selectedGender === "female" && "border-2 border-[#FF00A8]"}`}
                style={{ backgroundColor: colors.cardItem }}
              >
                {selectedGender === 'female' && <View className="absolute top-2 right-2"><FontAwesome6 name="check-circle" size={20} color={"#FF00A8"} /></View>}
                <Foundation name="female-symbol" size={64} color="#FF00A8" />
                <Text className="font-albertMedium text-lg" style={{ color: colors.text }}>Female</Text>
              </TouchableOpacity>
            </View>
            <View className="mt-5 gap-2">
              <Text className="text-lg font-albertSemibold">Height (cm)</Text>
              <View className="px-5 py-7 rounded-xl" style={{ backgroundColor: colors.cardItem }}>
                <View className="flex-row items-center">
                  <Text className="text-gray-500 font-albertMedium">Your height : </Text>
                  <Text className="text-2xl font-albertSemibold" style={{ color: colors.text }}>{height.toFixed(0)} sm</Text>
                </View>
                <Slider
                  onValueChange={(value) => setHeight(value)}
                  style={{ width: '100%', height: 40 }}
                  value={height}
                  minimumValue={100}
                  maximumValue={250}
                  thumbTintColor={selectedGender === "male" ? Colors.mainColor : "#FF00A8"}
                  minimumTrackTintColor={selectedGender === "male" ? Colors.mainColor : "#FF00A8"}
                  maximumTrackTintColor="#fff"
                />
              </View>
            </View>
          </View>
          <View className="flex-row gap-4 mt-5">
            <View className="flex-1 gap-2">
              <Text className="text-md font-albertSemibold">Weight (kg)</Text>
              <View className="flex-row items-center gap-2 border rounded-lg p-5" style={{ borderColor: colors.border, backgroundColor: colors.cardItem }}>
                <Text className='font-albertMedium text-gray-400'>kg</Text>
                <TextInput onChangeText={(value) => setWeight(value)} keyboardType='numeric' className="text-md font-albertMedium" maxLength={3} placeholder='Enter your weight' />
              </View>
            </View>
            <View className="flex-1 gap-2">
              <Text className="text-md font-albertSemibold">Age (year)</Text>
              <View className="flex-1 flex-row items-center gap-2 border rounded-lg p-5" style={{ borderColor: colors.border, backgroundColor: colors.cardItem }}>
                <Text className='font-albertMedium text-gray-400'>№</Text>
                <TextInput onChangeText={(value) => setAge(value)} keyboardType='numeric' className="text-md font-albertMedium" maxLength={3} placeholder='Enter your age' />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={handleCalculate} activeOpacity={0.7} className="bg-black flex items-center p-4 mt-4 rounded-lg">
          <Text className="text-white font-albertSemibold text-md">Calculate BMI</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default BmiTrackScreen;
