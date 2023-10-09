import {
  StyleSheet,
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const InputList = ({ tasks, setTasks }) => {
  const [taskText, setTaskText] = useState(""); // State to hold the input value

  const handleAddTask = async () => {
    if (taskText.trim() === "") {
      Alert.alert("Error", "Can't add an empty task");
      return;
    }

    try {
      const response = await axios.post(
        "http://172.20.10.3:3000/api/v1/tasks",
        { name: taskText }
      );

      // Update the tasks state with the new task
      setTasks([...tasks, response.data.task]);
      console.log(response.data);

      // Clear the input field
      setTaskText("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  //For keyboard dismiss
  const handleReturnPress = () => {
    // Dismiss the keyboard when the return key is pressed
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add task..."
        style={styles.inputStyle}
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
        onSubmitEditing={handleReturnPress} // Dismiss keyboard when return key is pressed
        returnKeyType="done"
      />
      <TouchableOpacity style={styles.addStyle} onPress={handleAddTask}>
        <Ionicons name="ios-add-outline" size={30} color="purple" />
      </TouchableOpacity>
    </View>
  );
};

export default InputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    width: 300,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: "black",
  },
  addStyle: {
    backgroundColor: "#fff",
    paddingVertical: 12.4,
  },
});
