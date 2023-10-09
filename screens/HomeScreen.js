import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Button, ImageBackground, Alert } from "react-native";
import Header from "../components/Header";
import ItemList from "../components/ItemList";
import InputList from "../components/InputList";
import DeleteTasks from "../components/DeleteTasks";
import TimeDisplay from "../components/DisplayTime";
import axios from "axios";

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]); // Define tasks here
  const [index, setIndex] = useState([]);
  useEffect(() => {
    // Fetch todos from the backend when the component mounts
    axios
      .get("http://172.20.10.3:3000/api/v1/tasks")
      .then((response) => {
        setTasks(response.data.tasks);

        const taskIds = response.data.tasks.map((task) => task._id);
        setIndex(taskIds);
      })
      .catch((error) => console.error(error));
  }, []);

  //deletong the task
  const [showCircleConfirmation, setShowCircleConfirmation] = useState(false);

  const handleDeleteAllTasks = () => {
    // Show the circle confirmation dialog
    setShowCircleConfirmation(true);
  };

  const handleConfirmDeleteAllTasks = async () => {
    // Perform the actual deletion of all tasks here
    try {
      // Make a DELETE request to the backend to delete all tasks
      const response = await axios.delete(
        "http://172.20.10.3:3000/api/v1/tasks"
      );

      if (response.status === 200) {
        // Tasks deleted successfully
        Alert.alert("Success", "All tasks have been deleted.");
        setTasks([]);
      } else {
        // Handle the case where the deletion was not successful
        Alert.alert("Error", "An error occurred while deleting tasks.");
      }
    } catch (error) {
      // Handle network errors or other errors
      console.error("Error deleting tasks:", error);
      Alert.alert("Error", "An error occurred while deleting tasks.");
    }

    // Hide the circle confirmation dialog
    setShowCircleConfirmation(false);
  };

  const handleCancelDeleteAllTasks = () => {
    // Cancel the deletion and hide the circle confirmation dialog
    setShowCircleConfirmation(false);
  };
  return (
    <ImageBackground
      source={require("../assets/todoImage.jpg")}
      style={styles.container}
    >
      <Header />
      <TimeDisplay />
      <InputList tasks={tasks} setTasks={setTasks} />
      <ItemList tasks={tasks} setTasks={setTasks} />
      <DeleteTasks
        visible={showCircleConfirmation}
        onConfirm={handleConfirmDeleteAllTasks}
        onCancel={handleCancelDeleteAllTasks}
      />
      <Button title="Delete All Tasks" onPress={handleDeleteAllTasks} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
