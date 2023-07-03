import { Image, StyleSheet, View , Button} from "react-native";
import AddAvatarButton from "./AddAvatarButton";
import { useState } from "react";
import avatar from "../../assets/img/avatar.jpg"
import { AntDesign } from '@expo/vector-icons'; 

import * as ImagePicker from 'expo-image-picker';

const Avatar = () => {
  const [loadedAvatar, setLoadedAvatar] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const pickAvatarAsync = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setSelectedAvatar(result.assets[0].uri);
      setLoadedAvatar(!loadedAvatar);
    }
  };

  return (
    <View style={styled.wrap}>
      { !loadedAvatar ? (
        <View style={styled.avatar}>
          <AddAvatarButton
            style={styled.iconBtn}
            onPress={pickAvatarAsync}
          />
        </View>
      ) : (
          <View>
            <Image source={{uri: selectedAvatar}}  style={styled.avatar}/>
            <AntDesign
              name="pluscircleo"
              size={25}
              color="#BDBDBD"
              style={styled.iconBtn}
              onPress={pickAvatarAsync}
            /> 
        </View>
      )}
    </View>
  );
};

const styled = StyleSheet.create({
  wrap: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    alignSelf: "center",  
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  avatar: {
    borderRadius: 16,
    resizeMode: "contain",
    width: 120,
    height: 120,
  },
  iconBtn: {
    position: "absolute",
    right: -12,
    bottom: 14,
    borderRadius: 50,
    backgroundColor:'#ffffff',
  },
});

export default Avatar;