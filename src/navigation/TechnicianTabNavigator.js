// src/navigation/TechnicianTabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AssignedJobsScreen from "../screens/Technician/AssignedJobsScreen";
import CompleteJobScreen from "../screens/Technician/CompleteJobScreen";
import ProfileScreen from "../screens/Customer/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TechnicianTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Assigned Jobs" component={AssignedJobsScreen} />
      <Tab.Screen name="Complete Job" component={CompleteJobScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
