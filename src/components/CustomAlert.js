// src/components/CustomAlert.js
import React, { useMemo } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";

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
        return globalStyles.alertSuccess;
      case "error":
        return globalStyles.alertError;
      default:
        return globalStyles.alertInfo;
    }
  }, [status]);

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={globalStyles.backdrop}>
        <View style={[globalStyles.alertBox, { borderColor: alertColor }]}>
          <Text style={[globalStyles.alertTitle, { color: alertColor }]}>{title}</Text>
          <Text style={globalStyles.alertMessage}>{message}</Text>

          <TouchableOpacity
            style={[globalStyles.alertButton, { backgroundColor: alertColor }]}
            onPress={onClose}
          >
            {/* <Text style={globalStyles.alertButtonText}>OK</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}