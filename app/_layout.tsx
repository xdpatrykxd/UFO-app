import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SightingList"
        options={{
          title: "Sighting List",
        }}
      />
      <Stack.Screen
        name="RecentSighting"
        options={{ title: "Recent Sightings"}}
      />
      <Stack.Screen
        name="ReportSighting"
        options={{ title: "Report a Sighting"}}
      />
    </Stack>
  );
};

export default RootLayout;
