import {View, Text, TouchableOpacity} from "react-native";
import {useState} from "react";
import {useAppTheme} from "../../../../hook/theme/useAppTheme";
import AppInput from "../../../../components/common/AppInput";
import BottomButton from "../../../../components/common/BottomButton";

const SignUp = () => {
  const [text, setText] = useState('')
  const {colors} = useAppTheme();
  return (
    <View style={{flex: 1, marginTop: 48}}>
      <View style={{flex: 1, gap: 16}}>
        <AppInput value={text} label='Email' customStyles={{marginHorizontal: 24}} onChangeText={setText} />
        <AppInput value={text} label='Password' customStyles={{marginHorizontal: 24}} onChangeText={setText} />
      </View>
      <BottomButton title='Sign Up' />
    </View>
  )
}

export default SignUp
