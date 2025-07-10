import React, { use, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import fonts from "../../styles/fonts";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../../styles/globalStyles";
import CustomAlert from "../../components/CustomAlert";
import { demoUsers } from "../../constants/demoUsers";
import { useAuth } from "../../contexts/AuthContext";
import { color } from "../../styles/theme";

export default function LoginScreen() {
  const { login } = useAuth();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);
  const [status, setStatus] = React.useState("info");
  const [message, setMessage] = React.useState("");
  const [title, setTitle] = React.useState("Login Info");

  useEffect(() => {
    const showSub = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const hideSub = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => setKeyboardVisible(false)
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const handleLogin = () => {
    const matchedUser = demoUsers.find(
      (user) => user.email.toLowerCase() === inputValue.trim().toLowerCase()
    );

    if (matchedUser) {
      login(matchedUser);
    } else {
      setMessage("Invalid email or phone number. Please try again.");
      setTitle("Login Failed");
      setStatus("error");
      setShowAlert(true);
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/loginbg.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View />
      <View style={globalStyles.container}>
        {/* Show logo only when keyboard is NOT visible */}
        {!keyboardVisible && (
          <View>
            <Image
              source={require("../../../assets/images/applogo.png")}
              style={styles.logo}
            />
          </View>
        )}

        <TextInput
          placeholder="Email -or- Phone Number"
          // placeholderTextColor={colors.textLight}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          style={styles.textInput}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Hide these when keyboard is visible */}
        {!keyboardVisible && (
          <>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton}>
              <Ionicons name="logo-google" size={20} color="#000" />
              <Text style={styles.googleText}>Sign in with Google</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Components */}
      <CustomAlert
        visible={showAlert}
        status={status}
        title={title}
        message={message}
        onClose={() => setShowAlert(false)}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
 
  logo: {
    width: "50%",
    height: "30%",
    marginBottom: 10,
  },
  googleButton: {
    marginTop: 40,
    flexDirection: "row",
    backgroundColor: color.white,
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 240,
    gap: 10,
  },
  googleText: {
    // fontFamily: fonts.medium,
    fontSize: 14,
    color: "#000",
  },
   title: {
    // fontFamily: fonts.bold,
    fontSize: 22,
    color: color.white,
  },
  titleBlack: {
    // fontFamily: fonts.bold,
    fontSize: 22,
    color: color.black,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: color.white,
    paddingVertical: 10,
    color: color.white,
    // fontFamily: fonts.regular,
    fontSize: 16,
    marginBottom: 20,
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
    // fontFamily: fonts.medium,
    fontSize: 16,
  },
  forgotText: {
    alignSelf: "flex-end",
    marginTop: 8,
    fontSize: 12,
    color: color.white,
    // fontFamily: fonts.regular,
  },
  // Home Screen Styles
  header: {
    backgroundColor: color.primary || "#017F77",
    padding: 20,
  },
  greeting: {
    color: color.white,
    fontSize: 16,
    // fontFamily: fonts.medium,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  location: {
    color: color.white,
    fontSize: 14,
    marginRight: 5,
    // fontFamily: fonts.regular,
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
  bannerTitle: {
    fontSize: 22,
    color: color.white,
    // fontFamily: fonts.semiBold,
    marginTop: 10,
  },

  bannerSubtitle: {
    fontSize: 14,
    color: color.white,
    // fontFamily: fonts.regular,
    marginTop: 5,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    // fontFamily: fonts.medium,
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
    // fontFamily: fonts.medium,
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
    // fontFamily: fonts.medium,
    color: color.textDark,
    marginBottom: 5,
    lineHeight: 25,
  },
  ctaSubTitle: {
    fontSize: 12,
    // fontFamily: fonts.regular,
    color: color.textLight || "#555",
  },
  ctaImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
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
