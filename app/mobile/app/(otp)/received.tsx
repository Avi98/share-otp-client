import { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Platform } from "react-native";
import { FloatingButton } from "../../components/ui/floatingButton";
import { Avatar } from "../../components/ui/avatar";

export type UserType = {
  id: number;
  name: string;
  phone: string;
  avatar: string;
};

const USERS = [
  {
    id: 1,
    name: "John Doe",
    phone: "+1 234 567 8900",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+1 234 567 8901",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: 3,
    name: "Mike Johnson",
    phone: "+1 234 567 8902",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
];

export default function ReceivedOTP() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        {USERS.map((user) => (
          <View key={user.id} style={styles.card}>
            <View style={styles.avatarTextContainer}>
              <Avatar user={user} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{user.name}</Text>
                <Text style={styles.subtitle}>{user.phone}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.fab}>
        <FloatingButton onPress={() => setIsMenuVisible(true)}>
          <Text style={styles.fabText}>+</Text>
        </FloatingButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  avatarTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
    }),
  },

  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#007AFF",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  fabText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
