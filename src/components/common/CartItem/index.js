import {Image, TouchableOpacity, View} from "react-native";
import CustomText from "@/components/helper/Text";
import React from "react";
import {useAppTheme} from "@/hook/theme/useAppTheme";

const CartItem = (props) => {
  const {colors} = useAppTheme()
  return (
    <TouchableOpacity
      style={{
      flex: 1,
      backgroundColor: colors.background,
      marginHorizontal: 12,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      padding: 16,
      borderRadius: 16
    }}
      onPress={props.onPress}
    >
      <Image
        source={{uri: 'https://hips.hearstapps.com/hmg-prod/images/burger-king-cheeseburger-1666891208.jpg'}}
        resizeMode={"cover"}
        width={100}
        height={100}
        style={{borderRadius: 50}}
      />
      <CustomText style={{fontWeight: 'bold'}}>
        {props.item.title}
      </CustomText>
      <CustomText style={{color: colors.primary}}>
        1.000
      </CustomText>
    </TouchableOpacity>
  )
}

export default CartItem
