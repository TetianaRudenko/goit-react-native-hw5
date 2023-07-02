import { Image, StyleSheet, View } from "react-native";
import AddAvatarButton from "./AddAvatarButton";
import { useState } from "react";
import avatar from "../../assets/img/avatar.jpg"
import { AntDesign } from '@expo/vector-icons'; 


const Avatar = () => {
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);
  
  const handleAddAvatar = () => {
    console.log("додай аватар");
    setIsAvatarLoaded(!isAvatarLoaded);
  };

  return (
    <View style={styled.wrap}>
      { !isAvatarLoaded ? (
        <View style={styled.avatar}>
          <AddAvatarButton
            style={styled.iconBtn}
            onPress={handleAddAvatar}
          />
        </View>
      ) : (
          <View>
            <Image source={avatar}  style={styled.avatar}/>
            <AntDesign
              name="pluscircleo"
              size={25}
              color="#BDBDBD"
              style={styled.iconBtn}
              onPress={handleAddAvatar}
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