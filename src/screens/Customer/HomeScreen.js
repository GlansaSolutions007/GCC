import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../../styles/globalStyles";
import CTAbannerhome from "../../../assets/images/CTAbannerhome.png";
import exteriorservice from "../../../assets/images/exteriorservice.png";
import bluecar from "../../../assets/images/bluecar.png";
import { color } from "../../styles/theme";
export default function HomeScreen() {
  return (
    <ScrollView
      style={{ backgroundColor: "#fff" }}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <View style={styles.banner}>
        <View style={{ display: "flex" }}>
          <Text style={globalStyles.xLargeBold}>
            MY CAR BUDDY
          </Text>
          <Text style={styles.bannerSubtitle}>
            A Professional Car Care Services in Hyderabad
          </Text>
        </View>
        <Image
          source={bluecar}
          style={styles.carImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.sectionTitle}>Browse Services</Text>
      <View style={styles.services}>
        <TouchableOpacity style={styles.card}>
          <Image source={exteriorservice} style={styles.cardImage} />
          <Text style={styles.cardText}>Interior Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={exteriorservice} style={styles.cardImage} />
          <Text style={styles.cardText}>Exterior Service</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={CTAbannerhome}
        style={styles.ctaContainer}
        resizeMode="cover"
      >
        <View >
          <View style={styles.ctaTextContainer}>
            <Text style={styles.ctaTitle}>
              Give your car’s intro to your care buddy
            </Text>
            <Text style={styles.ctaSubTitle}>
              We’ll remember it, pamper it, and keep it shining.
            </Text>
          </View>
        </View>
      </ImageBackground>

      <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Add My Car</Text>
        </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({

   title: {
    fontSize: 22,
    color: color.white,
  },
  button: {
    backgroundColor: color.white,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: color.textDark,
    fontSize: 16,
  },
  banner: {
    backgroundColor: color.primary || "#017F77",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
  },
  carImage: {
    width: "100%",
    height: 130,
  },


  bannerSubtitle: {
    fontSize: 14,
    color: color.white,
    marginTop: 5,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    marginVertical: 20,
    marginLeft: 20,
    color: color.textDark,
  },
  services: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: color.lightGreen || "#E0F7F4",
    borderRadius: 10,
    width: "42%",
    overflow: "hidden",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: 100,
  },
  cardText: {
    fontSize: 14,
    padding: 10,
    color: color.textDark,
    textAlign: "center",
  },
  ctaContainer: {
    flexDirection: "row",
    borderRadius: 10,
    margin: 20,
    padding: 15,
    alignItems: "center",
  },
  ctaTextContainer: {
    flex: 1,
  },
  ctaTitle: {
    fontSize: 24,
    width: "60%",
    color: color.textDark,
    marginBottom: 5,
    lineHeight: 25,
  },
  ctaSubTitle: {
    fontSize: 12,
    color: color.textLight || "#555",
  },

  ctaButton: {
    backgroundColor: color.black,
    padding: 14,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  ctaButtonText: {
    color: color.white,
    fontSize: 14,
  },
});
