import {Text as RNText, TextProps, View, StyleSheet} from 'react-native'
import React from "react";
import {useAppTheme} from "@/hook/theme/useAppTheme";

interface Props extends TextProps {
  size?: number
}

const CustomText: React.FC<Props> = (props) => {
  const {colors} = useAppTheme()
  return (
    <RNText
      {...props}
      style={[
        {
          color: colors.text,
          fontSize: props.size
        },
        StyleSheet.flatten(props.style)
      ]}
    >
      {props.children}
    </RNText>
  )
}

export default CustomText
