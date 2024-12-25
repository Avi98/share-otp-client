import { View, Text, Pressable } from "react-native";
import { Link, router } from "expo-router";

const HomePage = () => {
  return (
    <View>
      <Text>Home Page</Text>
      <Link href="/login">Login</Link>
      <Pressable onPress={() => router.push("/signup")}>
        <Text>Signup</Text>
      </Pressable>
    </View>
  );
};

export default HomePage;
