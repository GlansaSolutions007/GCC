import React, { useState } from 'react';
import {
    View,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ImageBackground,
} from 'react-native';
import CustomText from '../../components/CustomText';
import { color } from '../../styles/theme';
import globalStyles from '../../styles/globalStyles';
import * as ImagePicker from "expo-image-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import DefaultProfileImage from '../../../assets/images/profile-user.png'

export const ProfileRegister = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [altPhoneNumber, setAltPhoneNumber] = useState('');
    const [image, setImage] = useState(null);

    const handleRegister = () => {
        console.log({ firstName, lastName, email, phoneNumber, altPhoneNumber });
    };

    const pickImage = async () => {
        const permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert("Permission to access photos is required!");
            return;
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,

            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 80}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.profileImageContainer}>
                        <ImageBackground
                            source={image ? { uri: image } : DefaultProfileImage}
                            style={styles.profileImage}
                            imageStyle={{ borderRadius: 60 }}
                        >
                            {image && (
                                <TouchableOpacity
                                    style={styles.removeIcon}
                                    onPress={() => setImage(null)}
                                >
                                    <Ionicons name="close-circle" size={24} color="#fff" />
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity
                                style={styles.cameraIcon}
                                onPress={pickImage}
                            >
                                <Ionicons name="camera" size={20} color="#fff" />
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                
                    <View style={styles.inputGroup}>
                        <CustomText style={styles.label}>Full Name</CustomText>
                        <TextInput
                            placeholder="Full Name"
                            placeholderTextColor="#999"
                            style={styles.textInput}
                            value={firstName}
                            onChangeText={setFirstName}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <CustomText style={styles.label}>Email</CustomText>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#999"
                            style={styles.textInput}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <CustomText style={styles.label}>Phone Number</CustomText>
                        <TextInput
                            placeholder="Phone Number"
                            placeholderTextColor="#999"
                            style={styles.textInput}
                            keyboardType="phone-pad"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <CustomText style={styles.label}>Additional Phone Number (optional)</CustomText>
                        <TextInput
                            placeholder="Additional Phone Number (optional)"
                            placeholderTextColor="#999"
                            style={styles.textInput}
                            keyboardType="phone-pad"
                            value={altPhoneNumber}
                            onChangeText={setAltPhoneNumber}
                        />
                    </View>

                    <TouchableOpacity style={styles.submitButton} onPress={handleRegister}>
                        <CustomText style={styles.submitText}>Save</CustomText>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#f9f9f9',
    },
    inputGroup: {
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    label: {
        marginBottom: 6,
        color: '#333',
        ...globalStyles.f12Bold
    },
    textInput: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
        color: '#000',
    },
    submitButton: {
        backgroundColor: color.secondary,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    submitText: {
        color: 'white',
        ...globalStyles.f12Bold
    },
    uploadBox: {
        borderWidth: 1,
        borderColor: color.secondary,
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    profileImageContainer: {
        alignSelf: 'center',
        marginBottom: 20,
        position: 'relative',
    },

    profileImage: {
        width: 120,
        height: 120,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    removeIcon: {
        position: 'absolute',
        top: -6,
        right: -6,
        backgroundColor: '#000',
        borderRadius: 12,
        padding: 2,
    },

    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: color.secondary,
        borderRadius: 20,
        padding: 6,
    },

    imageWrapper: {
        marginTop: 10,
        width: 80,
        height: 80,
        position: "relative",
    },
    imagePreview: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-end",
    },
    removeIcon: {
        position: "absolute",
        top: -10,
        right: -10,
        borderRadius: 12,
    },
});
