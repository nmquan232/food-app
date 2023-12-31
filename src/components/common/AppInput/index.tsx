import React, {ReactNode} from "react";
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInputProps,
  TextInputSubmitEditingEventData,
  View,
  ViewStyle,
  Text
} from "react-native";
import {TextInput} from "react-native-paper";
import {useAppTheme} from "../../../hook/theme/useAppTheme";

interface AppInput extends TextInputProps {
  label?: string;
  required?: boolean;
  onPress?: () => void;
  customStyles?: StyleProp<ViewStyle>;
  labelIcon?: ReactNode;
  errorMessage?: string;
  onSubmit?: (
    text: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  customInputComponent?: ReactNode;
  height?: number;
}
const AppInput: React.FC<AppInput> = (props) => {
  const {colors} = useAppTheme()

  return (
    <View style={[props.customStyles]}>
      {/*// @ts-ignore*/}
      <TextInput
        editable={!props.onPress}
        mode={"outlined"}
        label={props.label}
        placeholderTextColor={colors.label}
        activeOutlineColor={colors.text}
        style={[
          {
            // borderColor: colors.border
          }
        ]}
        outlineColor={colors.background}
        {...props}
      />
    </View>
  )
}

export default AppInput
