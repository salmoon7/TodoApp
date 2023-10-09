import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Foundation } from "@expo/vector-icons";

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <Foundation name="calendar" size={50} color="white" />
      <Text style={styles.timeText}>{currentTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timeText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TimeDisplay;
