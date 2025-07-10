import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import CustomAlert from '../../components/CustomAlert';

export default function ServiceList() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <View style={[globalStyles.container, globalStyles.center]}>
      <Text style={globalStyles.titleBlack}>Services</Text>
      <Text style={globalStyles.text}>List of services will be displayed here</Text>
      <TouchableOpacity
        onPress={() => setShowAlert(true)}
        style={{ backgroundColor: "red", padding: 10, marginBottom: 20 }}
      >
        <Text style={{ color: "#fff" }}>Show Alert</Text>
      </TouchableOpacity>
      <CustomAlert
        visible={showAlert}
        status="info"
        title="This is a test alert"
        message="Testing modal visibility"
        buttonText="OK"
        onClose={() => setShowAlert(false)}
      />
    </View>
  );
}