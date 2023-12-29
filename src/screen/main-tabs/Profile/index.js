import {View, Text, TouchableOpacity} from "react-native";

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Auth')} style={{padding: 16}} >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Profile
