import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import TimerIcon from '@/assets/icons/TimerIcon';
const FoodCard = ({ recipe, navigation }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('FoodDetail', { recipe })}
      activeOpacity={0.8} style={{ backgroundColor: colors.cardItem }} className="p-3 rounded-[20px] gap-5 flex-row justify-between">
      <View className="h-36 w-[35%] shrink-0 overflow-hidden rounded-2xl">
        <Image
          style={{ objectFit: 'cover' }}
          className="w-full h-full"
          source={{ uri: recipe?.image }} />
      </View>
      <View className="flex-1">
        <Text numberOfLines={1} style={{ color: colors.text }} className="font-albertSemibold text-xl">{recipe?.title}</Text>
        <Text numberOfLines={2} className="font-albertRegular text-gray-500">lorem ipsum dolor sit amet</Text>
        <View className="flex-col gap-2 mt-3">
          <View className="flex-row items-center gap-1">
            <FontAwesome name="star" size={14} color="yellow" />
            <Text className="font-albertSemibold" style={{ color: colors.text }}>{recipe?.healthScore}</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <TimerIcon color="#c0c0c0" width={14} height={14} />
            <Text className="font-albertSemibold" style={{ color: colors.text }}>{recipe?.preparationMinutes} minutes</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <FontAwesome5 name="gripfire" size={14} color="#c0c0c0" />
            <Text className="font-albertSemibold" style={{ color: colors.text }}>{recipe?.servings}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default FoodCard
