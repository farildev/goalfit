import { View, Text, Pressable, ScrollView } from 'react-native'
import { useTheme } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'

const WaterTrackScreen = () => {
  const { colors } = useTheme();
  return (
    <ScrollView className="flex-1 relative">
      <View className="p-5 h-full">
        <View className="flex-row">
          <View className="w-full flex-col gap-4">
            <View className="bg-yellow-500/50 p-3 rounded-2xl">
              <View className="flex-row gap-3 items-center justify-between">
                <Text style={{ color: colors.text }} className="text-lg font-albertSemibold">Target hydration</Text>
                <Pressable className="bg-white py-2 px-4 rounded-full">
                  <Text className="font-albertMedium">Edit</Text>
                </Pressable>
              </View>
              <Text style={{ color: colors.text }} className="mt-10 text-4xl">2500 ml</Text>
            </View>
            <View className="bg-blue-500/50 p-3 rounded-2xl">
              <View className="flex-row gap-3 items-center justify-between">
                <Text style={{ color: colors.text }} className="text-lg font-albertSemibold">Current hydration</Text>
              </View>
              <Text style={{ color: colors.text }} className="mt-10 text-4xl">500 ml</Text>
            </View>
          </View>
          <View className="flex-1">

          </View>
        </View>
        <Pressable className=" h-fit flex justify-center items-center mt-5 bg-main-color p-4 rounded-xl w-full">
          <Text className="text-white font-albertMedium text-lg">Salam</Text>
        </Pressable>
        <View>
          <Text style={{ color: colors.text }} className="mt-10 text-lg font-albertMedium">Drink logs</Text>
          <View className="flex flex-col gap-2 mt-4">
            <View className="flex flex-row border-b border-gray-100/20 py-5 items-center justify-between">
              <Text className="text-white font-albertMedium">+250 ml</Text>
              <Text className="text-white font-albertMedium">250/2500 ml</Text>
            </View>
            <View className="flex flex-row border-b border-gray-100/20 py-5 items-center justify-between">
              <Text className="text-white font-albertMedium">+250 ml</Text>
              <Text className="text-white font-albertMedium">500/2500 ml</Text>
            </View>
            <View className="flex flex-row border-b border-gray-100/20 py-5 items-center justify-between">
              <Text className="text-white font-albertMedium">+250 ml</Text>
              <Text className="text-white font-albertMedium">750/2500 ml</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default WaterTrackScreen
