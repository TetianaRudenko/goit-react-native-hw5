import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Feather, AntDesign, EvilIcons} from "@expo/vector-icons";


const  PostCard = ({ navigation, route}) => {
 
  return ( 
      <View style={styled.post}>
        <Image
          source={{ uri: photo }}
          style={styled.postPhoto} />
        <Text style={styled.postName}>
          {name}
        </Text>

        <View style={styled.postWrapper}>
          <Feather
            name="message-circle"
            size={24}
            color="#FF6C00"
            style={{ marginRight: 6 }}
            onPress={() => {
              navigation.navigate("Comments");
            }}
          />
          <Text style={[styled.text, { marginRight: 24 }]}>
            коментарі
          </Text>
          {
            <AntDesign
              name="like2"
              size={24}
              color="#FF6C00"
              style={{ marginRight: 6 }}
              onPress={() => {
                console.log("add like")
              }}
            />
          }
          <Text style={[styled.text, { marginRight: "auto" }]}>
          
            вподобайки
          </Text>
          <EvilIcons
            name="location"
            size={24}
            color="#BDBDBD"
            style={{ marginRight: 4 }}
            onPress={() => {
              navigation.navigate("Map", { location });
            }}
          />
          <Text
            style={[
              styled.text,
              { textDecorationLine: "underline", textDecorationStyle: "solid" },
            ]}
          >
            {locus}
          </Text>
        </View>
      </View>
    
    
  );
}

const styled = StyleSheet.create({
  post: {
    //width: "100%",
    //height: 299,
    marginBottom: 32,
    //color: "#212121",
    //backgroundColor: "#ffffff",
  },
  postPhoto: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
    resizeMode: "cover",
    backgroundColor: "#F6F6F6",
  },
  postName: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 400, 
   
  },
  postWrapper: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  text: {
    fontSize: 16,
    fontWeight: 400, 
  },
});

export default PostCard;