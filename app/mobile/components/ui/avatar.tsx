import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { UserType } from "../../app/(otp)/received";

interface AvatarProps {
  user: UserType;
}

export const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <View style={styles.avatarTextContainer}>
      <View
        style={[
          styles.avatar,
          {
            backgroundColor: "#007AFF",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
          {user.name
            .split(" ")
            .slice(0, 2)
            .map((word) => word[0])
            .join("")}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    overflow: "hidden",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
  },

  avatarTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  image: {
    resizeMode: "cover",
  },
  placeholder: {
    backgroundColor: "#E1E1E1",
  },
});
