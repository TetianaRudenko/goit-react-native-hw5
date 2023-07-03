import { Pressable, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const BtnDeletePost = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={styled.delete}>
      <Feather
        name="trash-2"
        size={24}
        color="#BDBDBD" />
    </Pressable>
  );
};

const styled = StyleSheet.create({
  delete: {
    width: 70,
    height: 40,
    justifyContent:"center",
    alignItems: 'center',
    alignSelf:"center",
    backgroundColor:"#F6F6F6",
    
    borderRadius: 20,
  }
});

export default BtnDeletePost;