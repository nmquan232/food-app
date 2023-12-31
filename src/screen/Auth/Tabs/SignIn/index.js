import {View, Text, TouchableOpacity} from "react-native";
import {useState} from "react";
import AppInput from "@/components/common/AppInput";
import BottomButton from "@/components/common/BottomButton";
import {useAppTheme} from "@/hook/theme/useAppTheme";

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {colors} = useAppTheme();
  return (
    <View style={{flex: 1, marginTop: 48}}>
      <View style={{flex: 1, gap: 16}}>
        <AppInput
          value={email}
          label='Email'
          placeholder={'Enter your email...'}
          customStyles={{marginHorizontal: 24}}
          onChangeText={setEmail} />
        <AppInput
          secureTextEntry={true}
          value={password} label='Password'
          placeholder={'Enter your password...'}
          customStyles={{marginHorizontal: 24}}
          onChangeText={setPassword} />
      </View>
      <BottomButton
        title='Login'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}
export default SignIn
