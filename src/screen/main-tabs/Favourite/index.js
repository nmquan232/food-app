import SafeScreen from "@/components/Layout/SafeScreen";
import AppHeader from "@/components/common/AppHeader";
import {useAppTheme} from "@/hook/theme/useAppTheme";
import EmptyScreen from "@/components/common/EmptyScreen";

const Favourite = () => {
  const {colors} = useAppTheme()
  return (
    <SafeScreen>
      <AppHeader title={'History'} />
      <EmptyScreen />
    </SafeScreen>
  )
}
export default Favourite
