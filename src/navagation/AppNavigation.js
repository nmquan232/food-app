import {createStackNavigator} from "@react-navigation/stack";
import BottomTabNavigation from "./BottomTabNavigation";
import Auth from "../screen/Auth";
import ProductDetails from "@/screen/common/ProductDetails";

const Stack = createStackNavigator()
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name='BottomTabNavigation'
        component={BottomTabNavigation} />
      <Stack.Screen name='Auth' component={Auth} />
      <Stack.Screen name='ProductDetails' component={ProductDetails} />
    </Stack.Navigator>
  )
}

export  default AppNavigation
