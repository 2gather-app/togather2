import { Stack, Tabs } from "expo-router";
export default function TabsLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* <Stack.Screen name="(Home)/" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
