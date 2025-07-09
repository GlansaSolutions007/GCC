// src/navigation/CustomerTabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/Customer/HomeScreen";
import ProfileScreen from "../screens/Common/ProfileScreen";
import BookServiceScreen from "../screens/Customer/BookServiceScreen";
import MenuButton from "../components/MenuButton";
import NotificationButton from "../components/NotificationButton";
import MyCars from "../screens/Customer/MyCars";
import ServiceList from "../screens/Customer/ServiceList";

const Tab = createBottomTabNavigator();

export default function CustomerTabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerTitle: route.name,
        headerLeft: () => (
          <MenuButton onPress={() => console.log("Toggle Drawer")} />
        ),
        headerRight: () => (
          <NotificationButton
            onPress={() => console.log("Go to Notifications")}
          />
        ),
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#8e8e93",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0.5,
          height: 60,
          paddingBottom: 5,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let iconLib = Ionicons;

          switch (route.name) {
            case "My Car Buddy":
              iconName = "home-outline";
              break;
            case "My Cars":
              iconName = "car-sport-outline";
              break;
            case "Book Service":
              iconName = "calendar-outline";
              break;
            case "My Services":
              iconName = "construct-outline";
              break;
            case "Profile":
              iconName = "person-circle-outline";
              break;
            default:
              iconName = "ellipse-outline";
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="My Car Buddy" component={HomeScreen} />
      <Tab.Screen name="My Cars" component={MyCars} />
      <Tab.Screen name="Book Service" component={BookServiceScreen} />
      <Tab.Screen name="My Services" component={ServiceList} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
