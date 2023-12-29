import {View, Text, SafeAreaView, Image, TouchableOpacity} from "react-native";
import {useAppTheme} from "../../hook/theme/useAppTheme";
import {width, height} from "../../constant/constants";
// import AuthTabs from "../../navagation/AuthTabs";
import SignIn from "./Tabs/SignIn";
import SignUp from "./Tabs/SignUp";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import TabBar from "./TabBar";

const Tab = createMaterialTopTabNavigator()
const Auth = () => {
  const {colors} = useAppTheme()
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: colors.background, alignItems: 'center'}}>
        <View>
          <Image source={require('../../../assets/logo.png')} resizeMode={'contain'}/>
          <Image
            source={require('../../../assets/Vector.png')}
            resizeMode={'contain'}
            style={{position: 'absolute', right: -15, bottom: 0}}/>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: colors.primary,
            width: width / 2 - 32,
            marginLeft: 16,
          },
          tabBarStyle: {
            backgroundColor: colors.background,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20
          },
          tabBarLabel: props => (
            <Text
              style={{
                fontWeight: props.focused ? "700" : "400",
                maxWidth: width / 2,
                minWidth: width / 3,
                textAlign: "center",
                color: colors.primary20,
              }}>
              {props.children}
            </Text>
          ),
        }}
      >
        <Tab.Screen name='Login' component={SignIn}/>
        <Tab.Screen name='SignUp' component={SignUp}/>
      </Tab.Navigator>

    </View>
  )
}

export default Auth
