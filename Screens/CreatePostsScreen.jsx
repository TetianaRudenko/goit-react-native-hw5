import React, { useState } from 'react';
import { StyleSheet, Text, View, Image , TextInput, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EvilIcons, Entypo } from '@expo/vector-icons';
import BtnPublishPost from '../Components/BtnPublishPost';
import BtnDeletePost from '../Components/BtnDeletePost';


const CreatePostsScreen = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  //const [photo, setPhoto] = useState(null);
  const navigation = useNavigation();

  return (
    <View style={{flex:1, justifyContent:"space-between", backgroundColor: '#fff',}} >
      
      <View style={styled.container}>
        <View style={styled.photoWrap}> 
          <Image style={styled.postPhoto} />
          <Pressable style={styled.cameraIcon} > 
            <Entypo
              name="camera"
              size={24}
              color="#BDBDBD"
              alignSelf="center"
              />
          </Pressable>
          <Text
            style={{color: "#BDBDBD", fontSize: 16,}}>
            Завантажте фото
          </Text>
        </View>

      <TextInput
        placeholder="Назва..."
        onChangeText={(newName) => setName(newName)}
        value={name}
        style={[styled.postInput]}
      />

      <View style={[styled.location, { alignItems: "center" }]}>
        <EvilIcons name="location" size={24} color="#BDBDBD" />
        <TextInput
          placeholder="Місцевість"
          onChangeText={(newLocation) => setLocation(newLocation)}
          value={location}
          style={[styled.postLocation]}
        />
      </View>
        
      <BtnPublishPost onPress={() => navigation.navigate("Posts")}/>
      </View>

      <View style={styled.delete}>
        <BtnDeletePost onPress={()=> navigation.navigate("Posts")}/>
      </View>
      
    </View>
 );
};
const styled = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent:"space-between",
    paddingTop:32,
    paddingHorizontal:16,
    backgroundColor: '#fff',
    borderTopColor: 'rgba(0, 0, 0, 0.3)',
    borderTopWidth: 1,
    //borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    ///borderBottomWidth: 1,
  },
  photoWrap: {
    marginBottom:32, 
  },
  postPhoto: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    marginBottom:8,
  },
  cameraIcon: {
    position: "absolute",
    top: 90,
    alignSelf: "center",
    justifyContent:"center",
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor:"#ffffff",
  },
  postInput: {
    marginBottom: 16,
    height: 50,
    paddingTop: 16,
    paddingBottom:16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    color: "#BDBDBD",
    
    fontSize: 16,
    lineHeight: 19,
    
  },
  postLocation: {
    height: 50,
    color: "#BDBDBD",

    fontSize: 16,
    lineHeight: 19,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    marginBottom: 32,
  },
  delete: {
    justifyContent:"center",
    width: 70,
    height: 40,
    backgroundColor:"#F6F6F6",
    alignItems: 'center',
    marginBottom: 22,
    borderRadius: 20,
    alignSelf:"center",
  }
});

export default CreatePostsScreen;