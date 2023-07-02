import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import  BtnSubmit from '../Components/BtnSubmit';

const LoginForm = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
 
  const navigation = useNavigation();

  const handleFormSubmit = () => {
    { (!email || !password) && console.log("Заповніть поля форми") }
    { email && password && console.log("Credentials", `${email} ${password}`); }
    { email && password && navigation.navigate("Home") }
    
    setEmail('');
    setPassword('');
  };


  return (
    <View style={styled.container}>
      <Text style={styled.title}>Увійти</Text>      
      <TextInput
        placeholder="Адреса електронної пошти"
        style={emailFocus ? styled.inputOnFocus : styled.input}
        onFocus={() => setEmailFocus(true)}
        onBlur={() => setEmailFocus(false)}
        onChangeText={(newEmail) => setEmail(newEmail)}
        value={email}
        cursorColor="#FF6C00"
        keyboardType='email-address'
      />

      <View> 
        <TextInput
          placeholder="Пароль"
          style={passwordFocus ? [styled.inputOnFocus, {marginBottom: 42,}] : [styled.input, {marginBottom: 42,}]}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
          onChangeText={(newPassword) => setPassword(newPassword)}
          value={password}
          secureTextEntry={!showPassword}
          cursorColor="#FF6C00"
          />
        <Pressable style={styled.showButton} onPress={() => setShowPassword(!showPassword)}>
          <Text style={styled.showText}>{password && showPassword ? "Приховати": "Показати" }</Text>
        </Pressable>
      </View>
         
      <BtnSubmit title="Увійти" onPress={handleFormSubmit} />
    
      <Pressable style={styled.linkWrap} > 
        <Text style={styled.linkText}> Немає акаунту? </Text>
        <Text
          style={[styled.linkText, { textDecorationLine: "underline" }]}
          onPress={() => navigation.navigate("Registration")}
        >
          Зареєструватися
        </Text>
      </Pressable>
    </View>     
  );
};

const styled = StyleSheet.create({
  container: {
    marginTop: "auto",
    height: '50%',
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 66,
    
    
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  title: {
    marginBottom: 32,
    
    textAlign: 'center',
    color: '#212121',
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 0.3,
  },
  input: {
    height: 50,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  inputOnFocus: {
    height: 50,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF6C00",
  },
  showButton: {
    position: "absolute",
    top: 12,
    right: 16,
  },
  showText: {
    color: "#1B4371",
    fontSize: 16,
   
  },
  linkWrap: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 16,
  },
  linkText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  
});

export default LoginForm;