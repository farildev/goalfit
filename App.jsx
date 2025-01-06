import "@/assets/styles/globals.css";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import RootNavigation from '@/navigations/RootNavigation'
import FontLoader from '@/hocs/FontLoader'

const App = () => {
  return (
    <GestureHandlerRootView style={{flex : 1}}>
      <SafeAreaProvider>
        <FontLoader>
          <RootNavigation />
        </FontLoader>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default App