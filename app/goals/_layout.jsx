import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"
import { GoalsProvider } from '../../contexts/GoalsContext'
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../firebaseConfig"
import { useRouter } from "expo-router"
import { View, ActivityIndicator } from "react-native"

// 🎨 Refined Color Palette (Black, Gold, Grey)
const COLORS = {
  softBlack: "#1d1d1dff", // soft black background
  gold: "#f5c518",
  grey: "#a9a9a9",
  white: "#ffffff"
}


export default function GoalsLayout() {
  const [checking, setChecking] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/auth/login")
      }
      setChecking(false)
    })
    return unsub
  }, [])

  if (checking) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.black }}>
        <ActivityIndicator size="large" color={COLORS.gold} />
      </View>
    )
  }

  return (
    <GoalsProvider>
      <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: COLORS.softBlack,
              borderTopColor: COLORS.gold,
              borderTopWidth: 1,
            },
            tabBarActiveTintColor: COLORS.gold,
            tabBarInactiveTintColor: COLORS.grey,
          }}
        >
        {/* Chess Journal (was Goals Index) */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'Chess Journal',
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                name={focused ? 'book' : 'book-outline'}
                color={focused ? COLORS.gold : COLORS.grey}
              />
            ),
          }}
        />

        {/* Create Note (was Create Goal) */}
        <Tabs.Screen
          name="create"
          options={{
            title: 'New Note',
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                name={focused ? 'create' : 'create-outline'}
                color={focused ? COLORS.gold : COLORS.grey}
              />
            ),
          }}
        />

        {/* Hidden Edit Route */}
        <Tabs.Screen
          name="edit/[id]"
          options={{
            href: null, // prevents tab bar from showing
          }}
        />
      </Tabs>
    </GoalsProvider>
  )
}
