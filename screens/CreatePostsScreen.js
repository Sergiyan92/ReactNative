import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import FotoIcon from "../assets/icons/foto.png";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { useDispatch } from "react-redux";

const CreatePostsScreen = () => {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState(null);

  // const dispatch = useDispatch();
  const handlePublish = () => {
    const newPost = {
      title,
      photo,
    };
    setTitle("");
    setPhoto(null);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <Text style={styles.label}>
          <TouchableOpacity onPress={() => {}}>
            <Image source={FotoIcon} style={styles.foto} />
          </TouchableOpacity>
        </Text>
        {/* Додайте компонент для завантаження фото */}
        {/* Наприклад, можна використовувати react-native-image-picker */}
        {/* https://github.com/react-native-image-picker/react-native-image-picker */}
        <Text style={styles.text}>Завантажте фото</Text>

        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Назва..."
        />
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Місцевість"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handlePublish}>
            Опублікувати
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "white",
  },
  label: {
    width: 343,
    height: 240,
    backgroundColor: "#F6F6F6",
  },
  input: {
    width: 343,
    height: 50,
    fontSize: 16,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: "#E8E8E8",

    marginTop: 32,
  },
  button: {
    width: 343,
    height: 51,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 32,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    textAlign: "left",
    marginTop: 8,
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "400",
  },
  foto: {
    marginTop: 90,
    marginLeft: 142,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePostsScreen;
