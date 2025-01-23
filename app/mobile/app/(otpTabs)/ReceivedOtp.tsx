import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Avatar, Chip, Icon } from "@rneui/themed";

const receivedOtpContacts = [
  {
    id: "1",
    name: "Alice Johnson",
    otp: "123456",
    brands: ["amazon"],
  },
  {
    id: "2",
    name: "Bob Brown",
    otp: "654321",
    brands: ["bank"],
  },
  // Add more contacts as needed
];

const OtpCard = ({ contact }) => {
  const initials = contact.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Avatar rounded title={initials} containerStyle={styles.avatar} />
        <View style={styles.cardContent}>
          <Text style={styles.name}>{contact.name}</Text>
          <Text style={styles.otp}>OTP: {contact.otp}</Text>
        </View>
        <TouchableOpacity>
          <Icon name="refresh" type="material" />
        </TouchableOpacity>
      </View>
      <View style={styles.chipsContainer}>
        {contact.brands.map((brand, index) => (
          <Chip
            key={index}
            title={brand}
            icon={{ name: brand, type: "font-awesome" }} // Assuming you have font-awesome icons
            containerStyle={styles.chip}
          />
        ))}
      </View>
    </View>
  );
};

export default function ReceivedOtpScreen() {
  return (
    <FlatList
      data={receivedOtpContacts}
      renderItem={({ item }) => <OtpCard contact={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Replace with your theme color
    padding: 16,
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
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#0891B2", // Replace with your theme color
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000", // Replace with your theme color
  },
  phone: {
    fontSize: 14,
    color: "#64748B", // Replace with your theme color
  },
  otp: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000", // Replace with your theme color
  },
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
});
