import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import StackNavigation from "./StackNavigation";
import { Colors } from "@/constants/Colors";
import { Toaster } from "sonner-native";

const RootNavigation = () => {
  const colorScheme = 'dark';

  const customDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: Colors.dark.background,
      text: Colors.dark.text,
      cardItem: Colors.dark.cardItem,
      border: Colors.dark.border,
      tabBarBg: Colors.dark.tabBarBg,
      button: Colors.mainColor,
      placeholder: Colors.light.placeholder
    },
  };

  const customLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.light.background,
      text: Colors.light.text,
      cardItem: Colors.light.cardItem,
      border: Colors.light.border,
      tabBarBg: Colors.light.tabBarBg,
      button: Colors.light.button,
      placeholder: Colors.dark.placeholder
    },
  };

  return (
    <NavigationContainer theme={colorScheme === "dark" ? customDarkTheme : customLightTheme}>
      <StackNavigation />
      <Toaster richColors closeButton />
    </NavigationContainer>
  );
};

export default RootNavigation;
