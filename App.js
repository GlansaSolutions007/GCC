import "react-native-gesture-handler";
import { View } from "react-native";
import React, { useCallback } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import RootNavigator from "./src/navigation/RootNavigator";
import { AuthProvider } from "./src/contexts/AuthContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, TextInput } from 'react-native';

if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;

if (TextInput.defaultProps == null) TextInput.defaultProps = {};
TextInput.defaultProps.allowFontScaling = false;

// import { Text } from "react-native";
// if (Text.defaultProps == null) Text.defaultProps = {};
// Text.defaultProps.allowFontScaling = false;
// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
    <View  style={{ flex: 1}} onLayout={onLayoutRootView}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </View>
    </SafeAreaProvider>
  );
}
