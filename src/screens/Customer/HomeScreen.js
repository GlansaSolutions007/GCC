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
import interiorservice from "../../../assets/images/interiorservice.png"
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
            globalStyles.mb40,
            globalStyles.f36Bold,
            globalStyles.textWhite,
          ]}
        >
          BUDDY
        </Text>

        <View style={styles.bannerAbsolute}>
          <Image
            source={bluecar}
            style={styles.carImagePositioned}
            resizeMode="contain"
          />
          <Text style={[styles.bannerSubtitlePositioned,globalStyles.f20Regular]}>
            A Professional Car Care Services in Hyderabad
          </Text>
        </View>
      </View>
      <View style={globalStyles.container}>
        <Text
          style={[globalStyles.mt4, globalStyles.mb2, globalStyles.f16Bold]}
        >
          Providing Services
        </Text>
        <View style={[globalStyles.flexrow, globalStyles.justifysb]}>
          <TouchableOpacity style={styles.card}>
            <Image source={interiorservice} style={styles.cardImage} />
            <Text style={[styles.cardText, globalStyles.textWhite]}>Interior Service</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image source={exteriorservice} style={styles.cardImage} />
            <Text style={[styles.cardText, globalStyles.textWhite]}>Exterior Service</Text>
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
            <View>
              <Text
                style={[
                  styles.ctaTitle,
                  globalStyles.f20Bold,
                  globalStyles.w60,
                  globalStyles.textWhite,
                  globalStyles.f18Bold
                ]}
              >
                Give your car’s intro to your care buddy
              </Text>
              <Text style={[globalStyles.w50, globalStyles.textWhite, globalStyles.f12Regular]}>
                We’ll remember it, pamper it, and keep it shining.
              </Text>
            </View>

         
          </View>
             <View style={styles.ctaButtonWrapper}>
              <TouchableOpacity
                style={[styles.ctaButton, globalStyles.bgwhite]}
              >
                <Text style={globalStyles.f16Bold}>Add My Car</Text>
              </TouchableOpacity>
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

  buttonText: {
    color: color.textDark,
    fontSize: 16,
  },
  banner: {
    backgroundColor: color.primary,
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
    backgroundColor: color.primary,
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
    position: "relative", 
    minHeight: 160,
  },

  ctaTitle: {
    width: "60%",
    marginBottom: 5,
    lineHeight: 25,
  },
  ctaButtonWrapper: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },

  ctaButton: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: "center",
  },
});
