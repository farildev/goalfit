import { ScrollView } from 'react-native'
import FoodCard from '@/components/Foods/FoodCard';

const HealthyFoodsScreen = () => {
  return (
    <ScrollView contentContainerStyle={{gap : 16}} className="flex-1 p-5">
      <FoodCard />
      <FoodCard />
      <FoodCard />
    </ScrollView>
  )
}

export default HealthyFoodsScreen