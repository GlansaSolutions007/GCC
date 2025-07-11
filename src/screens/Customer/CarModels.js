import React, { useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import carPic from "../../../assets/images/xuv-3xo-exterior-right-front-three-quarter-34.webp"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomAlert from "../../components/CustomAlert";
import Petrol from "../../../assets/icons/fuelTypes/petrol.png";
import Diesel from "../../../assets/icons/fuelTypes/diesel.png";
import CNG from "../../../assets/icons/fuelTypes/cng.png";
import Electric from "../../../assets/icons/fuelTypes/ev.png";
import globalStyles from "../../styles/globalStyles";
import { color } from "../../styles/theme";

export default function CarModels() {
  const route = useRoute();
  const { brand, models } = route.params;

  const [selectedModel, setSelectedModel] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);

  const navigation = useNavigation();

  const handleModelPress = (model) => {
    setSelectedModel(model);
    setAlertVisible(true);
  };


  const renderModel = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleModelPress(item)}>
      <Image source={carPic} style={styles.image} />
      <Text style={{ ...globalStyles.f16SemiBold, color: color.primary }}>{item.name}</Text>
    </TouchableOpacity>
  );

  const fuelOptions = [
    { name: 'Petrol', icon: Petrol },
    { name: 'Diesel', icon: Diesel },
    { name: 'CNG', icon: CNG },
    { name: 'Electric', icon: Electric }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={models}
        renderItem={renderModel}
        keyExtractor={(item) => item.name}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <CustomAlert
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
        title={selectedModel ? selectedModel.name : ''}
        message="Select Fuel Type"
        status="info"
        showButton={false}
      >
        {selectedModel && (
          <Image source={carPic} style={styles.alertCarImage} />
        )}

        <View style={styles.fuelRow}>
          {fuelOptions.map((fuel) => (
            <TouchableOpacity
              key={fuel.name}
              style={styles.fuelIcon}
              onPress={() => {
                // You can navigate or store fuel selection here
                console.log(`Selected ${fuel.name} for ${selectedModel?.name}`);
                navigation.navigate("MyCarDetails", {
                  model: selectedModel,
                  fuelType: fuel.name
                });
                setAlertVisible(false);
              }}
            >
              <Image source={fuel.icon} style={styles.fuelImage} />
              <Text style={globalStyles.f10Bold}>{fuel.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </CustomAlert>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    flex: 1,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 12,
  },
  card: {
    alignItems: "center",
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 4,
  },
  image: {
    width: 90,
    height: 60,
    resizeMode: "contain",
    marginBottom: 4,
  },
  fuelRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 2,
  },
  fuelIcon: {
    alignItems: 'center',
    marginHorizontal: 2,
  },
  fuelImage: {
    width: 60,
    height: 50,
    resizeMode: "contain",
    marginBottom: 4,
  },
  fuelText: {
    fontSize: 12,
    marginVertical: 8,
  },
  alertCarImage: {
    width: 320,
    height: 90,
    resizeMode: "contain",
    marginBottom: 12,
  },
});
