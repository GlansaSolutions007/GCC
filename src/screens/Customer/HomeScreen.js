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
      style={{ backgroundColor: color.textWhite }}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <View style={[styles.banner, globalStyles.mb35]}>
        <Text
          style={[
            globalStyles.xLargeBold,
            globalStyles.f36Bold,
            globalStyles.textWhite,
          ]}
        >
          MY CAR
        </Text>
        <Text
          style={[
            globalStyles.xLargeBold,
            globalStyles.mb90,
            globalStyles.f36Bold,
            globalStyles.textWhite,
          ]}
        >
          BUDDY
        </Text>

        {/* Absolutely positioned container for car and subtitle */}
        <View style={styles.bannerAbsolute}>
          <Image
            source={bluecar}
            style={styles.carImagePositioned}
            resizeMode="contain"
          />
          <Text style={styles.bannerSubtitlePositioned}>
            A Professional Car Care Services in Hyderabad
          </Text>
        </View>
      </View>
      <View style={globalStyles.container}>
        <Text
          style={[globalStyles.mt4, globalStyles.mb2, globalStyles.f18Bold]}
        >
          Providing Services
        </Text>
        <View style={[globalStyles.flexrow, globalStyles.justifysb]}>
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
          style={[
            styles.ctaContainer,
            globalStyles.radius,
            globalStyles.p5,
            globalStyles.mt5,
          ]}
          resizeMode="cover"
        >
          <View>
            <View style={styles.ctaTextContainer}>
              <Text
                style={[
                  styles.ctaTitle,
                  globalStyles.w60,
                  globalStyles.textWhite,
                ]}
              >
                Give your car’s intro to your care buddy
              </Text>
              <Text style={[globalStyles.w50, globalStyles.textWhite]}>
                We’ll remember it, pamper it, and keep it shining.
              </Text>
            </View>

            <View style={styles.ctaButtonWrapper}>
              <TouchableOpacity
                style={[styles.ctaButton, globalStyles.bgwhite]}
              >
                <Text>Add My Car</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  bannerAbsolute: {
    position: "relative",
    height: 100,
  },

  carImagePositioned: {
    position: "absolute",
    bottom: -50,
    left: 0,
    width: "55%",
    height: 130,
  },

  bannerSubtitlePositioned: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: "45%",
    textAlign: "right",
    color: color.white,
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
  ctaButtonWrapper: {
    position: "absolute",
    bottom: -20,
    right: 40,
  },

  ctaButton: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
});
