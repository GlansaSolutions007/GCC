import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import globalStyles from '../../styles/globalStyles';
import CTAbannerhome from '../../../assets/images/CTAbannerhome.png'; 
import exteriorservice from '../../../assets/images/exteriorservice.png';
import bluecar from '../../../assets/images/bluecar.png';
export default function HomeScreen() {
  return (
  <ScrollView style={{ backgroundColor: '#fff' }} contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={globalStyles.header}>
          <Text style={globalStyles.greeting}>Hello User</Text>
          <View style={globalStyles.locationRow}>
            <Text style={globalStyles.location}>Hyderabad, Telangana</Text>
            <Ionicons name="chevron-down" size={16} color="#fff" />
          </View>
        </View>
  
        <View style={globalStyles.banner}>
          <Image source={bluecar} style={globalStyles.carImage} resizeMode="contain" />
          <Text style={globalStyles.bannerTitle}>
            MY <Text>CAR</Text> BUDDY
          </Text>
          <Text style={globalStyles.bannerSubtitle}>
            A Professional Car Care Services in Hyderabad
          </Text>
        </View>
  
        <Text style={globalStyles.sectionTitle}>Browse Services</Text>
        <View style={globalStyles.services}>
          <TouchableOpacity style={globalStyles.card}>
            <Image source={exteriorservice} style={globalStyles.cardImage} />
            <Text style={globalStyles.cardText}>Interior Service</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.card}>
            <Image source={exteriorservice} style={globalStyles.cardImage} />
            <Text style={globalStyles.cardText}>Exterior Service</Text>
          </TouchableOpacity>
        </View>
  
        <View style={globalStyles.ctaContainer}>
          <View style={globalStyles.ctaTextContainer}>
            <Text style={globalStyles.ctaTitle}>Give your car’s intro to your care buddy</Text>
            <Text style={globalStyles.ctaSubTitle}>We’ll remember it, pamper it, and keep it shining.</Text>
          </View>
          <Image source={CTAbannerhome} style={globalStyles.ctaImage} />
        </View>
  
        <TouchableOpacity style={globalStyles.ctaButton}>
          <Text style={globalStyles.ctaButtonText}>Add My Car</Text>
        </TouchableOpacity>
      </ScrollView>
  );
}