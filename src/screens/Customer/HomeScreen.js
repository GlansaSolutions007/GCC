import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../../styles/globalStyles';

export default function HomeScreen() {
  return (
     <View style={[globalStyles.container, globalStyles.center]}>
      <Text style={globalStyles.title}>Welcome</Text>
      <Text style={globalStyles.text}>Login to continue</Text>
    </View>
  );
}