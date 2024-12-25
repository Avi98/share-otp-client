import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function Signup() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Create Account</Text>

        <View style={styles.inputContainer}>
          <Input placeholder="Enter your name" />
          <Input placeholder="Enter your email" keyboardType="email-address" />
          <Button variant="primary" onPress={() => {}}>
            {/* <Button variant="primary" onPress={() => router.push("/login")}> */}
            Sign Up
          </Button>
        </View>

        {/* <TouchableOpacity onPress={() => router.push("/login")}> */}
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.loginText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Replace with your theme color
    padding: 16,
    justifyContent: "center",
  },
  innerContainer: {
    spaceY: 24, // Adjust as needed
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // Replace with your theme color
  },
  inputContainer: {
    spaceY: 16, // Adjust as needed
  },
  loginText: {
    color: "#0891B2", // Replace with your theme color
    textAlign: "center",
  },
});
