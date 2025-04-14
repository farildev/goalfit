import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
const FoodDetailScreen = ({ route }) => {
  const { canGoBack, goBack } = useNavigation();
  const { recipe } = route.params;

  const handleGoBack = () => {
    if (canGoBack()) {
      goBack()
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="w-full h-[350px] relative">
        <TouchableOpacity
          onPress={handleGoBack}
          activeOpacity={0.8}
          style={{ zIndex: 20 }}
          className="absolute bg-white items-center justify-center w-10 h-10 rounded-full top-16 left-5"
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Image
          style={{ objectFit: 'cover' }}
          className="w-full h-full"
          source={{ uri: recipe.image }}
        />
      </View>
      <View className="p-5 w-full flex flex-col">
        <View className="flex-row items-center gap-2">
          <View className="px-5 py-2 rounded-full bg-blue-400/30 w-fit">
            <Text className="text-blue-500 font-albertSemibold">{recipe?.glutenFree ? "Gluten Free" : "Contain Gluten"}</Text>
          </View>
          <View className="px-5 py-2 rounded-full bg-red-400/30 w-fit">
            <Text className="text-red-500 font-albertSemibold">{recipe?.dairyFree ? "Dairy Free" : "Contain Dairy"}</Text>
          </View>
          <View className="px-5 py-2 rounded-full bg-green-400/30 w-fit">
            <Text className="text-green-500 font-albertSemibold">{recipe?.vegan || recipe?.vegetarian ? "Vegan" : "No Vegan"}</Text>
          </View>
        </View>
        <Text className="text-3xl mt-5 font-albertSemibold text-white">{recipe.title}</Text>
        <View className="flex-row items-center flex-wrap gap-2 mt-3">
          {recipe?.dishTypes.map((dish, index) => (
            <Text key={index} className="text-white font-albertRegular px-4 py-2 rounded-lg bg-gray-100/20">#{dish}</Text>
          ))}
        </View>
        <View className='mt-5'>
          <Text className="text-white font-albertMedium text-xl">Ingredients</Text>
          <View className="flex flex-col mt-3">
            {
              recipe.nutrition?.ingredients.map((ingredient, index) => (
                <View key={index} className="flex items-center justify-between flex-row gap-2">
                  <Text className="text-white text-lg capitalize flex-1 font-albertSemibold">{ingredient?.name}</Text>
                  <Text className="text-white mt-2 font-albertMedium text-md text-left">{ingredient?.amount} {ingredient?.unit}</Text>
                </View>
              ))
            }
          </View>
        </View>
        <View className='mt-5='>
          <Text className="text-white font-albertMedium text-xl">Nutrition value</Text>
          <FlatList
            className="mt-2"
            data={recipe.nutrition.nutrients.slice(0, 6)}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between', gap: 8, marginBottom: 8 }}
            renderItem={({ item }) => (
              <View className="bg-neutral-900 border border-gray-100/10 p-3 flex-1 flex-col items-center rounded-lg">
                <Text className="text-white text-lg text-center font-albertSemibold">{item.name}</Text>
                <Text className="text-white text-center mt-2 font-albertMedium text-lg">{item.amount}{item.unit}</Text>
              </View>
            )}
            scrollEnabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default FoodDetailScreen
