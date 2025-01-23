import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

const BRANDS = [
  {
    id: 1,
    name: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    description: "E-commerce giant",
  },
  {
    id: 2,
    name: "Google",
    logo: "https://logo.clearbit.com/google.com",
    description: "Tech leader",
  },
  {
    id: 3,
    name: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    description: "Innovation pioneer",
  },
];

export default function SharedOTP() {
  return (
    <ScrollView style={styles.container}>
      {BRANDS.map((brand) => (
        <View key={brand.id} style={styles.card}>
          <Image source={{ uri: brand.logo }} style={styles.logo} />
          <Text style={styles.title}>{brand.name}</Text>
          <Text style={styles.description}>{brand.description}</Text>
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
  logo: {
    width: 60,
    height: 60,
    marginBottom: 8,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});
