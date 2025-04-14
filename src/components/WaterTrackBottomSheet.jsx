import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { Colors } from "@/constants/Colors";
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { forwardRef, useCallback } from "react";
import { MinusIcon, PlusIcon } from "lucide-react-native";

const WaterTrackBottomSheet = forwardRef(({ }, ref) => {
  const snapPoints = ['50%']

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  return (
    <BottomSheet snapPoints={snapPoints}
      ref={ref}
      index={-1}
      backdropComponent={renderBackdrop}
      enableDynamicSizing={false}
      enablePanDownToClose={true}
      handleIndicatorStyle={{
        backgroundColor: "white",
        width: 40,
        height: 4,
      }}
      handleStyle={{
        backgroundColor: "#151515",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        flex: 1
      }}
    >

      <View className="flex-1 bg-dark-bg p-4">
        <View className="mt-3">
          <Text className="text-white font-albertSemibold text-2xl text-center">💧 Daily hydration target</Text>
        </View>
        <View className="flex-col w-full mx-auto py-5">
          <TextInput keyboardType="numeric" placeholderTextColor={'#cecece'} placeholder="Add daily hydration value (ml)" className="border text-white font-albertRegular border-gray-100/10 p-4 rounded-lg w-full" />
          <Text className="text-start mt-2 font-albertMedium text-sm text-gray-200">* Values are calculated in millilitres.</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} className="bg-main-color flex items-center justify-center p-4 rounded-lg w-full">
          <Text className="text-white font-albertMedium text-lg">Apply</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  )
})

export default WaterTrackBottomSheet
