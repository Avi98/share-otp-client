import { Text, useColorScheme, View } from "react-native";
import * as DevClient from "expo-dev-client";
import { Stack } from "expo-router";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="/"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="/signup"
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="/(otpTabs)"
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack>
  );
}
