import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import RowComp from './RowComp';

const Favourite = ({item}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.estTimeStatic}>ESTIMATED WAIT</Text>
            <Text style={styles.estTime}>{item.estTime}</Text>
            <View style={styles.lineSeparator} />
            <View style={styles.rowcomp}>
            <RowComp item={item} isNearBy={false} />
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingVertical: 16,
        paddingHorizontal: 20,    
    },
    rowcomp: {
        flex:1,
        marginLeft: -20,      
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    estTime: {
        fontWeight: 'bold',
        fontSize: 40,
        color: "#09836a",
    },
    estTimeStatic: {
        fontSize: 12,
        fontWeight: 'semibold',
    },
    status: {
        fontSize: 12,
        fontWeight: 'semibold',
    },
    lineSeparator: {
        marginTop: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#bbb',
    },
    
});

export default Favourite;
