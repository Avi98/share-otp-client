import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { MaskedTextInput } from "react-native-mask-text";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleSendOtp = () => {
    // TODO: Implement OTP sending logic
    setShowOtp(true);
  };

  const handleVerifyOtp = () => {
    // TODO: Implement OTP verification logic
    // router.replace("/ReceivedOtp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>

        <View style={styles.inputContainer}>
          <View style={styles.phoneInputContainer}>
            <MaskedTextInput
              mask="+91 9999999999"
              onChangeText={(text, rawText) => setPhone(rawText)}
              value={phone}
              keyboardType="numeric"
              placeholder="Enter phone number"
              style={styles.phoneInput}
            />
          </View>

          {!showOtp ? (
            <Button variant="primary" onPress={handleSendOtp}>
              Send OTP
            </Button>
          ) : (
            <>
              <Input
                value={otp}
                onChangeText={setOtp}
                keyboardType="numeric"
                maxLength={6}
                placeholder="Enter OTP"
              />
              <Button variant="primary" onPress={handleVerifyOtp}>
                Verify OTP
              </Button>
            </>
          )}
        </View>

        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text style={styles.signupText}>Don't have an account? Sign up</Text>
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
  inputContainer: {
    marginBottom: 16,
  },
  phoneInputContainer: {
    backgroundColor: "#F1F5F9", // Replace with your theme color
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  phoneInput: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: "#000000", // Replace with your theme color
    width: "100%",
  },
  signupText: {
    color: "#0891B2", // Replace with your theme color
    textAlign: "center",
    marginTop: 16,
  },
});
