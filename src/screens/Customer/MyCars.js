import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import carData from "../../../assets/data/carBrands.json";
import { useNavigation } from "@react-navigation/native";

export default function MyCars() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        setBrands(carData);
    }, []);

    const navigation = useNavigation();

    const renderBrand = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => {
                navigation.navigate("CarModels", { models: item.models, brand: item.brand })
                console.log("Selected brand:", item.brand);
            }}
        >
            <Image source={{ uri: item.logo }} style={styles.logo} />
            <Text style={styles.name}>{item.brand}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Select Manufacturer</Text>
            <FlatList
                data={brands}
                renderItem={renderBrand}
                keyExtractor={(item) => item.brand}
                numColumns={3}
                columnWrapperStyle={styles.row}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 5, backgroundColor: "#fff", flex: 1 },
    heading: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
    row: { justifyContent: "space-between", marginBottom: 16 },
    card: {
        alignItems: "center",
        flex: 1,
        marginHorizontal: 4,
        marginVertical: 4
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: "contain",
        marginBottom: 1,
    },
    name: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "medium",
        fontFamily:"Manrope-Medium",
    },
});
