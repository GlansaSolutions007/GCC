import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from '../../styles/theme';
import globalStyles from '../../styles/globalStyles';
import SearchBox from '../../components/SearchBox';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import interior from '../../../assets/images/interiorservice.png'
import { StatusBar } from 'react-native';
import Garage from '../../../assets/icons/garageIcon.png'
import CustomText from '../../components/CustomText';

const popularServices = [
  { id: '1', title: 'Dashboard & Co...', image: require('../../../assets/images/exteriorservice.png') },
  { id: '2', title: 'Roof / Headliner...', image: require('../../../assets/images/exteriorservice.png') },
  { id: '3', title: 'Door Pad & Panel...', image: require('../../../assets/images/exteriorservice.png') },
  { id: '4', title: 'Seat Vacuuming...', image: require('../../../assets/images/exteriorservice.png') },
  { id: '5', title: 'Dashboard & Co...', image: require('../../../assets/images/exteriorservice.png') },
  { id: '6', title: 'Roof / Headliner...', image: require('../../../assets/images/exteriorservice.png') },
  { id: '7', title: 'Door Pad & Panel...', image: require('../../../assets/images/exteriorservice.png') },
  { id: '8', title: 'Seat Vacuuming...', image: require('../../../assets/images/exteriorservice.png') },
];

const allServices = [
  { title: 'Steering & Gear Knob Sanitization', image: require('../../../assets/images/exteriorservice.png') },
  { title: 'AC Vent Sanitization', image: require('../../../assets/images/exteriorservice.png') },
  { title: 'Leather/ Fabric Seat Polishing', image: require('../../../assets/images/exteriorservice.png') },
  { title: 'Mat Washing & Floor Vacuuming', image: require('../../../assets/images/exteriorservice.png') },
  { title: 'Window Glass Cleaning', image: require('../../../assets/images/exteriorservice.png') },
  { title: 'Interior Perfume Spray', image: require('../../../assets/images/exteriorservice.png') },
];

