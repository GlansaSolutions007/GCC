import React, { useState } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../../styles/globalStyles';
import sampleCar from '../../../assets/images/xuv-3xo-exterior-right-front-three-quarter-34.webp';
import carIconPlus from '../../../assets/images/My Car.png'; // Your custom icon
import SearchBox from '../../components/SearchBox';

export const MyCarsList = () => {
    const navigation = useNavigation();

    const [cars, setCars] = useState([
        {
            id: '1',
            model: 'Car Modal No 1',
            fuel: 'Petrol',
            manufacturer: 'Honda',
            image: sampleCar,
        },
        {
            id: '2',
            model: 'Car Modal No 2',
            fuel: 'Petrol',
            manufacturer: 'Honda',
            image: sampleCar,
        },
        {
            id: '3',
            model: 'Car Modal No 3',
            fuel: 'Petrol',
            manufacturer: 'Honda',
            image: sampleCar,
        },
        {
            id: '4',
            model: 'Car Modal No 4',
            fuel: 'Petrol',
            manufacturer: 'Honda',
            image: sampleCar,
        },
        {
            id: '5',
            model: 'Car Modal No 5',
            fuel: 'Petrol',
            manufacturer: 'Honda',
            image: sampleCar,
        },
    ]);

    const renderCar = ({ item }) => (
        <View style={styles.carCard}>
            <Image source={item.image} style={styles.carImage} />
            <View style={styles.carInfo}>
                <Text style={styles.label}>Modal Name</Text>
                <Text style={styles.value}>{item.model}</Text>

                <Text style={styles.label}>Fuel Type</Text>
                <Text style={styles.value}>{item.fuel}</Text>

                <Text style={styles.label}>Manufacturer</Text>
                <Text style={styles.value}>{item.manufacturer}</Text>

                <TouchableOpacity style={styles.detailsButton}>
                    <Text style={{ color: '#fff' }}>View Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={[globalStyles.container, { backgroundColor: '#fff' }]}>
            {cars.length === 0 ? (
                <View style={styles.centered}>
                    <Text style={styles.emptyText}>Please add your car</Text>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => navigation.navigate('SelectCarModel')}
                    >
                        <Text style={styles.addButtonText}>Add Your Car</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <>
                    {/* Header */}

                    <View style={styles.header}>
                        <View style={{ flex: 1 }}>
                            <SearchBox />
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SelectCarModel')}
                            style={styles.addIconWrapper}
                        >
                            <Image source={carIconPlus} style={styles.plusIcon} />
                        </TouchableOpacity>
                    </View>


                    {/* Car List */}
                    <FlatList
                        data={cars}
                        keyExtractor={(item) => item.id}
                        renderItem={renderCar}
                        contentContainerStyle={{ paddingBottom: 40 }}
                        showsVerticalScrollIndicator={false}
                    />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,

    },
    addIconWrapper: {
        marginLeft: 10,
        padding: 6,
        backgroundColor: '#0CA9A3',
        borderRadius: 8,
    },

    plusIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        tintColor: '#fff',
    },
    carCard: {
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        borderRadius: 12,
        paddingVertical: 26,
        paddingHorizontal: 12,
        borderColor: '#0CA9A3',
        borderWidth: 1,
        marginBottom: 32, // extra space for button
        position: 'relative',
        overflow: 'visible', // 👈 important
    },
    carImage: {
        width: 180,
        height: 120,
        resizeMode: 'contain',
        marginRight: 12,
    },
    carInfo: {
        flex: 1,
        position: 'relative',
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#666',
    },
    value: {
        fontSize: 14,
        marginBottom: 6,
        color: '#000',
    },
    detailsButton: {
        position: 'absolute',
        bottom: -46, // push it half outside
        alignSelf: 'center',
        backgroundColor: '#0CA9A3',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 10,
        zIndex: 1,
        elevation: 4, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        marginBottom: 16,
    },
    addButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
