import {StyleSheet} from "react-native";

const useStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onBackground
  },
  infoCart: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: colors.background,
    borderRadius: 16,
    gap: 12
  }
})

export default useStyles
