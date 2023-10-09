import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CircleConfirmation = ({ visible, onCancel, onConfirm }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onCancel}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 100,
            padding: 20,
            alignItems: "center",
          }}
        >
          <AntDesign name="exclamationcircleo" size={50} color="coral" />
          <Text style={{ fontSize: 18, marginTop: 10 }}>
            Are you sure you want to delete all tasks?
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "coral",
                padding: 10,
                borderRadius: 10,
                marginRight: 20,
              }}
              onPress={onConfirm}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "gray",
                padding: 10,
                borderRadius: 10,
              }}
              onPress={onCancel}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CircleConfirmation;
