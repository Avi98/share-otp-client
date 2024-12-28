import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Signup() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Create Account</Text>

        <View style={styles.inputContainer}>
          <Input style={styles.inputBox} placeholder="Enter your name" />
          <Input
            style={styles.inputBox}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <Button variant="primary" onPress={() => {}}>
            Sign Up
          </Button>
        </View>

        <TouchableOpacity onPress={() => router.push("/")}>
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
  card: {
    backgroundColor: "#FFFFFF", // Replace with your theme color
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // Replace with your theme color
    marginBottom: 16,
  },
  inputBox: {
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
    paddingVertical: 8, // Add padding between elements
  },
  loginText: {
    color: "#0891B2", // Replace with your theme color
    textAlign: "center",
    marginTop: 16,
  },
});
