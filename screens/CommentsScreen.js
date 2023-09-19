import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import SendButton from "../assets/icons/Send.png";
import LogoIcon from "../assets/icons/Ellipse.png";

const CommentsScreen = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={styles.capturedPhotoContainer}>
          <Text style={styles.capturedPhoto}>
            {/* <Image source={{ uri: image }} style={styles.image} /> */}
          </Text>
        </View>
        <ScrollView style={styles.commentsContainer}>
          {comments.map((c, index) => (
            <View style={styles.card} key={index}>
              <Image source={LogoIcon} style={styles.cardIcon} />
              <Text style={styles.displayedComment}>{c}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Коментувати..."
              placeholderTextColor="#BDBDBD"
              value={comment}
              onChangeText={(text) => setComment(text)}
            />
          </View>
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleAddComment}
          >
            <Image source={SendButton} style={styles.sendIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  capturedPhotoContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 32,
  },
  capturedPhoto: {
    width: 343,
    height: 240,
    borderWidth: 1,
    borderRadius: 8,
  },
  commentsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  inputContainer: {
    width: 343,
    height: 50,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 100,
    marginBottom: 16,
    marginLeft: 32,
  },
  inputWrapper: {
    flex: 1,
    width: 343,
  },
  input: {
    flex: 1,
    borderWidth: 0,
    paddingHorizontal: 16,
  },
  displayedComment: {
    marginTop: 4,
    color: "#212121",
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 18,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 32,
    marginTop: 40,
  },
  cardIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});

export default CommentsScreen;
