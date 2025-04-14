import { View, Text, Pressable, ScrollView } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useCallback, useRef } from 'react';
import WaterTrackBottomSheet from '@/components/WaterTrackBottomSheet';
import AddWaterBottomSheet from '@/components/AddWaterBottomSheet';

const WaterTrackScreen = () => {
  const { colors } = useTheme();
  const waterTrackSheetRef = useRef(null);
  const addWaterSheetRef = useRef(null);

  const handleTrackModal = useCallback(() => {
    waterTrackSheetRef.current?.expand();
  }, [])
  const handleAddWaterModal = useCallback(() => {
    addWaterSheetRef.current?.expand();
  }, [])
  return (
    <ScrollView className="flex-1 relative">
      <View className="p-5 h-full">
        <View className="flex-row">
          <View className="w-full flex-col gap-4">
            <View className="bg-yellow-500/50 p-3 rounded-2xl">
              <View className="flex-row gap-3 items-center justify-between">
                <Text style={{ color: colors.text }} className="text-lg font-albertSemibold">Target hydration</Text>
                <Pressable onPress={handleTrackModal} className="bg-white py-2 px-4 rounded-full">
                  <Text className="font-albertMedium">Edit</Text>
                </Pressable>
              </View>
              <Text style={{ color: colors.text }} className="mt-10 text-4xl">2500 ml</Text>
            </View>
            <View className="bg-blue-500/50 p-3 rounded-2xl">
              <View className="flex-row gap-3 items-center justify-between">
                <Text style={{ color: colors.text }} className="text-lg font-albertSemibold">Current hydration</Text>
              </View>
              <Text style={{ color: colors.text }} className="mt-10 text-4xl">750 ml</Text>
            </View>
          </View>
        </View>
        <Pressable onPress={handleAddWaterModal} className=" h-fit flex justify-center items-center mt-5 bg-main-color p-4 rounded-xl w-full">
          <Text className="text-white font-albertMedium text-lg">Add Water (+250ml)</Text>
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
        <WaterTrackBottomSheet ref={waterTrackSheetRef} />
        <AddWaterBottomSheet ref={addWaterSheetRef} />
      </View>
    </ScrollView>
  )
}

export default WaterTrackScreen
