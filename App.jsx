import "@/assets/styles/globals.css";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import RootNavigation from '@/navigations/RootNavigation'
import FontLoader from '@/hocs/FontLoader'
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { store, persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
const App = () => {
  const colorScheme = useColorScheme();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <FontLoader>
              <RootNavigation />
              <StatusBar style={colorScheme === 'dark' ? 'dark' : 'light'} />
            </FontLoader>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  )
}

export default App