
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';

const MainStack = createStackNavigator();

const App = () => {
  useFonts({
    "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    "Roboto-Medium": require('./assets/fonts/Roboto-Medium.ttf'),
    "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
  });

  return (
    <NavigationContainer> 
      <MainStack.Navigator
        initialRouteName="Home"> 

        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />

        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false}} 
        />
      </MainStack.Navigator>

      <StatusBar style="auto"/>
    </NavigationContainer>
  );
};

export default App;
