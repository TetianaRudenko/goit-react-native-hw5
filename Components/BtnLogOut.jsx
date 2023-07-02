import { Pressable } from "react-native";
import { Feather } from '@expo/vector-icons';

const BtnLogOut = ({ onPress, ...props }) => {
  return (
    <Pressable onPress={onPress} {...props }>
      <Feather
        name="log-out"
        size={24}
        color="#BDBDBD" />
    </Pressable>
    
  );
};

export default BtnLogOut;