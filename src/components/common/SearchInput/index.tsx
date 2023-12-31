import {TextInput, TextInputProps, View, StyleSheet} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {useAppTheme} from "@/hook/theme/useAppTheme";

interface SearchInputProps extends TextInputProps {

}

const SearchInput : React.FC<SearchInputProps> = (props) => {
  const {colors} = useAppTheme()
  return (
    <View
      style={[{flexDirection: 'row', alignItems: 'center', gap: 8, borderColor: colors.border2, borderWidth: 1, borderRadius: 30, paddingHorizontal: 16},
      StyleSheet.flatten(props.style)]}
    >
      <FontAwesomeIcon icon={faSearch} size={20} color={colors.text} />
      <TextInput
        {...props}
        style={{flex: 1, paddingVertical: 12}}
        placeholder={'Search'}
      />
    </View>
  )
}

export default SearchInput
