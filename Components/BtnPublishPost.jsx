import { Text, StyleSheet, Pressable } from 'react-native';

const BtnPublishPost = ({ onPress }) => {
  return (
    <Pressable
      style={styled.button}
      onPress={onPress}>
      <Text style={styled.text}>Опублікувати</Text>
    </Pressable>
  )
};

const styled = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 100,
    //backgroundColor: '#FF6C00',
    backgroundColor: "#F6F6F6",
    color: "#BDBDBD",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BtnPublishPost;
