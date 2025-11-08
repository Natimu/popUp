import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from "react-native";
import { FoldersContext } from "../context/FolderContext";

export default function WidgetSettingsScreen() {
  const { folders } = useContext(FoldersContext);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [interval, setInterval] = useState(1800);
  const [showFolders, setShowFolders] = useState(false);
  const [showIntervals, setShowIntervals] = useState(false);

  const intervals = [
    { label: "Every 15 minutes", value: 900 },
    { label: "Every 30 minutes", value: 1800 },
    { label: "Every hour", value: 3600 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Widget Settings</Text>

      {/* Folder Picker */}
      <TouchableOpacity style={styles.selector} onPress={() => setShowFolders(true)}>
        <Text>{selectedFolder || "Select Folder"}</Text>
      </TouchableOpacity>

      <Modal visible={showFolders} animationType="slide">
        <FlatList
          data={folders}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                setSelectedFolder(item.name);
                setShowFolders(false);
              }}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </Modal>

      {/* Interval Picker */}
      <TouchableOpacity style={styles.selector} onPress={() => setShowIntervals(true)}>
        <Text>
          {intervals.find(i => i.value === interval)?.label || "Select Interval"}
        </Text>
      </TouchableOpacity>

      <Modal visible={showIntervals} animationType="fade" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {intervals.map(i => (
              <TouchableOpacity
                key={i.value}
                onPress={() => {
                  setInterval(i.value);
                  setShowIntervals(false);
                }}
                style={styles.item}
              >
                <Text>{i.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 16 },
  title: { fontSize: 20, fontWeight: "600" },
  selector: { padding: 12, borderRadius: 8, borderWidth: 1, borderColor: "#ccc" },
  item: { padding: 15, borderBottomWidth: 1, borderColor: "#eee" },
  modalOverlay: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.4)" },
  modalContent: { backgroundColor: "#fff", borderRadius: 12, width: "80%" },
});
