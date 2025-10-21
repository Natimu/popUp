// src/components/QuoteCard.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

export default function QuoteCard({ title, quote, background, onCustomize }) {
  return (
    <TouchableOpacity onPress={onCustomize} style={styles.cardContainer}>
      <ImageBackground
        source={background ? { uri: background } : null}
        style={[styles.card, background ? { backgroundColor: "transparent" } : styles.defaultBackground]}
        imageStyle={{ borderRadius: 16 }}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.quote}>"{quote}"</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    width: "100%",
  },
  card: {
    borderRadius: 16,
    padding: 20,
    minHeight: 140,
    justifyContent: "center",
    backgroundColor: "#FFF",
    elevation: 3,
  },
  defaultBackground: {
    backgroundColor: "#EAEAEA",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3A2A7C",
    marginBottom: 8,
  },
  quote: {
    fontSize: 15,
    color: "#333",
    fontStyle: "italic",
  },
});
