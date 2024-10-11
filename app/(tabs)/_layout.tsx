import CustomTabBar from "@/components/navigation/CustomTabBar";
import { Tabs } from "expo-router";
import { House, MessageCircle, Search, UserRound } from "lucide-react-native";
import { Box } from "@/components/ui/box";

export default function RootLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        freezeOnBlur: true,
        unmountOnBlur: true,
        header: () => {
          return <Box></Box>;
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: (color) => (
            <House
              color={color.color}
              fill={color.color !== "#000" ? "none" : color.color}
              style={{ width: color.size, height: color.size }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: (color) => (
            <Search
              color={color.color}
              style={{ width: color.size, height: color.size }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="notification"
        options={{
          title: "Notification",
          tabBarIcon: (color) => (
            <MessageCircle
              color={color.color}
              fill={color.color !== "#000" ? "none" : color.color}
              style={{ width: color.size, height: color.size }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: (color) => (
            <UserRound
              color={color.color}
              fill={color.color !== "#000" ? "none" : color.color}
              style={{ width: color.size, height: color.size }}
            />
          ),
        }}
      />
    </Tabs>
  );
}