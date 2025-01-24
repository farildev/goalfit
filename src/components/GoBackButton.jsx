import { View, Text, Pressable } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
const GoBackButton = () => {
  const { colors } = useTheme();
  const { goBack } = useNavigation();
  return (
    <Pressable onPress={() => goBack()} className="px-5">
      <Feather name='arrow-left' size={24} color={colors.text} />
    </Pressable>
  )
}

export default GoBackButton