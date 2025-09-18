import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const lessons = [
  { id: "1", title: "♟️ How the Pieces Move" },
  { id: "2", title: "♔ What is Check and Checkmate?" },
  { id: "3", title: "📖 Basic Opening Principles" },
  { id: "4", title: "🏆 Simple Checkmates" },
];

export default function LessonsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎓 Chess Lessons</Text>
      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/lessons/${item.id}`)}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#1a1a1a" },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#d4af37",
    marginTop: 45,
  },
  card: {
    padding: 18,
    marginVertical: 10,
    backgroundColor: "#2a2a2a",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d4af37",
  },
  title: { fontSize: 18, fontWeight: "600", color: "#fff" },
});
