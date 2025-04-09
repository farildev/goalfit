import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import HomeScreen from "@/screens/HomeScreen";
import BmiTrackScreen from "@/screens/BmiTrackScreen";
import WaterTrackScreen from "@/screens/WaterTrackScreen";
import HealthyFoodsScreen from "@/screens/HealthyFoodsScreen";
import Fonts from "@/constants/Fonts";
import GoBackButton from "@/components/GoBackButton";
import { BeefIcon, CircleGaugeIcon, DropletsIcon, HouseIcon, UserRoundIcon } from "lucide-react-native";
import { Colors } from "@/constants/Colors";

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
        headerLeft: () => (<GoBackButton />),
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
          tabBarIcon: ({ focused }) => focused ? (<HouseIcon size={24} strokeWidth={2} color={Colors.mainColor} />) : (<HouseIcon size={24} strokeWidth={1.5} color={Colors["light-gray"]} />)
        }}
        component={HomeScreen} />

      <Screen
        name="Water"
        component={WaterTrackScreen}
        options={{
          headerTitle: "Water Tracker",
          tabBarIcon: ({ focused }) => focused ? (<DropletsIcon size={24} color={Colors.mainColor} strokeWidth={2} />) : (<DropletsIcon size={24} color={Colors["light-gray"]} strokeWidth={1.5} />)
        }}
      />
      <Screen
        name="Bmi"
        component={BmiTrackScreen}
        options={{
          headerTitle: "Calculate BMI",
          tabBarIcon: ({ focused }) => focused ? (<CircleGaugeIcon color={Colors.mainColor} size={24} strokeWidth={2} />) : (<CircleGaugeIcon size={24} color={Colors["light-gray"]} strokeWidth={1.5} />)
        }}
      />
      <Screen
        name="Foods"
        component={HealthyFoodsScreen}
        options={{
          tabBarIcon: ({ focused }) => focused ? (<BeefIcon size={24} color={Colors.mainColor} strokeWidth={2} />) : (<BeefIcon size={24} color={Colors["light-gray"]} strokeWidth={1.5} />)
        }}
      />
      <Screen
        name="Profile"
        component={Screen}
        options={{
          tabBarIcon: ({ focused }) => focused ? (<UserRoundIcon size={24} color={Colors.mainColor} strokeWidth={2} />) : (<UserRoundIcon size={24} color={Colors["light-gray"]} strokeWidth={1.5} />)
        }}
      />
    </Navigator>
  );
};

export default TabNavigation;
