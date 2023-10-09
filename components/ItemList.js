import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import Color from "../Color";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const Item = (props) => {
  const { name, _id, setTasks, tasks } = props;
  const taskToUpdate = tasks.find((task) => task._id === _id);

  const handleDeleteTask = async (taskId) => {
    try {
      // Send a DELETE request to your backend API with the task ID
      await fetch(`http://172.20.10.3:3000/api/v1/tasks/${taskId}`, {
        method: "DELETE",
      });

      // Remove the deleted task from the tasks state
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const toggleTaskDone = (taskId) => {
    if (!taskToUpdate) {
      return; // Task not found, handle this case
    }

    Alert.alert(
      "Confirm Task Completion",
      `Are you sure you want to mark this task as ${
        taskToUpdate.completed ? "incomplete" : "complete"
      }?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            try {
              // Send a PUT request to update the backend using Axios
              const response = await axios.patch(
                `http://172.20.10.3:3000/api/v1/tasks/${taskId}`,
                { completed: !taskToUpdate.completed },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              if (response.status === 200) {
                // Update the local state with the updated task data
                setTasks((prevTasks) =>
                  prevTasks.map((task) =>
                    task._id === taskId
                      ? { ...task, completed: !task.completed }
                      : task
                  )
                );
              } else {
                console.error("Error updating task:", response.status);
                Alert.alert(
                  "Error",
                  "An error occurred while updating the task."
                );
              }
            } catch (error) {
              console.error("Network error:", error);
              Alert.alert(
                "Error",
                "A network error occurred while updating the task."
              );
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container} key={_id}>
      <View style={styles.listStyle}>
        <Text
          style={[
            styles.todoName,
            taskToUpdate.completed && styles.textDecoration,
          ]}
        >
          {" "}
          {name}{" "}
        </Text>
        <View style={styles.iconMark}>
          {!taskToUpdate.completed && (
            <TouchableOpacity onPress={() => toggleTaskDone(_id)}>
              <Ionicons name="checkmark-circle-sharp" size={30} color="white" />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => handleDeleteTask(_id)}>
            <AntDesign
              name="delete"
              size={30}
              color="coral"
              style={{ marginLeft: 3 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ItemList = ({ tasks, index, setTasks }) => {
  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      _id={item._id}
      index={index}
      setTasks={setTasks}
      tasks={tasks}
      completed={item.completed}
    />
  );
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => (item._id ? item._id.toString() : null)}
    />
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // Padding around the entire list
    paddingTop: 10, // Padding at the top of the list
    alignItems: "center",
  },
  listStyle: {
    borderColor: Color.lighterpurple,
    borderWidth: 2,
    width: 350,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  todoName: {
    fontSize: 20,
    fontWeight: "bold",
    color: Color.white,
  },
  iconMark: {
    flexDirection: "row",
    marginLeft: "auto",
  },
  textDecoration: {
    textDecorationLine: "line-through", // Add text decoration style here
    color: "coral", // Change this to your desired text decoration color
  },
});
