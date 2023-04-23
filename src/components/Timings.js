import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Timings = ({ isOpen, time, miles }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.openCloseTitle}>{isOpen ? "Open" : "Closing soon"}</Text>
            <Text style={styles.time}> - {time} -</Text>
            <Ionicons name="car" size={16} color="grey" style={styles.imageCar} />
            <Text style={styles.miles}> {miles}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    openCloseTitle: {
        fontWeight: 'bold',
        fontSize: 12,
        color: "#09836a"
    },
    time: {
        fontSize: 12,
        fontWeight: 'semibold',
    },
    miles: {
        fontSize: 12,
        fontWeight: 'semibold',
    },
    imageCar: {
        color: "grey",
        marginLeft: 5,

    },
});

export default Timings;
