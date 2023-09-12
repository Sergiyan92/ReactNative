import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  Button,
} from "react-native";

import LogoImage from "../assets/avatar.jpg";
import BackGround from "../assets/photo_bg.jpg";

const RegistrationScreen = () => {
  return (
    <ImageBackground source={BackGround} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={LogoImage} />
        <Text style={styles.title}>Реєстрація</Text>
        <TextInput style={styles.input} placeholder="Логін" />
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => {}}>
            Зареєструватися
          </Text>
        </TouchableOpacity>
        <Button title="Вже є акаунт? Увійти" onPress={() => {}} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#212121",
    fontSize: 30,
    fontWeight: 500,
    marginBottom: 33,
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
  backgroundImage: {
    flex: 1, // Розмір ImageBackground повинен бути флексовим, щоб він розтягнувся на весь екран.
    resizeMode: "contain", // Задайте режим масштабування фонового зображення, наприклад, 'cover' або 'contain'.
  },
});

export default RegistrationScreen;
