import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return (
    <>
      {/* <View style={styles.container}>
        <Text>Anton Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
