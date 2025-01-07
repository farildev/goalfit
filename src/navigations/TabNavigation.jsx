import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/HomeScreen";
import BmiTrackScreen from "@/screens/BmiTrackScreen";
import WaterTrackScreen from "@/screens/WaterTrackScreen";
import HealthyFoodsScreen from "@/screens/HealthyFoodsScreen";
import Fonts from "@/constants/Fonts";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";

const TabNavigation = () => {
  const { Navigator, Screen, Group } = createBottomTabNavigator();
  const { bottom } = useSafeAreaInsets();
  const { colors } = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: Fonts["600SemiBold"],
          fontSize: 14,
        },
        tabBarStyle: {
          marginBottom: bottom,
          marginHorizontal: 20,
          borderRadius: 24,
          elevation: 0,
          borderColor: colors.border,
          borderWidth: 1,
          borderTopWidth: 1,
        },
        tabBarShowLabel: false,
        tabBarItemStyle: {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        },
      }}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Bmi" component={BmiTrackScreen} />
      <Screen name="Water" component={WaterTrackScreen} />
      <Screen name="Foods" component={HealthyFoodsScreen} />
    </Navigator>
  );
};

export default TabNavigation;
