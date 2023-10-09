import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import HomeScreen from "./screens/HomeScreen";
import IntroScreen from "./screens/IntroScreen";

const App = () => {
  return (
    <Swiper showsButtons={false} loop={false}>
      <IntroScreen />
      <HomeScreen />
    </Swiper>
  );
};

export default App;

const styles = StyleSheet.create({});
