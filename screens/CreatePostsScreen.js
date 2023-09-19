import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import FotoIcon from "../assets/icons/foto.png";

const CreatePostsScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);
  const [title, setTitle] = useState("");
  const [locality, setLocality] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      await getLocation();
      setCapturedPhoto(uri);
      setIsEditingPhoto(true);
    }
  };

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === "granted") {
        const location = await Location.getCurrentPositionAsync({});
        const locality = `${location.coords.latitude} ${location.coords.longitude}`;
        setLocality(locality);
      }
    } catch (error) {
      console.error("Error getting location", error);
    }
  };

  const handlePublish = async () => {
    if (!title || !locality || !capturedPhoto) {
      console.error(
        "Заповніть поля 'Назва' та 'Місцевість' та зробіть фотографію перед публікацією."
      );
      return;
    }
    const newPost = {
      title,
      photo: capturedPhoto,
      locality,
    };
    setTitle("");
    setLocality("");
    navigation.navigate("Публікації", {
      login: "test",
      email: "test",
      newPost: {
        title,
        photo: capturedPhoto,
        locality,
      },
    });
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <Camera
          style={styles.camera}
          ref={setCameraRef}
          type={isEditingPhoto ? Camera.Constants.Type.back : type}
        >
          {isEditingPhoto ? (
            <Image
              source={{ uri: capturedPhoto }}
              style={styles.capturedPhoto}
            />
          ) : (
            <View style={styles.photoView}>
              <TouchableOpacity
                style={styles.button_foto}
                onPress={takePicture}
              >
                <Image source={FotoIcon} style={styles.foto} />
              </TouchableOpacity>
            </View>
          )}
        </Camera>
        <TouchableOpacity
          style={styles.text}
          onPress={() => setIsEditingPhoto(!isEditingPhoto)}
        >
          <Text style={styles.buttonText}>
            {!isEditingPhoto ? (
              <Text style={styles.text}>Завантажте фото</Text>
            ) : (
              <Text style={styles.text}>Редагувати фото</Text>
            )}
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Назва"
        />
        <TextInput
          style={styles.input}
          value={locality}
          onChangeText={setLocality}
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
  capturedPhoto: {
    width: 343,
    height: 240,
  },
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "white",
  },
  camera: {
    width: 343,
    height: 240,
    marginTop: 16,
  },
  photoView: {
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },
  button_foto: {
    width: 60,
    height: 60,
    marginTop: 90,
    marginLeft: 143,
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
  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
  input: {
    width: 343,
    fontSize: 16,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: "#E8E8E8",
    padding: 8,
    marginTop: 8,
  },
  buttonText: {
    color: "blue",
  },
  text: {
    textAlign: "left",
    marginTop: 8,
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "400",
  },
});

export default CreatePostsScreen;
