import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Color from "../Color";

import { SimpleLineIcons } from "@expo/vector-icons";
const IntroScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/todoIntroImage.jpg")}
      style={styles.image}
      resizeMode="contain"
    >
      <View style={styles.overlay}>
        <SimpleLineIcons name="note" size={50} color="white" />
        <Text style={styles.introText}>
          Get organized and boost productivity with our Task Manager App
        </Text>
      </View>
    </ImageBackground>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1, // Take up the entire screen
    width: "100%", // Ensure the width covers the entire screen width
    height: "100%", // Ensure the height covers the entire screen height
    justifyContent: "center", // Center content vertically
    alignItems: "center",
    backgroundColor: Color.lighterpurple,
    // Center content horizontally
  },
  introText: {
    color: Color.white,
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark overlay with transparency (adjust as needed)
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
