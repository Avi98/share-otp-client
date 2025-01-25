import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import { FloatingButton } from "../../components/ui/floatingButton";
import { Avatar } from "../../components/ui/avatar";
import { MerchantChips } from "../../components/ui/merchantChips";

export type UserType = {
  id: number;
  name: string;
  phone: string;
  avatar: string;
  merchants: Array<{
    id: number;
    name: string;
    icon: string;
  }>;
};

const USERS: UserType[] = [
  {
    id: 1,
    name: "John Doe",
    phone: "+1 234 567 8900",
    avatar: "https://i.pravatar.cc/150?u=1",
    merchants: [
      {
        id: 1,
        name: "Amazon",
        icon: "https://www.google.com/s2/favicons?domain=moreretail.in",
      },
      {
        id: 2,
        name: "PayPal",
        icon: "https://www.google.com/s2/favicons?domain=flipkart.com",
      },
      {
        id: 3,
        name: "Google",
        icon: "https://www.google.com/s2/favicons?domain=lenskart.com",
      },
      {
        id: 4,
        name: "Google",
        icon: "https://www.google.com/s2/favicons?domain=blinkit.com",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+1 234 567 8901",
    avatar: "https://i.pravatar.cc/150?u=2",
    merchants: [
      {
        id: 1,
        name: "Amazon",
        icon: "https://www.google.com/s2/favicons?domain=amazon.com",
      },
      {
        id: 2,
        name: "PayPal",
        icon: "https://www.google.com/s2/favicons?domain=paypal.com",
      },
      {
        id: 3,
        name: "Google",
        icon: "https://www.google.com/s2/favicons?domain=google.com",
      },
    ],
  },
  {
    id: 3,
    name: "Mike Johnson",
    phone: "+1 234 567 8902",
    avatar: "https://i.pravatar.cc/150?u=3",
    merchants: [
      {
        id: 1,
        name: "Amazon",
        icon: "https://www.google.com/s2/favicons?domain=amazon.com",
      },
      {
        id: 2,
        name: "PayPal",
        icon: "https://www.google.com/s2/favicons?domain=paypal.com",
      },
      {
        id: 3,
        name: "Google",
        icon: "https://www.google.com/s2/favicons?domain=google.com",
      },
    ],
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
                <Text style={styles.subtitle}>
                  {user.phone.replace(/(\d{3})\s*\d{3}\s*(\d{4})/, "$1 *** $2")}
                </Text>
                <MerchantChips user={user} />
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
