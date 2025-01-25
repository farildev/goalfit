import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useGetRecipeByIdQuery } from '@/store/services/recipeService';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
const FoodDetailScreen = ({ route }) => {
  const { canGoBack, goBack } = useNavigation();
  const { recipe } = route.params;
  const { data } = useGetRecipeByIdQuery(recipe.id);

  const handleGoBack = () => {
    if (canGoBack()) {
      goBack()
    } else {
      return null
    }
  }
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View className="w-full h-[40%] relative">
        <TouchableOpacity onPress={handleGoBack} activeOpacity={0.8} style={{ zIndex: 20 }} className="absolute bg-white items-center justify-center w-10 h-10 rounded-full top-16 left-5">
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Image
          style={{ objectFit: 'cover' }}
          className="w-full h-full object-cover"
          source={{ uri: data?.image }}
        />
      </View>
      <View className="p-5">
        <Text className="text-3xl font-albertSemibold text-white">{data?.name}</Text>
        <Text className="text-md text-white mt-4 font-albertRegular">{data?.instructions}</Text>
        <View className="flex-col gap-2 mt-4">
          <Text className="text-white text-lg font-albertSemibold">Ingredients</Text>
          {
            data?.ingredients.map((ingredient, index) => (<Text className="text-gray-400 text-md font-albertRegular">{ingredient}</Text>))
          }
        </View>
      </View>
    </ScrollView >
  )
}

export default FoodDetailScreen