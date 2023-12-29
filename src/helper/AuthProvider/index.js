import {useAppSelector} from "../../store/store";
import {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";


const AuthProvider = () => {
  const {isSignedIn} = useAppSelector(state => state.auth)
  const navigation = useNavigation()
  useEffect(() => {
    if (isSignedIn) {
      navigation.navigate('Home')
    } else {
      navigation.navigate('Auth')
    }
  }, [isSignedIn])
  return (
    <></>
  )
}

export default AuthProvider
