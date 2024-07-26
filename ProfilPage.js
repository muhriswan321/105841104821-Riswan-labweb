import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

const Profil = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>MyProfil</Text>
            </View>
            <View style={styles.profileHeaderContainer}>
                <View style={styles.profileHeader}>
                    <Image
                        source={require("./assets/Riswan.jpeg")}
                        style={styles.profileImage}
                    />
                    <View style={styles.profileText}>
                        <Text style={styles.profileName}>Muh. Riswan</Text>
                        <Text style={styles.profileEmail}>muhriswan@gmail.com</Text>
                    </View>
                </View>
            </View>

            <View style={styles.menuItem}>
                <TouchableOpacity style={styles.menuItemTouchable}>
                    <Text style={styles.menuItemText}>My orders</Text>
                    <Text style={styles.menuItemSubtitle}>Already have 12 orders</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.menuItem}>
                <TouchableOpacity style={styles.menuItemTouchable}>
                    <Text style={styles.menuItemText}>Shipping addresses</Text>
                    <Text style={styles.menuItemSubtitle}>3 addresses</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.menuItem}>
                <TouchableOpacity style={styles.menuItemTouchable}>
                    <Text style={styles.menuItemText}>Payment methods</Text>
                    <Text style={styles.menuItemSubtitle}>Visa **34</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.menuItem}>
                <TouchableOpacity style={styles.menuItemTouchable}>
                    <Text style={styles.menuItemText}>Promocodes</Text>
                    <Text style={styles.menuItemSubtitle}>You have special promocodes</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.menuItem}>
                <TouchableOpacity style={styles.menuItemTouchable}>
                    <Text style={styles.menuItemText}>My reviews</Text>
                    <Text style={styles.menuItemSubtitle}>Reviews for 4 items</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.menuItem}>
                <TouchableOpacity style={styles.menuItemTouchable}>
                    <Text style={styles.menuItemText}>Settings</Text>
                    <Text style={styles.menuItemSubtitle}>Notifications, password</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Profil;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: {
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
    },
    profileHeaderContainer: {
        marginTop: 20,
        paddingLeft: 20,
        paddingTop: 10,
    },
    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    profileText: {
        marginLeft: 10,
    },
    profileName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    profileEmail: {
        fontSize: 14,
        color: "blue",
    },
    menuItem: {
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
    },
    menuItemTouchable: {
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    menuItemText: {
        fontSize: 18,
    },
    menuItemSubtitle: {
        fontSize: 14,
        color: "gray",
        marginTop: 5,
    },
});