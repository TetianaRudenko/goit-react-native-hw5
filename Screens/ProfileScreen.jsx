import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Avatar from '../Components/FormComponents/Avatar';
import BtnLogOut from '../Components/BtnLogOut';
import imageBg from '../assets/img/imageBg.png';
import forest from "../assets/img/forest.jpg"
import { Feather, AntDesign, EvilIcons } from '@expo/vector-icons';


const ProfileScreen = () => {  
  const navigation = useNavigation();
  
  return (
    <View style={styled.container}>
      <ImageBackground
        source={imageBg}
        resizeMode="cover"
        style={styled.image}>
        
        <View style={styled.profile}>
          <Avatar />
          <Text style={styled.name}>Natali Romanova</Text>
          <View > 
            <BtnLogOut
              style={styled.btnlogOutPosition}
              onPress={()=> navigation.navigate("Login")}
            /> 
          </View>

          <ScrollView> 
          
          <View style={styled.post}>
            <Image style={styled.postPhoto} source={forest}/>
            <Text style={styled.postName}>Ліс</Text>
            <View style={styled.postWrapper}>

              <Feather name="message-circle" size={24} color="#FF6C00" onPress={()=> navigation.navigate("Comments")}/>
              <Text style={styled.comment}>8</Text>

              <AntDesign name="like2" size={24} color="#FF6C00"/>
              <Text style={styled.like}>153</Text>

             
              <Pressable style={styled.location}> 
                <EvilIcons name="location" size={24} color="black" />
                <Text  style={[styled.linkText, { textDecorationLine: "underline" }]}>Місцевіcть</Text>
              </Pressable>
              
            </View>
          </View>
            
          <View style={styled.post}>
            <Image style={styled.postPhoto} source={forest}/>
            <Text style={styled.postName}>Ліс</Text>
            <View style={styled.postWrapper}>

              <Feather name="message-circle" size={24} color="#FF6C00" onPress={()=> navigation.navigate("Comments")}/>
              <Text style={styled.comment}>8</Text>

              <AntDesign name="like2" size={24} color="#FF6C00"/>
              <Text style={styled.like}>153</Text>

             
              <Pressable style={styled.location}> 
                <EvilIcons name="location" size={24} color="black" />
                <Text  style={[styled.linkText, { textDecorationLine: "underline" }]}>Місцевіcть</Text>
              </Pressable>
              
            </View>
          </View>
            
          <View style={styled.post}>
            <Image style={styled.postPhoto} source={forest}/>
            <Text style={styled.postName}>Ліс</Text>
            <View style={styled.postWrapper}>

              <Feather name="message-circle" size={24} color="#FF6C00"/>
              <Text style={styled.comment}>8</Text>

              <AntDesign name="like2" size={24} color="#FF6C00"/>
              <Text style={styled.like}>153</Text>

             
              <Pressable style={styled.location}> 
                <EvilIcons name="location" size={24} color="black" />
                <Text  style={[styled.linkText, { textDecorationLine: "underline" }]}>Місцевіcть</Text>
              </Pressable>
              
            </View>
          </View>

          </ScrollView>
        </View>
      <StatusBar style='auto'/>
      </ImageBackground>
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnlogOutPosition: {
    position: "absolute",
    top: -141,
    right: 16,
  },
  wrap: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    alignSelf: "center",  
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  image: {
    width: '100%',
    height: 812,
    flex: 1,
    justifyContent: 'center',
  },
  profile: {
    marginTop: "auto",
    height:"80%",

    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    minHeight: '80%',
    paddingLeft: 16,
    paddingRight: 16,
  },
  name: {
    marginTop: 92,
    marginBottom: 33,
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121',
  },
  post: {
    marginBottom: 32,
  },
  postName: {
    marginBottom: 8,
    marginTop: 8,
  },
  postWrapper: {
    flexDirection: 'row',
  },
  postPhoto: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
  },
  comment: {
    marginRight: 24,
  },
  location: {
    marginLeft: 'auto',
    flexDirection: 'row',
  },
});

export default ProfileScreen;
