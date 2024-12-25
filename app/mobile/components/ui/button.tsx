import React from "react";
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "default" | "primary" | "outline";
  size?: "default" | "sm" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, variantStyles[variant], sizeStyles[size], style]}
      {...props}
    >
      <Text
        style={[styles.text, textVariantStyles[variant], textSizeStyles[size]]}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  text: {
    fontWeight: "500",
    textAlign: "center",
  },
});

const variantStyles = StyleSheet.create({
  default: {
    backgroundColor: "#f0f0f0", // Replace with your muted color
  },
  primary: {
    backgroundColor: "#007bff", // Replace with your primary color
  },
  outline: {
    borderColor: "#007bff", // Replace with your primary color
    borderWidth: 1,
  },
});

const sizeStyles = StyleSheet.create({
  default: {
    height: 48,
  },
  sm: {
    height: 36,
  },
  lg: {
    height: 56,
  },
});

const textVariantStyles = StyleSheet.create({
  default: {
    color: "#000000", // Replace with your foreground color
  },
  primary: {
    color: "#ffffff", // Replace with your primary foreground color
  },
  outline: {
    color: "#007bff", // Replace with your primary color
  },
});

const textSizeStyles = StyleSheet.create({
  default: {
    fontSize: 16,
  },
  sm: {
    fontSize: 14,
  },
  lg: {
    fontSize: 18,
  },
});
