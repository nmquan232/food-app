import {View, TextInput, FlatList, Text, Image} from "react-native";
import {useAppTheme} from "@/hook/theme/useAppTheme";
import SafeScreen from "@/components/Layout/SafeScreen";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBarsStaggered, faSearch, faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import CustomText from "@/components/helper/Text";
import SearchInput from "@/components/common/SearchInput";
import {Categories} from "@/screen/main-tabs/Home/Categories/categories";
import CartItem from "@/components/common/CartItem";

const Home = ({navigation}) => {
  const {colors} = useAppTheme()
  const [categories, getCategories] = useState(Categories)
  const renderCateItem = ({item}) => (
    <View
      style={{
        borderBottomColor: item.isFocused ? colors.primary : colors.onBackground,
        borderBottomWidth: 1,
        padding: 8,
        paddingHorizontal: 16
      }}>
      <CustomText style={{color: item.isFocused ? colors.primary : colors.grey1}} size={17}>{item.title}</CustomText>
    </View>
  )

  const renderItem = ({item}) => {
    return (
      <CartItem item={item} onPress={() => navigation.navigate('ProductDetails')} />
    )
  }
  return (
    <SafeScreen>
      <View style={{backgroundColor: colors.onBackground, flex: 1, paddingTop: 24}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 24}}>
          <FontAwesomeIcon icon={faBarsStaggered} size={20}/>
          <FontAwesomeIcon icon={faShoppingBag} size={20}/>
        </View>
        <View style={{marginVertical: 24, marginHorizontal: 24}}>
          <CustomText style={{fontSize: 34, fontWeight: 'bold'}}>
            Delicious food for you
          </CustomText>
        </View>
        <SearchInput style={{marginHorizontal: 24}}/>
        <View>
          <FlatList
            contentContainerStyle={{marginTop: 24, marginHorizontal: 24}}
            horizontal={true}
            data={categories}
            renderItem={renderCateItem}
          />
        </View>
        <View>
          <FlatList
            horizontal
            data={categories}
            renderItem={renderItem}
            contentContainerStyle={{marginVertical: 24}}
          />

        </View>
      </View>
    </SafeScreen>
  )
}
export default Home
