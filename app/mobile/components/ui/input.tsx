import React from "react";
import { TextInput, TextInputProps, View, StyleSheet } from "react-native";

export interface InputProps extends TextInputProps {
  error?: boolean;
}

export const Input = React.forwardRef<TextInput, InputProps>(
  ({ error, style, ...props }, ref) => {
    return (
      <View style={[styles.container, error && styles.error, style]}>
        <TextInput
          ref={ref}
          style={styles.input}
          placeholderTextColor="#666"
          {...props}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0", // Replace with your muted color
    borderRadius: 8,
    overflow: "hidden",
  },
  error: {
    borderColor: "#ff0000", // Replace with your error color
    borderWidth: 2,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: "#000000", // Replace with your foreground color
  },
});
