import React from "react";
import { View, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function CarModels() {
  const route = useRoute();
  const { brand, models } = route.params;

  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>{brand} Models</Text>
      <FlatList
        data={models}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.fuelTypes.join(", ")}</Text>
          </View>
        )}
      />
    </View>
  );
}
