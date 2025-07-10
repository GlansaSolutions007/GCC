import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomHeader({ navigation }) {

  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.headerContainer, { paddingTop: insets.top + 10 }]}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.hello}>Hello User</Text>
          <Pressable>
            <Text style={styles.location}>
              Hyderabad, Telangana <Ionicons name="chevron-down" size={14} />
            </Text>
          </Pressable>
        </View>

        <Pressable onPress={() => console.log("Notifications")}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    fontFamily: "Manrope-Medium",
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 0,
    backgroundColor: "#fff",
    // borderBottomColor: "#eee",
    // borderBottomWidth: 1,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  hello: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "#007AFF",
    marginTop: 2,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 50,
  },
});
