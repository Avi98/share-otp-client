import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { MaskedTextInput } from "react-native-mask-text";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

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
    router.replace("/(app)/profile");
  };

  return (
    <View className="flex-1 bg-background p-4 justify-center">
      <View className="space-y-6">
        <Text className="text-2xl font-bold text-foreground">Welcome Back</Text>

        <View className="space-y-4">
          <View className="bg-muted rounded-lg overflow-hidden">
            <MaskedTextInput
              mask="+91 9999999999"
              onChangeText={(text, rawText) => setPhone(rawText)}
              value={phone}
              keyboardType="numeric"
              placeholder="Enter phone number"
              className="px-4 py-3 text-foreground w-full"
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
          <Text className="text-primary text-center">
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
