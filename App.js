
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import CommentsScreen from "./Screens/CommentsScreen";
import MapScreen from './Screens/MapScreen';
import BtnArrowLeft from './Components/BtnArrowLeft';

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

        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={({navigation})=> ({
            title: "Мапа",
            headerTitleAlign:"center",
            headerLeft: () => <BtnArrowLeft onPress={() => navigation.navigate("Posts")} />,
            headerLeftContainerStyle: {
              flex: 1,
              paddingLeft:16,
            }, 
            })}
        />

        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={({navigation})=> ({
            title: "Коментарі",
            headerTitleAlign:"center",
            headerLeft: () => <BtnArrowLeft onPress={() => navigation.navigate("Posts")} />,
            headerLeftContainerStyle: {
              flex: 1,
              paddingLeft:16,
            }, 
            })}
        />
      </MainStack.Navigator>

      <StatusBar style="auto"/>
    </NavigationContainer>
  );
};

export default App;
