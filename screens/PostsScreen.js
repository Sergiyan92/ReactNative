import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import LogoImage from "../assets/avatar.jpg";
import ComentIcon from "../assets/icons/coment.png";
import MapIcon from "../assets/icons/map.png";
const PostsScreen = () => {
  const navigation = useNavigation();
  const {
    params: { login, email, newPost },
  } = useRoute();

  const image = newPost.photo;

  const LocationNav = () => {
    navigation.navigate("Карта");
  };
  const ComentNav = () => {
    navigation.navigate("Коментарі");
  };
  return (
    <View style={styles.container}>
      <View style={styles.credentials}>
        <Image source={LogoImage} style={styles.logo} />
        <View style={styles.info}>
          <Text style={styles.loginText}> {login}</Text>
          <Text style={styles.emailText}> {email}</Text>
        </View>
      </View>
      <Text style={styles.capturedPhoto}>
        <Image source={{ uri: image }} style={styles.image} />
      </Text>
      <Text style={styles.text}>{newPost.title}</Text>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button_coment} onPress={ComentNav}>
          <Image source={ComentIcon} style={styles.coment} />
        </TouchableOpacity>
        <View style={styles.location}>
          <TouchableOpacity onPress={LocationNav}>
            <Image source={MapIcon} />
          </TouchableOpacity>
          <Text>{newPost.locality}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  credentials: {
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 16,
    alignItems: "center",
  },
  info: { marginLeft: 8 },
  logo: {
    height: 60,
    width: 60,
    borderRadius: 16,
  },
  loginText: {
    color: "#212121",
    fontSize: 13,
    fontWeight: "700",
  },
  emailText: {
    color: "#212121CC",
    fontSize: 11,
    fontWeight: "400",
  },
  capturedPhoto: {
    width: 343,
    height: 240,
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
  },
  image: { width: 373, height: 240, borderRadius: 8 },
  text: { marginLeft: 16, fontSize: 16, fontWeight: 500 },
  coment: { width: 24, height: 24, marginLeft: 16, marginRight: 50 },
  footer: { marginTop: 8, flexDirection: "row" },
  location: { alignItems: "center", flexDirection: "row" },
});
export default PostsScreen;
