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

export const MyCarDetails = () => {
    const [transmission, setTransmission] = useState('');
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

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
                    <TextInput placeholder="DD/MM/YYYY" style={styles.input} placeholderTextColor="#888" />
                </View>
                <View style={{ flex: 1, marginLeft: 8 }}>
                    <Text style={styles.label}>Transmission Type</Text>
                    <View style={styles.dropdownWrapper}>
                        <Picker
                            selectedValue={transmission}
                            onValueChange={(itemValue) => setTransmission(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Select Type" value="" />
                            <Picker.Item label="Automatic" value="Automatic" />
                            <Picker.Item label="Manual" value="Manual" />
                        </Picker>
                    </View>
                </View>
            </View>

            <Text style={styles.label}>
                Engine Type / Size <Text style={styles.optional}>(optional)</Text>
            </Text>
            <TextInput
                placeholder="e.g. 1.2L i-VTEC"
                style={styles.input}
                placeholderTextColor="#888"
            />
            <Text style={styles.helperText}>Useful for technicians</Text>

            <Text style={styles.label}>
                Kilometers Driven <Text style={styles.optional}>(optional)</Text>
            </Text>
            <TextInput placeholder="---" style={styles.input} placeholderTextColor="#888" />
            <Text style={styles.helperText}>Useful for technicians</Text>

            {/* <View style={styles.checkboxContainer}>
                <CheckBox
                    value={privacyAccepted}
                    onValueChange={setPrivacyAccepted}
                />
                <Text style={styles.checkboxLabel}>Accept Privacy Policy</Text>
            </View> */}

            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    banner: {
        width: '100%',
        height: 140,
        resizeMode: 'cover',
        marginBottom: 20,
        borderRadius: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 6,
    },
    optional: {
        fontSize: 12,
        color: '#0CA9A3',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
        marginBottom: 10,
    },
    helperText: {
        fontSize: 12,
        color: '#999',
        marginBottom: 10,
        marginLeft: 4,
        alignSelf: 'flex-end',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    dropdownWrapper: {
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        paddingRight: 12,
        position: 'relative',
    },
    picker: {
        height: 50,
        color: '#000',
        backgroundColor: '#fff',
    },
    dropdownIcon: {
        position: 'absolute',
        right: 12,
        top: 18,
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
        backgroundColor: '#0CA9A3',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    submitText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
