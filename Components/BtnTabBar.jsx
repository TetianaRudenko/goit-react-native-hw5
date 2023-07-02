import { StyleSheet, Pressable } from 'react-native';

const BtnTabBar = ({ icon, onPress }) => {
  return (
    <Pressable 
      style={({ pressed }) => [!pressed ? styled.button : [styled.button, styled.pressed]]}
      onPress={onPress}>
      {icon}       
    </Pressable>
  );
}

const styled = StyleSheet.create({
  button: {
    height: 40,
    width:70,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    color: "#212121CC",
    alignItems: 'center',
    justifyContent: 'center',   
  },  
  pressed: {
    backgroundColor: "#BDBDBD",
    color:"#fff",
  }
});
export default BtnTabBar;