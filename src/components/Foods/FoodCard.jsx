import { View, Text, Image } from 'react-native'
import { useTheme } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import TimerIcon from '@/assets/icons/TimerIcon';
const FoodCard = () => {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor : colors.cardItem }} className="p-3 rounded-[20px] gap-5 flex-row justify-between">
      <View className="h-36 w-[35%] shrink-0 overflow-hidden rounded-2xl">
        <Image
          style={{ objectFit: 'cover' }}
          className="w-full h-full"
          source={{ uri: 'https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D' }} />
      </View>
      <View className="flex-1">
        <Text numberOfLines={1} style={{ color: colors.text }} className="font-albertSemibold text-xl">Teriyaki souslu toyuq</Text>
        <Text numberOfLines={2} className="font-albertRegular text-gray-500">lorem ipsum dolor sit amet</Text>
        <View className="flex-col gap-2 mt-3">
          <View className="flex-row items-center gap-1">
            <FontAwesome name="star" size={14} color="yellow" />
            <Text className="font-albertSemibold" style={{ color: colors.text }}>4.5</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <TimerIcon color="#c0c0c0" width={14} height={14} />
            <Text className="font-albertSemibold" style={{ color: colors.text }}>30 minutes</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <FontAwesome5 name="fire-alt" size={14} color="#c0c0c0" />
            <Text className="font-albertSemibold" style={{ color: colors.text }}>Italy, Greek</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default FoodCard