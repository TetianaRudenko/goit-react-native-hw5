import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View,} from 'react-native';
import Avatar from "../Components/FormComponents/Avatar";
import BtnSubmit from "./BtnSubmit";
import { useNavigation } from '@react-navigation/native';

const RegistrationForm= () => {
  
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFocus, setLoginFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const handleFormSubmit = () => {
    { (!login || !email || !password ) && console.log("Заповніть поля форми") }
    { login && email && password && console.log("Credentials", `${login} ${email} ${password}`) }
    { login && email && password && navigation.navigate("Home") }
    setLogin('');
    setEmail('');
    setPassword('');
  };

  return ( 
    <View style={styled.container }>
      <Avatar />
      <Text style={styled.title}>Реєстрація</Text>
          
      <TextInput
        placeholder="Логін"
        style={loginFocus ? styled.inputOnFocus : styled.input}
        onFocus={() => setLoginFocus(true)}
        onBlur={() => setLoginFocus(false)}
        onChangeText={(newLogin) => setLogin(newLogin)}
        value={login}
        cursorColor="#FF6C00"
        autoCapitalize='words'
      />
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
          style={passwordFocus ? [styled.inputOnFocus, { marginBottom: 43,}] : [styled.input, {marginBottom: 43},]}
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
     
      <BtnSubmit title="Зареєстуватися" onPress={handleFormSubmit} />
       
        
      <Pressable style={styled.linkWrap} > 
        <Text style={styled.linkText}> Вже є акаунт? </Text>
        <Text
          style={[styled.linkText, { textDecorationLine: "underline" }]}
          onPress={() => navigation.navigate("Login")}
        >
          Увійти
        </Text>
      </Pressable>
      
    </View>   
  );
}

const styled = StyleSheet.create({
  container: {
    marginTop: "auto",
    height: '70%',
    
    paddingHorizontal: 16,
    paddingBottom: 66,
    
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 92,
    marginBottom: 32,

    textAlign: 'center',
    color: "#212121",
    fontWeight: 'bold',
    fontSize: 30,
    //fontFamily: "Roboto-Bold",
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
    backgroundColor: "#F6F6F6",
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
    //marginTop: 16,
    
    //textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});


export default RegistrationForm; 



