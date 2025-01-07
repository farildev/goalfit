import { View, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <View className={`flex-1 px-5`} style={{backgroundColor : colors.background}}>
      <Text className="font-albertMedium">Salam</Text>
    </View>
  )
}

export default HomeScreen