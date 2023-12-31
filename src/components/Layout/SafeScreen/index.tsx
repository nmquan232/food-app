import {Platform, SafeAreaView, StatusBar} from 'react-native';
import type {PropsWithChildren} from 'react';
import {useAppTheme} from "@/hook/theme/useAppTheme";

function SafeScreen({children}: PropsWithChildren) {
  const {colors} = useAppTheme();

  return (
    <SafeAreaView
      style={{backgroundColor: colors.background, flex: 1}}
    >
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      {children}
    </SafeAreaView>
  );
}

export default SafeScreen;
