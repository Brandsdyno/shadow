import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Screens";
import { icons } from "../constants";
import { Profile, Contacts, UserPlus } from "../Screens";
const Tab = createBottomTabNavigator();
export function EmptyComponent() {
  return null;
}

const BottomTabNavigator = () => {
  // const { isDarkMode, colors, icons } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        // tabBarActiveBackgroundColor: isDarkMode ? "dark" : "white",
        // tabBarInactiveBackgroundColor: isDarkMode ? "dark" : "white",
        tabBarStyle: { borderTopColor: "#CCCCCC", borderTopWidth: 1 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? icons.home : icons.home;
          } else if (route.name === "Profile") {
            iconName = focused ? icons.profile : icons.profile;
          } else if (route.name === "Contacts") {
            iconName = focused ? icons.call : icons.call;
          } else if (route.name === "UserPlus") {
            iconName = focused ? icons.userPlus : icons.userPlus;
          }
          return (
            <Image source={iconName} resizeMode="cover" style={styles.icon} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Chats",
        }}
      />

      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{}}
        // listeners={({ navigation }) => ({
        //   tabPress: (event) => {
        //     event.preventDefault();
        //     navigation.navigate("UploadPosts");
        //   },
        // })}
      />

      <Tab.Screen
        name="UserPlus"
        component={UserPlus}
        options={{
          tabBarLabel: "Notifications",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
