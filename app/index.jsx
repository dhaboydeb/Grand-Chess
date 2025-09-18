import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/auth/login");
      } else {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#d4af37" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>♔ G R A N D C H E S S ♚</Text>
      <Text style={styles.subtitle}>Master your notes, lessons & puzzles</Text>

      {/* Notes Section */}
      <TouchableOpacity style={styles.card} onPress={() => router.push("/goals")}>
        <Text style={styles.cardText}>📖 View Chess Notes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => router.push("/goals/create")}>
        <Text style={styles.cardText}>➕ Add New Chess Note</Text>
      </TouchableOpacity>

      {/* Lessons Section */}
      <TouchableOpacity style={styles.card} onPress={() => router.push("/lessons")}>
        <Text style={styles.cardText}>🎓 Chess Lessons</Text>
      </TouchableOpacity>

      {/* Puzzles Section */}
      <TouchableOpacity style={styles.card} onPress={() => router.push("/lessons/puzzles")}>
        <Text style={styles.cardText}>🧩 Chess Puzzles</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  center: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#d4af37",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 40,
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#2a2a2a",
    padding: 18,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Home;
