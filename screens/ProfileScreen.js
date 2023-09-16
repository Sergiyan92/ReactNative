import React from "react";
import { useRoute } from "@react-navigation/native";
import { View, Image, StyleSheet, Text, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import LogoImage from "../assets/avatar.jpg";
import BackGround from "../assets/photo_bg.jpg";
const ProfileScreen = () => {
  const {
    params: { login },
  } = useRoute();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <ImageBackground source={BackGround} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Image source={LogoImage} style={styles.logo} />
          <Text style={styles.login}>{login}</Text>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 600,
    marginTop: 147,
    paddingBottom: 87,
    // justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "white",
  },
  logo: {
    marginTop: -60,
    borderRadius: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
  },
  login: {
    marginTop: 32,
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
  },
});
export default ProfileScreen;
