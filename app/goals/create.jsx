import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGoals } from "../../hooks/useGoals";
import { useRouter } from "expo-router";
import { auth } from "../../firebaseConfig";

const Create = () => {
  const [goal, setGoal] = useState("");
  const { createGoal } = useGoals();
  const router = useRouter();

  const handleSubmit = async () => {
    if (!goal.trim()) return;

    await createGoal({
      title: goal,
      progress: 0,
      userId: auth.currentUser.uid,
      createdAt: new Date(),
    });

    setGoal("");
    Keyboard.dismiss();
    router.push("/goals");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text style={styles.header}>♛ GrandChess</Text>
        <Text style={styles.subtitle}>Create a New Chess Note</Text>

        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Write your chess note here..."
            placeholderTextColor="#bfbfbf"
            value={goal}
            onChangeText={setGoal}
            multiline
            textAlignVertical="top"
          />
        </View>

        <Pressable
          onPress={handleSubmit}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Add Chess Note</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#1a1a1a", // dark background
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center",
    color: "#d4af37", // gold accent
  },
  subtitle: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    width: "100%",
    minHeight: 140,
    backgroundColor: "#2a2a2a", // card color
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#333",
  },
  input: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
    padding: 6,
  },
  button: {
    width: "100%",
    padding: 16,
    backgroundColor: "#d4af37", // gold button
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation: 4,
  },
  buttonPressed: {
    transform: [{ scale: 0.995 }],
    opacity: 0.95,
  },
  buttonText: {
    color: "#1a1a1a",
    fontWeight: "bold",
    fontSize: 16,
  },
});
