import React from 'react';
import { View, Text } from 'react-native';
import CustomText from '../../components/CustomText';

export default function RegisterScreen() {
  return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomText>Welcome to RegisterScreen!</CustomText>
    </View>
  );
}