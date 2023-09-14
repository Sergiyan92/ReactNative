import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  Button,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackGround from "../assets/photo_bg.jpg";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const onLogin = () => {
    console.log("Credentials", `${password} + ${email}`);
    setEmail("");
    setPassword("");
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <ImageBackground source={BackGround} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Адреса електронної пошти"
          />
          <View style={styles.password}>
            <TextInput
              style={styles.input_password}
              placeholder="Пароль"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={togglePasswordVisibility}
            >
              <Text style={styles.toggleButtonText}>
                {showPassword ? "Приховати" : "Показати"}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={onLogin}>
              Увійти
            </Text>
          </TouchableOpacity>
          <Button title="Немає акаунту? Зареєструватися" onPress={() => {}} />
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 263,
    alignItems: "center",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "white",
  },
  title: {
    color: "#212121",
    fontSize: 30,
    fontWeight: 500,
    marginBottom: 33,
    marginTop: 33,
  },
  input: {
    width: 343,
    height: 50,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: 343,
    height: 51,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 12,
  },
  buttonText: {
    color: "white",
  },

  toggleButtonText: {
    color: "blue",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
  },
  password: {
    width: 343,
    height: 50,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input_password: { flex: 1, height: 40 },
  toggleButtonText: { color: "blue" },
});

export default LoginScreen;
