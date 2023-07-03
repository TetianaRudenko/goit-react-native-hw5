import { StyleSheet, Text, View, Image, ScrollView, Pressable} from 'react-native';
import { Feather, AntDesign,EvilIcons } from '@expo/vector-icons';

import avatar from "../assets/img/avatar.jpg";
//import forest from "../assets/img/forest.jpg"


const PostsScreen = ({ navigation, route}) => {
  const photo = route.params ? route.params.photo : null;
  const location = route.params ? route.params.coords : null;
  const name = route.params ? route.params.name : null;
  const locus = route.params ? route.params.locus : null;

  
  return (
    <View style={styled.container}>

      <View style={styled.user}>
        <Image style={styled.userPhoto} source={avatar}/>
        <View style={styled.userDescription}>
          <Text style={styled.userName}>Natali Romanova</Text>
          <Text style={styled.userEmail}>email@example.com</Text>
        </View>
      </View>
      
      <ScrollView>
     
        {route.params && <View style={styled.post}>
          <Image
            style={styled.postPhoto}
            source={{ uri: photo }} />
          <Text
            style={styled.postName}>
            {name}
          </Text>

          <View style={styled.postWrapper}>
            <Feather
              name="message-circle"
              size={24}
              color="#FF6C00"
              onPress={() => navigation.navigate("Comments")} />
            <Text
              style={styled.comment}>
              коментарі
            </Text>

            <AntDesign
              name="like2"
              size={24}
              color="#FF6C00" />
            <Text
              style={styled.like}>
              вподобайки
            </Text>

             
            <Pressable
              style={styled.location}> 
              <EvilIcons
                name="location"
                size={24}
                color="black"
                onPress={()=> navigation.navigate("Map", {location})}/>
              <Text
                style={[styled.linkText, { textDecorationLine: "underline" }]}>
                {locus}
              </Text>
              </Pressable>
    
            </View>
        </View>}

      </ScrollView>

    </View>
  );
};


const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal:16,
  },
  user: {
    marginTop: 32,
    marginBottom: 32,
    flexDirection: 'row',
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  userDescription: {
    marginLeft: 8,
    justifyContent: 'center',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 15,
    color: '#212121',
  },
  userEmail: {
    fontWeight: 'bold',
    fontSize: 11,
    lineHeight: 13,
    color: 'rgba(33, 33, 33, 0.8)',
  },
  footerBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center",
  },
  plusIcon: {
    backgroundColor: "rgba(255, 108, 0, 1)",
    width: 70,
    height: 40,
    borderRadius: 40,
    alignItems: "center",
    color: "#fff",
    
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

export default PostsScreen;