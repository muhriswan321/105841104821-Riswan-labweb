import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Visual2() {
    return (
        <View style={gaya.container}>
            <View style={gaya.imageContainer}>
                <Image
                    style={gaya.gambar}
                    source={require('./assets/image 6.png')}
                />

                {/* Overlay yang menggelapkan area di luar kotak */}
                <View style={gaya.overlayContainer}>
                    <View style={gaya.overlayGelap} />
                    <View style={gaya.cropContainer}>
                        <Image
                            style={gaya.gambar}
                            source={require('./assets/image 6.png')}
                        />
                    </View>
                </View>
            </View>

            <TouchableOpacity style={gaya.tombolKamera}>
                <Image
                    style={gaya.ikonKamera}
                    source={require('./assets/cari.png')}
                />
            </TouchableOpacity>
        </View>
    );
}

const gaya = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    gambar: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlayContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    overlayGelap: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay gelap
    },
    cropContainer: {
        position: 'absolute',
        width: 200,
        height: 200,
        top: '50%',
        left: '50%',
        transform: [{ translateX: -100 }, { translateY: -100 }],
        borderColor: '#ffffff',
        borderWidth: 4,
        borderRadius: 20,
        overflow: 'hidden', // Hanya area dalam kotak yang terlihat
    },
    tombolKamera: {
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: [{ translateX: -25 }],
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ff3b30',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    ikonKamera: {
        width: 25,
        height: 25,
        tintColor: '#ffffff',
    },
});