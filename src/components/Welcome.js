import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image
                    source={require('../../assets/favicon.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>Find a salon near you</Text>
                <View style={styles.linkView}>
                    <Text style={styles.linkText}>View map</Text>
                    <AntDesign name="arrowright" size={16} color="black" style={styles.imageArrow} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
    },
    image: {
        height: 50,
        width: 50,
    },
    leftContainer: {
        marginLeft: 10,
    },
    rightContainer: {
        flex: 1,
        marginLeft: 30,
    },
    title: {
        flex:1,
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5,

    },
    linkView: {
        flex:1,
        flexDirection: "row",
    },
    linkText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: "steelblue",

    },
    imageArrow: {
        color: "steelblue",
        marginLeft: 5,
       
    },
});

export default Welcome;