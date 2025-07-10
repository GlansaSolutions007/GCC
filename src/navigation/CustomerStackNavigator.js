import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomerTabNavigator from "./CustomerTabNavigator";
import CarModels from "../screens/Customer/CarModels";

const Stack = createNativeStackNavigator();

export default function CustomerStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CustomerTabNavigator"
        component={CustomerTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CarModels"
        component={CarModels}
        options={({ route }) => ({
          title: `${route.params.brand} Models`,
        })}
      />
    </Stack.Navigator>
  );
}
