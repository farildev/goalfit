import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import HomeScreen from "@/screens/HomeScreen";
import BmiTrackScreen from "@/screens/BmiTrackScreen";
import WaterTrackScreen from "@/screens/WaterTrackScreen";
import HealthyFoodsScreen from "@/screens/HealthyFoodsScreen";
import Fonts from "@/constants/Fonts";
import HomeActive from "@/assets/icons/HomeActive";
import HomeInactive from "@/assets/icons/HomeInactive";
import ProfileActive from "@/assets/icons/ProfileActive";
import ProfileInactive from "@/assets/icons/ProfileInactive";
import AppleActive from "@/assets/icons/AppleActive";
import AppleInactive from "@/assets/icons/AppleInactive";
import WaterActive from "@/assets/icons/WaterActive";
import WaterInactive from "@/assets/icons/WaterInactive";
import BmiActive from "@/assets/icons/BmiActive";
import BmiInactive from "@/assets/icons/BmiInactive";
import GoBackButton from "@/components/GoBackButton";

const TabNavigation = () => {
  const { Navigator, Screen, Group } = createBottomTabNavigator();
  const { bottom } = useSafeAreaInsets();
  const { colors } = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: Fonts["600SemiBold"],
          fontSize: 16,
        },
        headerLeft : () => (<GoBackButton />),
        tabBarStyle: {
          marginBottom: bottom,
          marginHorizontal: 20,
          borderRadius: 20,
          elevation: 0,
          borderColor: colors.border,
          borderWidth: 1,
          borderTopWidth: 1,
          paddingBottom: 0,
          paddingTop: 0,
          height: 72,
          backgroundColor: colors.tabBarBg
        },
        tabBarShowLabel: false,
        tabBarItemStyle: {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          flex: 1
        },

      }}
    >
      <Screen name="Home"
        options={{
          tabBarIcon: ({ focused }) => focused ? (<HomeActive />) : (<HomeInactive />)
        }}
        component={HomeScreen} />

      <Screen
        name="Water"
        component={WaterTrackScreen}
        options={{
          headerTitle : "Water Tracker",
          tabBarIcon : ({focused}) => focused ? (<WaterActive />) : (<WaterInactive />)
        }}
      />
      <Screen
        name="Bmi"
        component={BmiTrackScreen}
        options={{
          headerTitle : "Calculate BMI",
          tabBarIcon : ({focused}) => focused ? (<BmiActive />) : (<BmiInactive />)
        }}
      />
      <Screen 
      name="Foods" 
      component={HealthyFoodsScreen}
      options={{
        tabBarIcon : ({focused}) => focused ? (<AppleActive />) : (<AppleInactive />)
      }}
      />
      <Screen
        name="Profile"
        component={Screen}
        options={{
          tabBarIcon: ({ focused }) => focused ? (<ProfileActive />) : (<ProfileInactive />)
        }}
      />
    </Navigator>
  );
};

export default TabNavigation;
