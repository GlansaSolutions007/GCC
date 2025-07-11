import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { fontFamilies } from '../styles/fonts'; 

const CustomText = ({ children, style, numberOfLines, ...props }) => {
  return (
    <Text
      style={[styles.default, style]}
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: fontFamilies.regular,
    fontSize: 16,
    color: '#000',
  },
});

export default CustomText;
