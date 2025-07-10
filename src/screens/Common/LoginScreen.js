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
      source={require("../../../assets/images/loginbg2.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={globalStyles.container}>
        {/* Show logo only when keyboard is NOT visible */}
        {!keyboardVisible && (
          <View style={globalStyles.center}>
            <Image
              source={require("../../../assets/images/applogo.png")}
              style={styles.logo}
            />
          </View>
        )}

        <TextInput
          placeholder="Email -or- Phone Number"
          placeholderTextColor={color.textInputDark} // use correctly here
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          style={[globalStyles.textInput]} // array syntax for styles
        />

        <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
          <Text style={globalStyles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Hide these when keyboard is visible */}
        {!keyboardVisible && (
          <>
            <TouchableOpacity>
              <Text style={globalStyles.forgotText}>Forgot Password?</Text>
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
    // backgroundColor: globalStyles.primary.color,
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // optional dark overlay
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
});
