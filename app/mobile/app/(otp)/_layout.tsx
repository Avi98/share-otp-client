import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <Tabs.Screen
        name="received"
        options={{
          title: "Received OTP",
          tabBarLabel: "Received",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="mobile" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="shared"
        options={{
          title: "Shared OTP",
          tabBarLabel: "Shared",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="paper-plane" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
