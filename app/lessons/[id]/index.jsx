import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

const lessonsContent = {
  "1": {
    title: "♟️ How the Pieces Move",
    content:
      "Each piece moves differently:\n\n" +
      "• Pawns → move forward\n" +
      "• Rooks → straight lines\n" +
      "• Bishops → diagonals\n" +
      "• Knights → L-shape\n" +
      "• Queen → combines Rook + Bishop\n" +
      "• King → one square any direction",
  },
  "2": {
    title: "♔ What is Check and Checkmate?",
    content:
      "✔️ Check → King is under threat.\n\n" +
      "🏆 Checkmate → King cannot escape the threat. The game is over!",
  },
  "3": {
    title: "📖 Basic Opening Principles",
    content:
      "✅ Control the center\n" +
      "✅ Develop your pieces quickly\n" +
      "✅ Protect your King (castle early)\n" +
      "❌ Don’t move the same piece multiple times in the opening",
  },
  "4": {
    title: "🏆 Simple Checkmates",
    content:
      "Learn essential endgames:\n\n" +
      "• King + Queen vs King\n" +
      "• King + Rook vs King\n\n" +
      "These are the foundations of mastering endgames.",
  },
};

export default function LessonDetail() {
  const { id } = useLocalSearchParams();
  const lesson = lessonsContent[id];

  if (!lesson) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#fff" }}>Lesson not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.content}>{lesson.content}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#1a1a1a" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#d4af37",
    textAlign: "center",
    marginTop: 40,
  },
  content: {
    fontSize: 16,
    lineHeight: 26,
    color: "#fff",
    backgroundColor: "#2a2a2a",
    padding: 16,
    borderRadius: 12,
  },
});
