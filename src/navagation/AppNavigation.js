import {createStackNavigator} from "@react-navigation/stack";
import BottomTabNavigation from "./BottomTabNavigation";

const Stack = createStackNavigator()
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='BottomTabNavigation' component={BottomTabNavigation} />
    </Stack.Navigator>
  )
}

export  default AppNavigation
