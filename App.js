import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return (
    <>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
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
