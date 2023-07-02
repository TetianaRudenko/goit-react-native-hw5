import { Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const BtnArrowLeft = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <AntDesign
        name="arrowleft"
        size={24}
        color="black" />
    </Pressable>
    
  );
};
export default BtnArrowLeft;

