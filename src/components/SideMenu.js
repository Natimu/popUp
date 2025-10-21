
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Animated, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get("window");

export default function SideMenu({ visible, onClose, navigation }) {
    const slideAnim = React.useRef(new Animated.Value(width)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : width,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [visible]);
  return (
    <Animated.View
      pointerEvents={visible ? "auto" : "none"}
      style={[
        styles.menuContainer,
        { transform: [{ translateX: slideAnim }] },
      ]}
    >
        <View style={styles.menuContent}>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.close}>×</Text>
        </TouchableOpacity>

       
        <TouchableOpacity style={styles.menuList} onPress={onClose}>
            <Ionicons name="home" size={20} color={"black"}/>
            <Text style={styles.menuItem}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuList} onPress={() => navigation.navigate("Favorites")}>
            <Ionicons name="heart" size={20} color={"#ea6363ff"}/>
          <Text style={styles.menuItem}>Favorites</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuList} onPress={() => navigation.navigate("Widget Preview")}>
            <MaterialIcons name="settings-display" size={20} color={"#111415ff"}/>
          <Text style={styles.menuItem}>Widget Display</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuList} onPress={() => navigation.navigate("Widget Settings")}>
            <Ionicons name="settings-outline" size={20} color={"#111415ff"}/>
          <Text style={styles.menuItem}>Widget Settings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuList} onPress={() => navigation.navigate("VerseSource")}>
            <SimpleLineIcons name="question" size={20} color={"#111415ff"}/>
          <Text style={styles.menuItem}>About</Text>
        </TouchableOpacity>
        
        
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "50%",
    backgroundColor: "#FFF",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  menuContent: {
    padding: 20,
  },
  close: {
    fontSize: 28,
    alignSelf: "flex-end",
    color: "#666",
  },
  menuList:{
    flexDirection:"row",
    alignItems: "center",
    gap: 10,
    
  },

  menuItem: {
    fontSize: 18,
    paddingVertical: 12,
    color: "#333",
  }
});
