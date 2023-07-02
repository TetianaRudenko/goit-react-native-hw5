import { StyleSheet, View, Image } from 'react-native';
import forest from "../assets/img/forest.jpg";
import { Text } from 'react-native';


const CommentsScreen = () => {
  return (
    <View style={styled.container}>
      <Image style={styled.postPhoto} source={forest} />

      <View style={styled.commentWrap}>

      <Image style={styled.guestPhoto}></Image>
      <Text>
Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!
      </Text>
      </View>
    </View>
  );
};


const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopColor: 'rgba(0, 0, 0, 0.3)',
    borderTopWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  postPhoto: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    marginTop: 32,
    marginBottom:32,
    alignItems: 'center',
  },
  commentWrap: {
    flex: 1,
    flexDirection:"row",
    //paddingHorizontal:16,
  },
  guestPhoto: {
    width: 28,
    height: 28,
    backgroundColor: "red",
    marginRight: 16,
    borderRadius:50,
  }
});


export default CommentsScreen;