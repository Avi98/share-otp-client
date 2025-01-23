import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

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
  return (
    <ScrollView style={styles.container}>
      {USERS.map((user) => (
        <View key={user.id} style={styles.card}>
          <View style={styles.avatarTextContainer}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{user.name}</Text>
              <Text style={styles.subtitle}>{user.phone}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },

  avatarTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
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
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
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
});
