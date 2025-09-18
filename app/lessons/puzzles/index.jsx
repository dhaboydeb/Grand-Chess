import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const puzzles = [
  { id: "1", title: "Mate in 1" },
  { id: "2", title: "Fork Tactic" },
  { id: "3", title: "Pin Example" },
  { id: "4", title: "Skewer Example" },
];

export default function PuzzleList() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chess Puzzles</Text>
      <FlatList
        data={puzzles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/lessons/puzzles/${item.id}`)}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#121212" },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#FFD700", 
    marginTop: 45,
  },
  card: {
    padding: 18,
    marginVertical: 8,
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFD700",
  },
  cardTitle: { fontSize: 18, color: "#fff", fontWeight: "600" },
});
