import {TouchableOpacity, View, Text, Keyboard} from "react-native";
import {styles} from "./styles";
import {useEffect, useState} from 'react'
import {useAppTheme} from "@/hook/theme/useAppTheme";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHeart, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import * as RIcon from "@fortawesome/free-regular-svg-icons";
const CustomTabBar = ({state, descriptors, navigation}) => {

  const [visible, setVisible] = useState(true);
  const {colors} = useAppTheme()
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setVisible(false);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setVisible(true);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  if (!visible) {
    return <View/>;
  }
  return (
    <View
      style={[
        styles.contentBottomTab,
        {paddingBottom: 16}
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = async () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true,
            });
          }
        };

        const color = isFocused ? colors.red : colors.grey2;
        let icon = faHome;
        switch (route.name) {
          case 'Home':
            icon = faHome;
            break;
          case 'Favourite':
            icon = isFocused ? faHeart : RIcon.faHeart;
            break;
          case 'User':
            icon = isFocused ? faUser : RIcon.faUser;
            break;
        }
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.itemTab}>
            <View>
              <FontAwesomeIcon icon={icon} color={color} size={20}/>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar
