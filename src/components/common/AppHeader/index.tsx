import {Pressable, StyleProp, Text, View, ViewStyle} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useAppTheme} from "@/hook/theme/useAppTheme";
import {useNavigation} from "@react-navigation/native";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";

interface AppHeaderProps {
  title?: string;
  onPressRightIcon?: () => void;
  customStyle?: StyleProp<ViewStyle>
  rightIcon?: boolean
}

const AppHeader : React.FC<AppHeaderProps> = (props) => {
  const navigation = useNavigation()
  const {colors} = useAppTheme()
  return (
    <View style={[props.customStyle, {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 16
    }]}
    >
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={20} color='black'/>
      </Pressable>
      <View style={{
        flexGrow: 1,
        alignItems: 'center',
        marginRight: 16
      }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          {props.title}
        </Text>
      </View>
      {
        props.rightIcon && <Pressable onPress={props.onPressRightIcon}>
          <FontAwesomeIcon icon={faHeart} size={18} color="black"/>
        </Pressable>
      }

    </View>
  )
}

export default AppHeader
