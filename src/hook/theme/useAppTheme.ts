import {DefaultTheme as PaperDefaultTheme, MD3Theme, useTheme} from "react-native-paper";
import {DefaultTheme as NavigationTheme, Theme} from "@react-navigation/native";
import {darkColors, lightColors} from './colors'
import {MD3Colors} from "react-native-paper/lib/typescript/types";

export type CustomColors = {
  onPrimary: string;
  primary5: string;
  primary10: string;
  primary20: string;
  background2: string;
  background3: string;
  title: string;
  label: string;
  text: string;
  danger: string;
  grey1: string;
  grey2: string;
  grey3: string;
  bubble: string;
  textMessage: string;
  inputBackground: string;
  inputSearchBackground: string;
  inputSearchPlaceholder: string;
  primaryInactive: string;
  titleInactive: string;
  green: string;
  border: string;
  border2: string;
  border3: string;
  underlayColor: string;
  yellow: string;
  primaryRemake: Record<"1" | "5" | "10" | "20", string>,
  neutral: Record<"0" | "5" | "10" | "20" | "30" | "40" | "50" | "60" | "70", string>,
  delete: string,
  blue: string,
  red: string,
  white: string,
  bank: string
};
export type AppThemeColors = MD3Colors & CustomColors;
export type AppTheme = MD3Theme & {
  colors: AppThemeColors;
};

export const darkTheme = {
  ...PaperDefaultTheme,
  roundness: 4,
  version: 3,
  colors: darkColors,
};

export const lightTheme = {
  ...PaperDefaultTheme,
  roundness: 4,
  version: 3,
  colors: lightColors,
};

export const navigationTheme = {
  ...NavigationTheme,
  colors: {
    ...NavigationTheme.colors,
    background: lightColors.background,
  },
};

export const useAppTheme = () => useTheme<AppTheme>();
