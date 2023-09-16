import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PostsIcon from "../assets/icons/grid.png";
import CreateIcon from "../assets/icons/new.png";
import InfoIcon from "../assets/icons/user.png";
const Tab = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate("Login");
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: 9,
        },
      }}
    >
      <Tab.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          tabBarLabel: "",
          headerRight: () => (
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
              <Ionicons name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarIcon: () => (
            <Image source={PostsIcon} style={{ width: 24, height: 24 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <Image source={CreateIcon} style={{ width: 70, height: 40 }} />
          ),
        }}
      />
      <Tab.Screen
        name="Профіль"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <Image source={InfoIcon} style={{ width: 40, height: 40 }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "white",
  },
  button: {
    marginRight: 10,
  },
});
export default Home;
