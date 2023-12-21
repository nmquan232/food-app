import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screen/main-tabs/Home";
import CustomTabBar from "../components/Layout/CustomTabBar";
import Favourite from "../screen/main-tabs/Favourite";
import Profile from "../screen/main-tabs/Profile";

const Tabs = createBottomTabNavigator()
const BottomTabNavigation = () => {
  return (
    <Tabs.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
      headerShown: false,
    }}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Favourite" component={Favourite} />
      <Tabs.Screen name="User" component={Profile} />
    </Tabs.Navigator>
  )
}

export default BottomTabNavigation
