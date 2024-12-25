import { Stack, Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
          //   title: "Tab 2 Title",
        }}
      />
    </Stack>
  );
};

export default TabsLayout;
