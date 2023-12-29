import React from 'react'
import {StyleProp, Text, TouchableOpacity, TouchableOpacityProps, View, ViewStyle} from "react-native";
import {useAppTheme} from "../../../hook/theme/useAppTheme";
interface BottomButtonProps extends TouchableOpacityProps {
  title: string
  customStyle?: StyleProp<ViewStyle>
}

const BottomButton : React.FC<BottomButtonProps> = (props) => {
  const {colors} = useAppTheme()
  return (
    <TouchableOpacity style={[props.customStyle, {backgroundColor: colors.primary, marginHorizontal: 24, padding: 16, borderRadius: 18, alignItems: 'center', marginBottom: 20}]}>
      <Text style={{color: colors.onPrimary}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default BottomButton
