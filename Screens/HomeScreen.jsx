import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, } from '@expo/vector-icons';

import BtnLogOut from "../Components/BtnLogOut";
import BtnArrowLeft from "../Components/BtnArrowLeft";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";



const HomeScreen = ({navigation}) => {
  const Tabs = createBottomTabNavigator();
  
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === "Posts") {
            iconName = focused
              ? "grid"
              : "grid";
         
          } else if (route.name === "CreatePosts") {
            iconName = focused ? "plus" : "plus";
          }
          else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          }
            
          let icon = <Feather name={iconName} size={size} color={color} />;      
          return icon;
        },
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#212121CC",
        tabBarInactiveBackgroundColor: '#FFFFFF',
        tabBarItemStyle: {
          height: 40,
          width: 70,
          borderRadius: 20,
        },
        
      })}
    >
      
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації", 
          headerTintColor: "#212121",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight:"400",
          },
          headerRight: () => <BtnLogOut onPress={() => navigation.navigate("Login")} />,
          headerRightContainerStyle: {
            paddingRight: 10,  
          },
          tabBarShowLabel: false, 
          tabBarStyle: {
            alignContent: "space-around",
            paddingTop: 17,
            paddingHorizontal: 80,
            paddingBottom: 22,
            height: 83,
          },
        }}
      />

      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію", 
          tabBarStyle: { display: 'none' },
          headerLeft: () => <BtnArrowLeft onPress={() => navigation.navigate("Posts")} />,
          headerLeftContainerStyle: {
            flex: 1,
            paddingLeft:16,
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Профіль", 
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            alignContent: "space-around",
            paddingTop: 17,
            paddingHorizontal: 80,
            paddingBottom: 22,
            height: 83,
          },
        }}
      />

      </Tabs.Navigator>   
  );
};

export default HomeScreen;