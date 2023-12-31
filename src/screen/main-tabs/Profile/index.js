import {View, Text, TouchableOpacity, Image} from "react-native";
import SafeScreen from "@/components/Layout/SafeScreen";
import {useAppTheme} from "@/hook/theme/useAppTheme";
import CustomText from "@/components/helper/Text";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faArrowRightFromBracket, faGear, faLandmark} from "@fortawesome/free-solid-svg-icons";
import {faCircle, faCreditCard, faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import useStyles from "./styles";
import {faPaypal} from "@fortawesome/free-brands-svg-icons";

const Profile = ({navigation}) => {
  const {colors} = useAppTheme();
  const styles = useStyles(colors)
  return (
    <SafeScreen>
      <View style={styles.container}>
        <View style={{margin: 24, gap: 8}}>
          <CustomText
            style={{fontWeight: '500'}}
            size={16}
          >
            Information
          </CustomText>
          <View style={{
            flexDirection: 'row',
            padding: 16,
            backgroundColor: colors.background,
            borderRadius: 16,
            gap: 12
          }}
          >
            <Image source={require("@/assets/image/avatar.png")}/>
            <View style={{flex: 1, gap: 8}}>
              <CustomText size={16} style={{fontWeight: '500'}}>Marvis Ighedosa</CustomText>
              <CustomText size={14} style={{color: colors.grey1}}>dosamarvis@gmail.com</CustomText>
              <CustomText size={14} style={{color: colors.grey1, alignSelf: 'baseline'}}>No 15 uti street off ovie
                palace road effurun delta state</CustomText>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
              <FontAwesomeIcon icon={faArrowRightFromBracket}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{margin: 24, gap: 8}}>
          <CustomText
            style={{fontWeight: '500'}}
            size={16}
          >
            Payment Method
          </CustomText>
          <View style={{
            padding: 16,
            backgroundColor: colors.background,
            borderRadius: 16,
          }}
          >
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <FontAwesomeIcon icon={faCircleCheck} size={16}/>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                borderBottomWidth: 1,
                borderBottomColor: colors.border,
                paddingVertical: 8,
                marginBottom: 8
              }}>
                <View style={{padding: 8, backgroundColor: colors.primary, borderRadius: 10}}>
                  <FontAwesomeIcon icon={faCreditCard} size={16} color={colors.white}/>
                </View>
                <CustomText size={16}>
                  Card
                </CustomText>
              </View>
            </View>

            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <FontAwesomeIcon icon={faCircle} size={16}/>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                borderBottomWidth: 1,
                borderBottomColor: colors.border,
                paddingVertical: 8,
                marginBottom: 8
              }}>
                <View style={{padding: 8, backgroundColor: colors.bank, borderRadius: 10}}>
                  <FontAwesomeIcon icon={faLandmark} size={16} color={colors.white}/>
                </View>
                <CustomText size={16}>
                  Bank account
                </CustomText>
              </View>
            </View>

            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <FontAwesomeIcon icon={faCircle} size={16}/>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                borderBottomWidth: 1,
                borderBottomColor: colors.border,
                paddingVertical: 8,
                marginBottom: 8
              }}>
                <View style={{padding: 8, backgroundColor: colors.blue, borderRadius: 10}}>
                  <FontAwesomeIcon icon={faPaypal} size={16} color={colors.white}/>
                </View>
                <CustomText size={16}>
                  Paypal
                </CustomText>
              </View>
            </View>
          </View>
        </View>
      </View>

    </SafeScreen>
  )
}
export default Profile
