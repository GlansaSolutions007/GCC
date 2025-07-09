import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../../styles/globalStyles";
import CTAbannerhome from "../../../assets/images/CTAbannerhome.png";
import exteriorservice from "../../../assets/images/exteriorservice.png";
import bluecar from "../../../assets/images/bluecar.png";
export default function HomeScreen() {
  return (
    <ScrollView
      style={{ backgroundColor: "#fff" }}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <View style={globalStyles.banner}>
        <View style={{ display: "flex" }}>
          <Text style={globalStyles.bannerTitle}>
            MY <Text style={globalStyles.bold}>CAR</Text> BUDDY
          </Text>
          <Text style={globalStyles.bannerSubtitle}>
            A Professional Car Care Services in Hyderabad
          </Text>
        </View>
        <Image
          source={bluecar}
          style={globalStyles.carImage}
          resizeMode="contain"
        />
      </View>

      <Text style={globalStyles.sectionTitle}>Browse Services</Text>
      <View style={globalStyles.services}>
        <TouchableOpacity style={globalStyles.card}>
          <Image source={exteriorservice} style={globalStyles.cardImage} />
          <Text style={globalStyles.cardText}>Interior Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.card}>
          <Image source={exteriorservice} style={globalStyles.cardImage} />
          <Text style={globalStyles.cardText}>Exterior Service</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={CTAbannerhome}
        style={globalStyles.ctaContainer}
        resizeMode="cover"
      >
        <View >
          <View style={globalStyles.ctaTextContainer}>
            <Text style={globalStyles.ctaTitle}>
              Give your car’s intro to your care buddy
            </Text>
            <Text style={globalStyles.ctaSubTitle}>
              We’ll remember it, pamper it, and keep it shining.
            </Text>
          </View>
          {/* <Image source={CTAbannerhome} style={globalStyles.ctaImage} /> */}
        </View>
      </ImageBackground>

      {/* <TouchableOpacity style={globalStyles.ctaButton}>
          <Text style={globalStyles.ctaButtonText}>Add My Car</Text>
        </TouchableOpacity> */}
    </ScrollView>
  );
}
