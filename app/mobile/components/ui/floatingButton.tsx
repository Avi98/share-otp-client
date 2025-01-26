import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";

interface FloatingButtonProps {
  onPress: () => void;
  style?: ViewStyle;
  children?: React.ReactNode;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  onPress,
  style,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
  },
});
