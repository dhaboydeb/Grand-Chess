import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        {/* Home */}
        <Stack.Screen 
          name="index" 
          options={{ headerShown: false }} 
        />

        {/* Auth */}
        <Stack.Screen 
          name="auth/login" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="auth/signup" 
          options={{ headerShown: false }} 
        />

        {/* Notes */}
        <Stack.Screen 
          name="goals" 
          options={{ headerShown: false }} 
        />

        {/* Lessons */}
        <Stack.Screen 
          name="lessons/index" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="lessons/[id]/index" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="lessons/puzzles/index" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="lessons/puzzles/[id]/index" 
          options={{ headerShown: false }} 
        />

        {/* Default not found */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  )
}
