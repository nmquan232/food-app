import SafeScreen from "@/components/Layout/SafeScreen";
import AppHeader from "@/components/common/AppHeader";
import {Image, View, Text} from "react-native";
import React from "react";
import {useAppTheme} from "@/hook/theme/useAppTheme";
import BottomButton from "@/components/common/BottomButton";

const ProductDetails = () => {
  const {colors} = useAppTheme()
  return (
    <SafeScreen>
      <AppHeader rightIcon/>
      <View style={{flex: 1, marginHorizontal: 20}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={{uri: 'https://hips.hearstapps.com/hmg-prod/images/burger-king-cheeseburger-1666891208.jpg'}}
            resizeMode={"contain"}
            width={150}
            height={150}
            style={{
              marginBottom: 20,
            }}
          />
        </View>
        <View style={{alignItems: 'center', gap: 12}}>
          <Text style={{fontSize: 24, fontWeight: '500'}}>
            Veggie tomato mix
          </Text>
          <Text style={{fontSize: 20, color: colors.primary}}>
            1.000
          </Text>
        </View>

        <View style={{gap: 8, marginTop: 24}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Delivery info</Text>
          <Text style={{fontSize: 14, color: colors.grey1}}>Delivered between monday aug and thursday 20 from 8pm to
            91:32 pm</Text>
        </View>

        <View style={{gap: 8, marginTop: 24}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Return policy</Text>
          <Text style={{fontSize: 14, color: colors.grey1}}>All our foods are double checked before leaving our stores
            so by any case you found a broken food please contact our hotline immediately.</Text>
        </View>
      </View>
      <BottomButton title={"Add to cart"} />
    </SafeScreen>
  )
}

export default ProductDetails
