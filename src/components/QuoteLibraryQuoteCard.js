// src/components/QuoteCard.js
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Share } from "react-native";
import * as Clipboard from "expo-clipboard";
import * as Speech from "expo-speech";

export default function QuoteLibraryQuoteCard({ quote, by, background, onCustomize }) {
  const [liked, setLiked] = useState(false);

  const handelShare = async (quoteText, author) => {
        try{
          await Share.share({
            message: `"${quoteText}" - ${author}`,
          });
        }catch{
          console.error("Failed to share Quote")
        }
      };

  const handelCopy = async (quoteText, author) => {
    await Clipboard.setStringAsync(`"${quoteText}" - ${author}`);
    alert("Quote copied to clipboard!")
  };

  const handelSpeak = (quoteText, author) => {
    const textToRead = `"${quoteText}" - ${author}`;
    Speech.speak(textToRead, {
      rate: 1.0,
      pitch: 1.0,
      language: "en-US",
    })
  }

  return (
    <TouchableOpacity onPress={onCustomize} style={styles.cardContainer}>
      <ImageBackground
        source={background ? { uri: background } : null}
        style={[styles.card, background ? { backgroundColor: "transparent" } : styles.defaultBackground]}
        imageStyle={{ borderRadius: 16 }}
      >
        <Text style={styles.quote}>"{quote}"</Text>
        <Text style={styles.by}>{by}</Text>
        <View style={styles.actionBar}>
          <TouchableOpacity onPress={() => setLiked(!liked)}>
            <Ionicons 
              name={liked ? "heart" : "heart-outline"} 
              size={20} 
              color={liked ? "#e63946" : "#555"}/>
            <Text>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handelShare(quote, by)}>
            <Feather name="share" size={20} color={"#333"}/>
            <Text>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handelCopy(quote, by)}>
            <Feather name="copy" size={20} color={"#333"}/>
            <Text>Copy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handelSpeak(quote, by)}>
            <AntDesign name="sound" size={20} color={"#333"}/>
            <Text>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Ionicons name="add" size={20} color={"#333"}/>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
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
    paddingBottom:10,
  },
  actionBar: {
    flexDirection: "row",
    justifyContent:"space-around",
    alignItems:"center",
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderColor: "#ccc",
  }
});
