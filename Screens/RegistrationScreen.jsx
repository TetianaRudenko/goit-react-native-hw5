import { StatusBar } from 'expo-status-bar';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import imageBg from "../assets/img/imageBg.png";
import RegistrationForm from "../Components/RegistrationForm";


const RegistrationScreen = () => {
  
  return ( 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styled.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ImageBackground
          source={imageBg}
          resizeMode="cover"
          style={styled.image}
        >

          <RegistrationForm />

          <StatusBar style="auto" />
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
       
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default RegistrationScreen; 



