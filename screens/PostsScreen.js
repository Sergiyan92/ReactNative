import { useRoute } from "@react-navigation/native";
import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";
import LogoImage from "../assets/avatar.jpg";
const PostsScreen = () => {
  const {
    params: { login, email },
  } = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.credentials}>
        <Image source={LogoImage} style={styles.logo} />
        <View style={styles.info}>
          <Text style={styles.loginText}> {login}</Text>
          <Text style={styles.emailText}> {email}</Text>
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
});
export default PostsScreen;
