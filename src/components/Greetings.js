import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Greetings = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.title1}>Lookin' good, Sam!</Text>
            <Text style={styles.title2}>Make every day</Text>
            <Text style={styles.title2}>a great hair day.</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        // margin: 10,
    },
    title1: {
        flex: 1,
        color: "white",
        fontSize: 18,
        marginTop: 5,
        marginBottom: 10,
    },
    title2: {
        flex: 1,
        color: "white",
        fontWeight: 'bold',
        fontSize: 28,
        marginTop: 5,
    },
});

export default Greetings;
