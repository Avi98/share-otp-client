import { Text, useColorScheme, View } from "react-native";
import { ThemeProvider } from "../components/themeProvider";
import * as DevClient from "expo-dev-client";
import { Stack } from "expo-router";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider defaultTheme="system" forcedTheme={colorScheme}>
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
      </Stack>
    </ThemeProvider>
  );
}
