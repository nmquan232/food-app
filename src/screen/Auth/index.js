import {View, Text, SafeAreaView} from "react-native";
import {useAppTheme} from "../../hook/theme/useAppTheme";
import {width, height} from "../../constant/constants";

const Auth = () => {
  const {colors} = useAppTheme()
  return (
    <SafeAreaView style={{ backgroundColor: colors.onBackground}}>
      <View style={{
        backgroundColor: colors.background,
        width: width,
        height: height * .35,
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24
      }} >
        <Text style={{color: colors.text}}>auth</Text>
        <Text style={{color: colors.text}}>auth</Text>
      </View>
    </SafeAreaView>
  )
}

export default Auth
