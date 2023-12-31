import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import {persistor, store} from "@/store/store";
import {PersistGate} from "redux-persist/integration/react";
import {NavigationContainer} from "@react-navigation/native";
import AppNavigation from "./src/navagation/AppNavigation";
import {PaperProvider} from "react-native-paper";
import {lightTheme} from "@/hook/theme/useAppTheme";
import AuthProvider from "./src/helper/AuthProvider";
import {useAppTheme} from '@/hook/theme/useAppTheme'
import {SafeAreaProvider} from "react-native-safe-area-context";

// SplashScreen.preventAutoHideAsync()
export default function App() {
  const {colors} = useAppTheme()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={lightTheme}>
          <NavigationContainer>
            <SafeAreaProvider
              style={{backgroundColor: '#ffffff'}}
            >
              <AppNavigation/>
            </SafeAreaProvider>
            <AuthProvider/>
          </NavigationContainer>
          {/*<StatusBar backgroundColor={colors.text} />*/}
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
