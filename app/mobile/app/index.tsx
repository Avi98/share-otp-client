import { Text, useColorScheme, View } from "react-native";
import { Stack } from "expo-router";
import { ThemeProvider } from "../components/themeProvider";
import * as DevClient from "expo-dev-client";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider defaultTheme="system" forcedTheme={colorScheme}>
      {/* <Stack>
        <Stack.Screen
          name="(auth)/login"
          options={{ headerShown: false, title: "Login" }}
        />
        {/* <Stack.Screen name="(app)" options={{ headerShown: false }} /> */}
      {/* </Stack> */}

      <View>
        <Text> This is index js</Text>
      </View>
    </ThemeProvider>
  );
}
