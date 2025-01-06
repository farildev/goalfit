import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View, Text } from 'react-native'
import React from 'react'
import TabNavigation from "./TabNavigation";

const StackNavigation = () => {
  const { Navigator, Screen, Group } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen options={{headerShown : false}} name="Tabs" component={TabNavigation} />
    </Navigator>
  )
}

export default StackNavigation