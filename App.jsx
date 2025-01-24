import "@/assets/styles/globals.css";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import RootNavigation from '@/navigations/RootNavigation'
import FontLoader from '@/hocs/FontLoader'
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
const App = () => {
  const colorScheme = useColorScheme();
  return (
    <GestureHandlerRootView style={{flex : 1}}>
      <SafeAreaProvider>
        <FontLoader>
          <RootNavigation />
          <StatusBar style={colorScheme === 'dark' ? 'dark' : 'light'} />
        </FontLoader>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default App