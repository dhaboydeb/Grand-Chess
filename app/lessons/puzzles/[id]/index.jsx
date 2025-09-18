import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";

const puzzlesContent = {
  "1": {
    title: "Mate in 1",
    description: "White to move and checkmate in one move.",
    answer: "Qh7# (Queen to h7 is checkmate).",
  },
  "2": {
    title: "Fork Tactic",
    description: "White to move and fork the King and Rook.",
    answer: "Nc7+ (Knight to c7 forks King and Rook).",
  },
  "3": {
    title: "Pin Example",
    description: "Black bishop pins the White knight to the King.",
    answer: "Bg4 pins the knight on f3 against the King on e1.",
  },
  "4": {
    title: "Skewer Example",
    description: "White to move and skewer Black’s Queen and King.",
    answer: "Rb8+ forces the King to move, then White wins the Queen.",
  },
};

export default function PuzzleDetail() {
  const { id } = useLocalSearchParams();
  const puzzle = puzzlesContent[id];
  const [showAnswer, setShowAnswer] = useState(false);

  if (!puzzle) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#fff" }}>Puzzle not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{puzzle.title}</Text>
      <Text style={styles.description}>{puzzle.description}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowAnswer(!showAnswer)}
      >
        <Text style={styles.buttonText}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </Text>
      </TouchableOpacity>

      {showAnswer && <Text style={styles.answer}>{puzzle.answer}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#121212" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#FFD700",
    marginTop: 40,
  },
  description: { fontSize: 16, lineHeight: 24, marginBottom: 20, color: "#e0e0e0" },
  button: {
    padding: 15,
    backgroundColor: "#21cc8d",
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 15,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  answer: {
    fontSize: 16,
    lineHeight: 24,
    color: "#21cc8d",
    marginTop: 15,
    backgroundColor: "#1e1e1e",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#21cc8d",
  },
});
