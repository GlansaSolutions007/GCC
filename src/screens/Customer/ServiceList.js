import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../../styles/globalStyles';

export default function ServiceList() {
  return (
     <View style={[globalStyles.container, globalStyles.center]}>
      <Text style={globalStyles.title}>Services</Text>
      <Text style={globalStyles.text}>List of services will be displayed here</Text>
    </View>
  );
}