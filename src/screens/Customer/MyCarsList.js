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
            model: 'Car Model No 1',
            fuel: 'Petrol',
            manufacturer: 'Honda',
            image: sampleCar,
        },
        {
            id: '2',
            model: 'Car Model No 2',
            fuel: 'Petrol',
            manufacturer: 'Honda',
            image: sampleCar,
        },
        {
            id: '3',
            model: 'Car Model No 3',
            fuel: 'Petrol',
            manufacturer: 'Honda',
            image: sampleCar,
        },
        {
            id: '4',
            model: 'Car Model No 4',
            fuel: 'Petrol',
            manufacturer: 'Honda',
            image: sampleCar,
        },
        {
            id: '5',
            model: 'Car Model No 5',
            fuel: 'Petrol',
            manufacturer: 'Honda',
            image: sampleCar,
        },
    ]);

    const renderCar = ({ item }) => (
        <View style={styles.carCard}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={item.image} style={styles.carImage} />
                <View style={styles.carInfo}>
                    <Text style={[globalStyles.f10Bold, { color: '#737373' }]}>Model Name</Text>
                    <Text style={globalStyles.f12Bold}>{item.model}</Text>
                    <View style={{ height: 6 }} />
                    <Text style={[globalStyles.f10Bold, { color: '#737373' }]}>Fuel Type</Text>
                    <Text style={globalStyles.f12Bold}>{item.fuel}</Text>
                    <View style={{ height: 6 }} />
                    <Text style={[globalStyles.f10Bold, { color: '#737373' }]}>Manufacturer</Text>
                    <Text style={globalStyles.f12Bold}>{item.manufacturer}</Text>
                </View>
            </View>
            <View style={{ height: 10 }} />
            <TouchableOpacity style={styles.detailsButton}>
                <Text style={{ color: '#fff' }}>View Details</Text>
            </TouchableOpacity>
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
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 12,
        borderColor: '#0CA9A3',
        borderWidth: 1,
        marginBottom: 40,
        overflow: 'visible',
    },
    carImage: {
        width: '60%',       // 60% of the parent container
        height: 100,
        resizeMode: 'contain'
    },
    carInfo: {
        width: '40%',       // 40% of the parent container
        paddingLeft: 12,
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
        bottom: -17,
        left: '83%',
        transform: [{ translateX: -60 }], 
        backgroundColor: '#0CA9A3',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 10,
        zIndex: 2,
        elevation: 4,
        shadowColor: '#000',
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
