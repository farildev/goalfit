import {
  useFonts,
  AlbertSans_100Thin,
  AlbertSans_100Thin_Italic,
  AlbertSans_200ExtraLight,
  AlbertSans_200ExtraLight_Italic,
  AlbertSans_300Light,
  AlbertSans_300Light_Italic,
  AlbertSans_400Regular,
  AlbertSans_400Regular_Italic,
  AlbertSans_500Medium,
  AlbertSans_500Medium_Italic,
  AlbertSans_600SemiBold,
  AlbertSans_600SemiBold_Italic,
  AlbertSans_700Bold,
  AlbertSans_700Bold_Italic,
  AlbertSans_800ExtraBold,
  AlbertSans_800ExtraBold_Italic,
  AlbertSans_900Black,
  AlbertSans_900Black_Italic,
} from "@expo-google-fonts/albert-sans";
import { useState, useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const FontLoader = ({ children }) => {
  let [fontsLoaded] = useFonts({
    AlbertSans_100Thin,
    AlbertSans_100Thin_Italic,
    AlbertSans_200ExtraLight,
    AlbertSans_200ExtraLight_Italic,
    AlbertSans_300Light,
    AlbertSans_300Light_Italic,
    AlbertSans_400Regular,
    AlbertSans_400Regular_Italic,
    AlbertSans_500Medium,
    AlbertSans_500Medium_Italic,
    AlbertSans_600SemiBold,
    AlbertSans_600SemiBold_Italic,
    AlbertSans_700Bold,
    AlbertSans_700Bold_Italic,
    AlbertSans_800ExtraBold,
    AlbertSans_800ExtraBold_Italic,
    AlbertSans_900Black,
    AlbertSans_900Black_Italic,
  });

  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || !isAppReady) {
    return null;
  }

  return children;
};

export default FontLoader;
