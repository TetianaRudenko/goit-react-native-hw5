import { Text, StyleSheet, Pressable } from 'react-native';

const BtnSubmit = ({ title, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [!pressed ? styled.button : [styled.button, { backgroundColor: '#BDBDBD' }]]}
      onPress={onPress}>
      <Text style={styled.text}>{title}</Text>
    </Pressable>
  );
}

const styled = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 100,
    backgroundColor: 'rgb(255, 108, 0)',
    alignItems: 'center',
    justifyContent: 'center',   
  },  
  text: {
    fontSize: 16,
    lineHeight: 19,   
    color: 'white',
  },
});
export default BtnSubmit;