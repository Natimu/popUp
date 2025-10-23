// src/components/QuoteCard.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

export default function QuoteLibraryQuoteCard({ quote, by, background, onCustomize }) {
  return (
    <TouchableOpacity onPress={onCustomize} style={styles.cardContainer}>
      <ImageBackground
        source={background ? { uri: background } : null}
        style={[styles.card, background ? { backgroundColor: "transparent" } : styles.defaultBackground]}
        imageStyle={{ borderRadius: 16 }}
      >
        <Text style={styles.quote}>"{quote}"</Text>
        <Text style={styles.by}>{by}</Text>
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
    minHeight: 100,
    justifyContent: "center",
    backgroundColor: "#FFF",
    elevation: 3,
  },
  defaultBackground: {
    backgroundColor: "#EAEAEA",
  },
  quote: {
    fontSize: 17,
    color: "#333",
    fontStyle: "italic",
  },
  by: {
    fontSize: 13,
    color: "#333",
    fontStyle: "italic",
  },
});
