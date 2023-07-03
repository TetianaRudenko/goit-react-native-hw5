import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground , TextInput} from 'react-native';

import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import * as Location from "expo-location";

import { EvilIcons, Entypo } from '@expo/vector-icons';
import BtnPublishPost from '../Components/BtnPublishPost';
import BtnDeletePost from '../Components/BtnDeletePost';
import bgImgPlaceholder from "../assets/img/bgImgPlaceholder.png";


const CreatePostsScreen = ({ navigation, }) => {
  const [nameFocus, setNameFocus] = useState(false);
  const [locusFocus, setLocusFocus] = useState(false);

  const [name, setName] = useState('');
  const [locus, setLocus] = useState(null);
  const [photo, setPhoto] = useState(null);

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted")
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  const handlePublishPostBtn = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setPhoto(null);
    setName('');
    setLocus(null);
     
    navigation.navigate("Posts", {photo, name, locus, coords })
  }

  const takePicture = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
    }
  }


  return (
    <View style={styled.container} >
 
        <View style={styled.photoWrap}> 
        {hasPermission ? (
          !photo ? (
              <View style={styled.photoViewer}> 
                <Camera
                  style={styled.photoViewer}
                  type={type}
                  ref={setCameraRef} >
                  <View style={styled.cameraIcon}> 
                    <Entypo
                      name="camera"
                      size={24}
                      color="#BDBDBD"
                      alignSelf="center"
                      onPress={takePicture}
                      />
                  </View>
                </Camera>  
              </View>
            ) : (
              <ImageBackground
                style={styled.photoViewer}
                source={{ uri: photo }}>
                <View style={styled.cameraIcon}> 
                  <Entypo
                    name="camera"
                    size={24}
                    color="#BDBDBD"
                    alignSelf="center"
                    onPress={() => {
                      setPhoto(null);
                      }
                    }
                  />
                </View>       
              </ImageBackground>
          )
        ) : (
            <ImageBackground
                source={bgImgPlaceholder}
                style={styled.photoViewer}
              >
                <Text>No access to camera</Text>
              </ImageBackground>
        )}
          {!photo ? (
             <Text
              style={{color: "#BDBDBD", fontSize: 16,}}>
              Завантажте фото
            </Text>
          ) : (
            <Text
              style={{color: "#BDBDBD", fontSize: 16,}}>
              Редагувати фото
            </Text>
          )}
        </View>

      <TextInput
        placeholder="Назва..."
        onChangeText={(newName) => setName(newName)}
        value={name}
        style={nameFocus ? [styled.postInput, { color: "#212121" }] : [styled.postInput]}
        onFocus={() => setNameFocus(true)}
        onBlur={()=> setNameFocus(false)}
      />

        <View style={[styled.location, { alignItems: "center" }]}>
          <EvilIcons name="location" size={24} color="#BDBDBD" />
          <TextInput
            placeholder="Місцевість"
            onChangeText={(newLocation) => setLocus(newLocation)}
            value={locus}
            style={locusFocus ? [styled.postLocation, { color: "#212121" }] : [styled.postLocation]}
            onFocus={() => setLocusFocus(true)}
            onBlur={()=> setLocusFocus(false)}
          />
        </View>
        
      <BtnPublishPost
        style={photo && name && locus
          ? { backgroundColor: "#FF6C00", color: "#FFFFFF" }
          : { backgroundColor: "#F6F6F6", color: "#BDBDBD" }}
        onPress={() =>
          photo && name && locus &&   handlePublishPostBtn()
        }
      />
    
      <View style={styled.deleteBtnWrap}>
        <BtnDeletePost
          onPress={() => {
            setName(''),
            setLocus(null),
            setPhoto(null)
          }} />
      </View>

    </View>
 );
};
const styled = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:32,
    paddingHorizontal:16,
    backgroundColor: '#fff',
    borderTopColor: 'rgba(0, 0, 0, 0.3)',
    borderTopWidth: 1,
    paddingBottom:32,
  },
  photoWrap: {
    marginBottom: 32, 
    width: "100%",
    height: 267,
  },
  photoViewer: {
    width: "100%",
    height: 240,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    resizeMode: "cover",
    borderRadius: 8,
  },
  cameraIcon: {
    alignItems: "center",
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
  deleteBtnWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 22,
    
  },
});

export default CreatePostsScreen;