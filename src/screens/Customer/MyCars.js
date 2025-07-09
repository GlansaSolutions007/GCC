import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../../styles/globalStyles';

export default function MyCars() {
  return (
     <View style={[globalStyles.container, globalStyles.center]}>
      <Text style={globalStyles.title}>My Cars</Text>
      <Text style={globalStyles.text}>List of cars will be displayed here</Text>
    </View>
  );
}