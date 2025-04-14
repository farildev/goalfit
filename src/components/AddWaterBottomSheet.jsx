import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { Colors } from "@/constants/Colors";
import { Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { forwardRef, useCallback } from "react";
import { CoffeeIcon, CupSodaIcon, GlassWaterIcon, MinusIcon, PlusIcon } from "lucide-react-native";

const AddWaterBottomSheet = forwardRef(({ }, ref) => {
  const snapPoints = ['75%']

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
          <Text className="text-white font-albertSemibold text-2xl text-center">💧 Add water</Text>
        </View>
        <View className="flex-col w-full mx-auto py-10">
          <Text className="text-white  text-start font-albertMedium text-xl">Select type of liquid</Text>
          <ScrollView className="mt-5" horizontal={true} contentContainerStyle={{ gap: 15 }}>
            <View className="flex-col gap-1">
              <View className="flex items-center justify-center p-8 rounded-lg bg-neutral-800">
                <GlassWaterIcon />
              </View>
              <Text className="text-white font-albertRegular text-center">Water</Text>
            </View>
            <View className="flex-col gap-1">
              <View className="flex items-center justify-center p-8 rounded-lg bg-neutral-800">
                <CoffeeIcon />
              </View>
              <Text className="text-white font-albertRegular text-center">Coffee</Text>
            </View>
            <View className="flex-col gap-1">
              <View className="flex items-center justify-center p-8 rounded-lg bg-neutral-800">
                <CupSodaIcon />
              </View>
              <Text className="text-white font-albertRegular text-center">Soda</Text>
            </View>
            <View className="flex-col gap-1">
              <View className="flex items-center justify-center p-8 rounded-lg bg-neutral-800">
                <CoffeeIcon />
              </View>
              <Text className="text-white font-albertRegular text-center">Tea</Text>
            </View>
          </ScrollView>
        </View>
        <View className="flex-row justify-between items-center">
          <Pressable className="text-white bg-main-color rounded-lg p-4">
            <MinusIcon size={24} color={'white'} />
          </Pressable>
          <View className="flex-row">
            <Text className="text-white font-albertMedium text-xl">250ml /</Text>
            <Text className="text-white font-albertMedium text-xl"> 250ml</Text>
          </View>
          <Pressable className="text-white bg-main-color rounded-lg p-4">
            <PlusIcon size={24} color={'white'} />
          </Pressable>
        </View>
        <TouchableOpacity activeOpacity={0.8} className="bg-main-color flex items-center justify-center p-4 rounded-lg w-full mt-5">
          <Text className="text-white font-albertMedium text-lg">Apply</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  )
})

export default AddWaterBottomSheet;