const InteriorService = () => {
  const navigation = useNavigation();
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={interior}
        style={styles.imageBackground}
      >
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <LinearGradient
          colors={['rgba(19, 109, 110, .6)', 'rgba(19, 109, 110, .10)', 'rgba(19, 109, 110, .6)']}
          locations={[0.13, 0.52, 0.91]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.overlay}
        >
          {/* Top Row */}
          <View style={styles.topRow}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <View style={styles.iconWrapper}>
              <Image source={Garage} style={styles.garageIcon} />
              <View style={styles.badge}>
                <CustomText style={styles.badgeText}>2</CustomText>
              </View>
            </View>
          </View>

          {/* Search Box */}
          <View style={styles.searchContainer}>
            <SearchBox />
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <CustomText style={[globalStyles.f16Bold, globalStyles.primary]}>Popular Services</CustomText>
          <Ionicons name="arrow-forward-circle" size={20} color={color.primary} style={styles.scrollHintIcon} />
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={popularServices}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({ item }) => (
            <View style={styles.popularItem}>
              <Image source={item.image} style={styles.popularImage} />
              <CustomText
                style={[globalStyles.f10Bold, styles.popularText]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.title}
              </CustomText>
            </View>
          )}
        />
      </View>

      <View style={styles.bannerContainer}>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={[interior, interior, interior]}
          keyExtractor={(_, index) => index.toString()}
          onScroll={(event) => {
            const index = Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
            setActiveBannerIndex(index);
          }}
          renderItem={({ item }) => (
            <Image source={item} style={styles.bannerImage} resizeMode="cover" />
          )}
        />
        <View style={styles.dotContainer}>
          {[0, 1, 2].map((_, i) => (
            <View key={i} style={i === activeBannerIndex ? styles.activeDot : styles.inactiveDot} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <CustomText style={[globalStyles.mb3, globalStyles.f16Bold, globalStyles.primary]}>All Services</CustomText>
        <View style={styles.grid}>
          {allServices.map((service, index) => (
            <View style={styles.gridItem} key={index}>
              <ImageBackground
                source={service.image}
                style={[styles.gridImage, globalStyles.radius]}
                imageStyle={{ borderRadius: 10 }}
                resizeMode="cover"
              >
                <LinearGradient
                  colors={['transparent', 'rgba(19, 109, 110, .6)']}
                  style={styles.gradientOverlay}
                >
                  <CustomText style={[globalStyles.p2, globalStyles.textWhite, globalStyles.f12Bold]}>
                    {service.title}
                  </CustomText>
                </LinearGradient>
              </ImageBackground>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <CustomText style={[globalStyles.f32Bold, globalStyles.primary, { marginBottom: 4 }]}>
          Choose a <CustomText style={{ color: '#000' }}>Perfect Package</CustomText> for
          <CustomText style={globalStyles.primary}> Your Car</CustomText>
        </CustomText>
        <CustomText style={[globalStyles.f12, { marginBottom: 16, color: '#555' }]}>
          Tailored combos to keep your car shining inside & out.
        </CustomText>

        {/* Package 1 */}
        <View style={styles.rowCard}>
          <ImageBackground
            source={require('../../../assets/images/exteriorservice.png')} // Update with actual image
            style={styles.sideImage}
            imageStyle={{ borderRadius: 10 }}
          >
            <View style={styles.discountBadge}>
              <CustomText style={styles.discountText}>10%</CustomText>
            </View>
          </ImageBackground>

          <View style={styles.cardRight}>
            <CustomText style={[globalStyles.f16Bold, { color: color.primary }]}>
              Essential Interior Care
            </CustomText>
            <View>
              <CustomText style={styles.cardSubheading}>Services Included:</CustomText>
              <CustomText style={styles.serviceText}>• Dashboard & Console Wipe</CustomText>
              <CustomText style={styles.serviceText}>• Seat Surface Vacuuming</CustomText>
              <CustomText style={styles.serviceText}>• Door Panel Dusting</CustomText>
            </View>
            <View style={styles.priceRow}>
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <CustomText style={styles.striked}>₹800</CustomText>
                <CustomText style={[globalStyles.f14Bold, { marginLeft: 6 }]}>₹600</CustomText>
              </View>

              <TouchableOpacity style={styles.addButton}>
                <CustomText style={styles.addButtonText}>Add Service</CustomText>
              </TouchableOpacity>
            </View>

          </View>
        </View>

        {/* Package 2 */}
        <View style={styles.rowCard}>
          <ImageBackground
            source={require('../../../assets/images/exteriorservice.png')} // Update with actual image
            style={styles.sideImage}
            imageStyle={{ borderRadius: 10 }}
          >
            <View style={styles.discountBadge}>
              <CustomText style={styles.discountText}>10%</CustomText>
            </View>
          </ImageBackground>

          <View style={styles.cardRight}>
            <CustomText style={[globalStyles.f16Bold, { color: color.primary, marginBottom: 6 }]}>
              Deluxe Interior Detail
            </CustomText>
            <View>
              <CustomText style={styles.cardSubheading}>Services Included:</CustomText>
              <CustomText style={styles.serviceText}>• Dashboard & Console Wipe</CustomText>
              <CustomText style={styles.serviceText}>• Seat Surface Vacuuming</CustomText>
              <CustomText style={styles.serviceText}>• Door Panel Dusting</CustomText>
            </View>
            <View style={styles.priceRow}>
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <CustomText style={styles.striked}>₹800</CustomText>
                <CustomText style={[globalStyles.f14Bold, { marginLeft: 6 }]}>₹600</CustomText>
              </View>

              <TouchableOpacity style={styles.addButton}>
                <CustomText style={styles.addButtonText}>Add Service</CustomText>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ctaContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    minHeight: 90,
  },
  imageBackground: {
    height: 260,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  iconWrapper: {
    position: 'relative',
  },
  backIcon: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.79)',
  },
  garageIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: 'yellow',
    borderRadius: 8,
    paddingHorizontal: 4,
    minWidth: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeTextWrapper: {
    alignItems: 'center',
  },
  badgeText: {
    color: '#000',
    fontSize: 10,
    fontWeight: 'bold',
  },
  searchContainer: {
    marginTop: 20,
  },
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  searchBox: {
    backgroundColor: color.white,
    borderRadius: 10,
    padding: 12,
    paddingLeft: 40,
    color: color.black
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  scrollHintIcon: {
    marginLeft: 10,
  },
  section: {
    padding: 20,
    borderTopEndRadius: 30
  },
  flatListContainer: {
    paddingHorizontal: 10,
  },
  popularItem: {
    width: 80,
    alignItems: 'center',
    marginRight: 26,
  },
  popularImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    resizeMode: 'cover',
    marginBottom: 6,
  },
  popularText: {
    marginTop: 5,
    width: 70,
    textAlign: 'center',
  },
  bannerContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bannerImage: {
    width: 360,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gridImage: {
    width: '100%',
    height: 100,
    justifyContent: 'flex-end',
  },
  gradientOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 4,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: color.secondary,
    marginHorizontal: 4,
  },
  inactiveDot: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  rowCard: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  sideImage: {
    width: 160,
    height: 210,
    marginRight: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },

  discountBadge: {
    backgroundColor: '#FFC107',
    borderRadius: 50,
    paddingHorizontal: 6,
    paddingVertical: 2,
    margin: 6,
  },

  discountText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },

  cardRight: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'space-around'
  },

  cardSubheading: {
    ...globalStyles.f14Bold,
    ...globalStyles.neutral500,
    marginBottom: 2,
  },

  serviceText: {
    ...globalStyles.f10Bold,
    color: '#333',
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  striked: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontSize: 14,
  },

  addButton: {
    backgroundColor: color.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonText: {
    color: '#fff',
    ...globalStyles.f10Bold
  },
});

export default InteriorService;
