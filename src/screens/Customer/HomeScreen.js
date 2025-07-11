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
      style={ { backgroundColor: color.white  }}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <View style={[styles.banner, globalStyles.mb35]}>
        <Text
          style={[
            globalStyles.xLargeBold,
            globalStyles.f36Bold,
            globalStyles.white,
          ]}
        >
           MY CAR
        </Text>
        <Text
          style={[
            globalStyles.xLargeBold,
            globalStyles.mb90,
            globalStyles.f36Bold,
                        globalStyles.white,
          ]}
        >
           BUDDY
        </Text>
        <View style={[globalStyles.flexrow, styles.bannercar]}>
          <Image
            source={bluecar}
            style={[styles.carImage, globalStyles.alineSelfend]}
            resizeMode="contain"
          />
          <Text style={[styles.bannerSubtitle, globalStyles.f18Regular]}>
            A Professional Car Care Services in Hyderabad
          </Text>
        </View>
      </View>
<View style={globalStyles.container}>

      <Text style={[globalStyles.mt4,globalStyles.mb2,globalStyles.f18Bold]}>Providing Services</Text>
      <View style={[globalStyles.flexrow,globalStyles.justifysb]}>
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
        style={[styles.ctaContainer, globalStyles.radius, globalStyles.p5, globalStyles.mt5]}
        resizeMode="cover"
      >
        <View>
          <View style={styles.ctaTextContainer}>
            <Text style={[styles.ctaTitle,globalStyles.w60]}>
              Give your car’s intro to your care buddy
            </Text>
            <Text style={[globalStyles.w50]}>
              We’ll remember it, pamper it, and keep it shining.
            </Text>
          </View>
        </View>
      </ImageBackground>

      <TouchableOpacity style={styles.ctaButton}>
        <Text >Add My Car</Text>
      </TouchableOpacity>
      </View>

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  bannercar: {
    marginBottom: -70,
  },
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
  },
  carImage: {
    width: "60%",
    // height: 130,
  },

  bannerSubtitle: {
    width: "40%",
    color: color.white,
  },
 
 
  card: {
    backgroundColor: color.lightGreen || "#E0F7F4",
    borderRadius: 10,
    width: "47%",
    height: 150,
    overflow: "hidden",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: 110,

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
    alignItems: "center",
  },
  ctaTextContainer: {
    flex: 1,
  },
  ctaTitle: {
    fontSize: 24,
    width: "60%",
    marginBottom: 5,
    lineHeight: 25,
  },


  ctaButton: {
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 30,
    alignItems: "center",
  },

});
