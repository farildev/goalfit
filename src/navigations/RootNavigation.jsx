import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import StackNavigation from "./StackNavigation";
import { Colors } from "@/constants/Colors";

const RootNavigation = () => {
  const colorScheme = useColorScheme();

  const customDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: Colors.dark.background,
      text: Colors.dark.text,
      cardItem : Colors.dark.cardItem,
      border : Colors.dark.border,
      tabBarBg : Colors.dark.tabBarBg
    },
  };

  const customLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.light.background,
      text: Colors.light.text,
      cardItem : Colors.light.cardItem,
      border : Colors.light.border,
      tabBarBg : Colors.light.tabBarBg
    },
  };

  return (
    <NavigationContainer theme={colorScheme === "dark" ? customDarkTheme : customLightTheme}>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
