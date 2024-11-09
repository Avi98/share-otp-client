import "expo-dev-client";
import * as SmsRead from "@avi98/sms-read";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test if rerenders</Text>
      <Text>{SmsRead.hello()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
