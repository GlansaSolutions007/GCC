// src/components/CustomAlert.js
import React, { useMemo } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import globalStyles from "../styles/globalStyles";

export default function CustomAlert({
  visible,
  status = "info", // 'info', 'success', 'error'
  onClose,
  title,
  message,
}) {
  const alertColor = useMemo(() => {
    switch (status) {
      case "success":
        return colors.alertSuccess;
      case "error":
        return colors.alertError;
      default:
        return colors.alertInfo;
    }
  }, [status]);

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={[styles.alertBox, { borderColor: alertColor }]}>
          <Text style={[styles.title, { color: alertColor }]}>{title}</Text>
          <Text style={styles.message}>{message}</Text>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: alertColor }]}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  alertBox: {
    width: "80%",
    backgroundColor: colors.white,
    padding: 24,
    borderRadius: 12,
    alignItems: "center",
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.primary,
    marginBottom: 10,
  },
  message: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: colors.text_dark,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 14,
  },
});
