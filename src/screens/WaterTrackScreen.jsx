import { View, Text, TextInput, Pressable } from 'react-native'
import { useTheme } from '@react-navigation/native'
const WaterTrackScreen = () => {
  const { colors } = useTheme();
  return (
    <View className="flex-1">
      <View className="p-5">
        <View className="flex-row">
          <View className="w-[65%] flex-col gap-4">
            <View className="bg-yellow-500/50 p-3 rounded-2xl">
              <View className="flex-row gap-3 items-center justify-between">
                <Text style={{color : colors.text}} className="text-lg font-albertSemibold">Target hydration</Text>
                <Pressable className="bg-white py-2 px-4 rounded-full">
                  <Text className="font-albertMedium">Edit</Text>
                </Pressable>
              </View>
              <Text style={{color : colors.text}} className="mt-10 text-4xl">2500 ml</Text>
            </View>
            <View className="bg-blue-500/50 p-3 rounded-2xl">
              <View className="flex-row gap-3 items-center justify-between">
                <Text style={{color : colors.text}} className="text-lg font-albertSemibold">Current hydration</Text>
              </View>
              <Text style={{color : colors.text}} className="mt-10 text-4xl">500 ml</Text>
            </View>
          </View>
          <View className="flex-1">

          </View>
        </View>
        <View>
          <Text style={{color : colors.text}} className="mt-10 text-lg font-albertMedium">Drink logs</Text>
        </View>
      </View>
    </View>
  )
}

export default WaterTrackScreen