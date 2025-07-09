import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBox = () => {
  return (
    <View style={styles.searchBox}>
      <Ionicons
        name="search-outline"
        size={18}
        color="#777"
        style={{ marginRight: 8 }}
      />
      <TextInput
        placeholder="Search for car manufacturer"
        style={{ flex: 1 }}
        placeholderTextColor="#777"
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 50,
    margin: 10,
  },
});
