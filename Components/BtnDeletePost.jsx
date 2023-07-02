import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

const BtnDeletePost = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Feather
        name="trash-2"
        size={24}
        color="#BDBDBD" />
    </Pressable>
  );
};

export default BtnDeletePost;