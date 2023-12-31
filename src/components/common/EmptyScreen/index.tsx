import {View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faClockRotateLeft} from "@fortawesome/free-solid-svg-icons";
import CustomText from "@/components/helper/Text";
import BottomButton from "@/components/common/BottomButton";
import {useAppTheme} from "@/hook/theme/useAppTheme";

const EmptyScreen = () => {
  const {colors} = useAppTheme()
  return (
    <View style={{flex: 1}}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16
      }}>
        <FontAwesomeIcon icon={faClockRotateLeft} size={68} color={colors.grey1}/>
        <CustomText size={20}>
          No history yet
        </CustomText>
        <CustomText size={14} numberOfLines={2} style={{width: 200, textAlign: 'center', color: colors.grey1}}>
          Hit the orange button down
          below to Create an order
        </CustomText>
      </View>
      <BottomButton title={'Start Ordering'} />
    </View>
  )
}
export default EmptyScreen
