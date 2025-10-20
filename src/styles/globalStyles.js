import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F7FF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  verseText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: "#2D2D2D",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#8A2BE2",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
