// src/components/CustomAlert.js
import React, { useMemo } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { color } from "../styles/theme";
import { Ionicons } from '@expo/vector-icons';

export default function CustomAlert({
  visible,
  status = "info", // 'info', 'success', 'error'
  onClose,
  title,
  message,
  buttonText = "OK",
  children,
  showButton = true,
}) {
  const alertColor = useMemo(() => {
    switch (status) {
      case "success":
        return color.alertSuccess;
      case "error":
        return color.alertError;
      default:
        return color.alertInfo;
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
        <View style={styles.alertBox}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <Ionicons name="close" size={20} color="#ffffff" />
          </TouchableOpacity>
          <Text style={[styles.alertTitle, { color: alertColor }]}>
            {title}
          </Text>
          {message ? (
            <Text style={styles.alertMessage}>{message}</Text>
          ) : null}
          {children}
          {showButton && (
            <TouchableOpacity
              style={[styles.alertButton, { backgroundColor: alertColor }]}
              onPress={onClose}
            >
              <Text style={styles.alertButtonText}>{buttonText}</Text>
            </TouchableOpacity>
          )}
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
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
  },
  alertMessage: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  alertButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  alertButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 4,
    backgroundColor: color.secondary,
    borderRadius: 20,
  },
});
