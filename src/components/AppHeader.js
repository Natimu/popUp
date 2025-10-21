import React, {useState}from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AppHeader({ headerText, onMenuPress }) {
  
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{headerText}</Text>
      <TouchableOpacity onPress={onMenuPress}>
        <Ionicons name="menu" size={28} color="#333" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#F9F7FF",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3A2A7C",
  },
});
