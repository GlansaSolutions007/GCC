// src/navigation/CustomerTabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Customer/HomeScreen";
import ProfileScreen from "../screens/Customer/ProfileScreen";
import BookServiceScreen from "../screens/Customer/BookServiceScreen";
import MenuButton from "../components/MenuButton";
import NotificationButton from "../components/NotificationButton";


const Tab = createBottomTabNavigator();

export default function CustomerTabNavigator({ navigation }) {


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerTitle: route.name, // You can customize this per screen
        headerLeft: () => (
          <MenuButton onPress={() => console.log("Toggle Drawer")} />
        ),
        headerRight: () => (
          <NotificationButton
            onPress={() => console.log("Go to Notifications")}
          />
        ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        style={{ fontFamily: "Manrope-Regular" }}
      />
      <Tab.Screen name="Book Service" component={BookServiceScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
  
    </Tab.Navigator>
  );
}
