import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from 'react'
import TabNavigation from "./TabNavigation";
import BmiResultScreen from "@/screens/BmiResultScreen";

const StackNavigation = () => {
  const { Navigator, Screen, Group } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen options={{headerShown : false}} name="Tabs" component={TabNavigation} />
      <Screen options={{headerShown : false}} name="BmiResult" component={BmiResultScreen} />
    </Navigator>
  )
}

export default StackNavigation