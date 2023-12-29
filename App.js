import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import {persistor, store} from "./src/store/store";
import {PersistGate} from "redux-persist/integration/react";
import {NavigationContainer} from "@react-navigation/native";
import AppNavigation from "./src/navagation/AppNavigation";
import {PaperProvider} from "react-native-paper";
import {lightTheme} from "./src/hook/theme/useAppTheme";
import AuthProvider from "./src/helper/AuthProvider";
import {useAppTheme} from './src/hook/theme/useAppTheme'
export default function App() {
  const {colors} = useAppTheme()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={lightTheme}>
          <NavigationContainer>
            <AppNavigation />
            <AuthProvider />
          </NavigationContainer>
          <StatusBar backgroundColor={colors.background} />
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
