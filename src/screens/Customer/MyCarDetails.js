import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    CheckBox, // or use @react-native-community/checkbox if needed
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import bannerImage from '../../../assets/images/CTAbannerhome.png'
import globalStyles from '../../styles/globalStyles';
import { color } from '../../styles/theme';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import CustomAlert from '../../components/CustomAlert';
import { useNavigation } from '@react-navigation/native';

export const MyCarDetails = () => {
    const [transmission, setTransmission] = useState('');
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    const [yearOfPurchase, setYearOfPurchase] = useState(null);
    const [showYearPicker, setShowYearPicker] = useState(false);

    const [alertVisible, setAlertVisible] = useState(false);


    // Function to format year
    const formatDate = (date) => {
        if (!date) return '';
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleSubmit = () => {
        setAlertVisible(true)
    }

    const navigation = useNavigation();

    const goCarList = () => {
        setAlertVisible(false);
        navigation.navigate('CustomerTabNavigator', { screen: 'My Cars' });
    }

    return (
        <ScrollView contentContainerStyle={globalStyles.container} showsVerticalScrollIndicator={false}>
            <Image source={bannerImage} style={styles.banner} />

            <Text style={styles.label}>Registration Number</Text>
            <TextInput
                placeholder="e.g. TS08-AB-1234"
                style={styles.input}
                placeholderTextColor="#888"
            />

            <View style={styles.row}>
                <View style={{ flex: 1, marginRight: 8 }}>
                    <Text style={styles.label}>Year of Purchase</Text>
                    <TouchableOpacity onPress={() => setShowYearPicker(true)}>
                        <TextInput
                            value={formatDate(yearOfPurchase)}
                            placeholder="DD/MM/YYYY"
                            style={styles.input}
                            placeholderTextColor="#888"
                            editable={false}
                            pointerEvents="none"
                        />
                    </TouchableOpacity>
                    {showYearPicker && (
                        <DateTimePicker
                            value={yearOfPurchase || new Date()}
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            onChange={(event, selectedDate) => {
                                setShowYearPicker(false);
                                if (selectedDate) {
                                    setYearOfPurchase(selectedDate);
                                }
                            }}
                            maximumDate={new Date()}
                        />
                    )}
                </View>
                <View style={{ flex: 1, marginLeft: 8 }}>
                    <Text style={styles.label}>Transmission Type</Text>
                    <Dropdown
                        data={[
                            { label: 'Automatic', value: 'Automatic' },
                            { label: 'Manual', value: 'Manual' },
                        ]}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Type"
                        value={transmission}
                        onChange={(item) => setTransmission(item.value)}
                        style={styles.dropdown}
                        placeholderStyle={{ color: '#888' }}
                        itemTextStyle={{ fontSize: 14 }}
                    />
                </View>
            </View>

            <View style={styles.labelWithHelperRow}>
                <Text style={styles.label}>
                    Engine Type / Size <Text style={styles.optional}>(optional)</Text>
                </Text>
                <Text style={styles.helperTextInline}>Useful for technicians</Text>
            </View>
            <TextInput
                placeholder="e.g. 1.2L i-VTEC"
                style={styles.input}
                placeholderTextColor="#888"
            />

            {/* Kilometers Driven with inline helper */}
            <View style={styles.labelWithHelperRow}>
                <Text style={styles.label}>
                    Kilometers Driven <Text style={styles.optional}>(optional)</Text>
                </Text>
                <Text style={styles.helperTextInline}>Useful for technicians</Text>
            </View>
            <TextInput
                placeholder="---"
                style={styles.input}
                placeholderTextColor="#888"
            />

            {/* <View style={styles.checkboxContainer}>
                <CheckBox
                    value={privacyAccepted}
                    onValueChange={setPrivacyAccepted}
                />
                <Text style={styles.checkboxLabel}>Accept Privacy Policy</Text>
            </View> */}

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={{ ...globalStyles.f12Bold, color: color.white }}>Submit</Text>
            </TouchableOpacity>
            <CustomAlert
                visible={alertVisible}
                onClose={goCarList}
                title="Success"
                message="Your Car Added Successfully"
                status="info"
                showButton={false} // hide default button
            >
                <TouchableOpacity onPress={goCarList} style={styles.submitButton} >
                    <Text style={{ ...globalStyles.f12Bold, color: color.white }}>Go To Cars List</Text>
                </TouchableOpacity>
            </CustomAlert>

        </ScrollView >
    );
}
const styles = StyleSheet.create({

    banner: {
        width: '100%',
        height: 140,
        resizeMode: 'cover',
        marginBottom: 20,
        borderRadius: 20,
    },
    label: {
        ...globalStyles.f12Bold,
        marginBottom: 4,
    },
    optional: {
        ...globalStyles.f10Bold,
        color: color.secondary,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        ...globalStyles.f12Regular,
        marginBottom: 10,
    },
    dropdown: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 44,
        justifyContent: 'center',
        ...globalStyles.f12Regular,
    },
    helperText: {
        ...globalStyles.f10Regular,
        color: '#999',
        marginBottom: 10,
        marginLeft: 4,
        alignSelf: 'flex-end',
    },
    labelWithHelperRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    helperTextInline: {
        ...globalStyles.f10Regular,
        color: '#999',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },

    picker: {
        height: 48, // try increasing
        paddingVertical: 6,
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 8, // optional for consistency with TextInput
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 14,
        color: '#333',
    },
    submitButton: {
        backgroundColor: color.secondary,
        paddingVertical: 14,
        paddingHorizontal:16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 15
    },

});
