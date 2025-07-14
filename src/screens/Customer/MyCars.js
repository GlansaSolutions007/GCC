import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import carData from "../../../assets/data/carBrands.json";
import { useNavigation } from "@react-navigation/native";
import SearchBox from "../../components/SearchBox";
import globalStyles from "../../styles/globalStyles";

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
            <Text style={globalStyles.f12Bold}>{item.brand}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={[globalStyles.container]}>
            <SearchBox />
            <View style={{ marginVertical: 10 }}>
                <Text style={globalStyles.f24Bold}>Add Your Car</Text>
                <Text style={globalStyles.f16Regular}>Start From Selecting Your Manufacturer.</Text>
            </View>
            <FlatList
                data={brands}
                renderItem={renderBrand}
                keyExtractor={(item) => item.brand}
                numColumns={3}
                columnWrapperStyle={styles.row}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: "#fff", flex: 1 },
    row: { justifyContent: "space-between", marginBottom: 16 },
    card: {
        alignItems: "center",
        flex: 1,
        marginHorizontal: 2,
        marginVertical: 2
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: "contain",
        marginBottom: 1,
    },
});
