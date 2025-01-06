import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from "@/screens/HomeScreen";
import BmiTrackScreen from "@/screens/BmiTrackScreen";
import WaterTrackScreen from "@/screens/WaterTrackScreen";
import HealthyFoodsScreen from "@/screens/HealthyFoodsScreen";

const TabNavigation = () => {
  const { Navigator, Screen, Group } = createBottomTabNavigator();
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Bmi" component={BmiTrackScreen} />
      <Screen name="Water" component={WaterTrackScreen} />
      <Screen name="Foods" component={HealthyFoodsScreen} />
    </Navigator>
  )
}

export default TabNavigation