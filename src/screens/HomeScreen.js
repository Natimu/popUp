import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.verseText}>
        “Be still, and know that I am God.” — Psalm 46:10
      </Text>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate("WidgetSettings")}
      >
        <Text style={globalStyles.buttonText}>Widget Settings</Text>
      </TouchableOpacity>
    </View>
  );
}
