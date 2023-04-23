import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Timings from './Timings';

const RowComp = ({ item, isNearBy }) => {

  return (
    <View style={styles.container}>

      <View style={styles.leftContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <Timings isOpen={item.isOpen} time={item.time} miles={item.miles} />

      </View>
      {isNearBy &&
        <View style={styles.rightContainer}>
          <Text style={styles.estTime}>{item.estTime}</Text>
          <Text style={styles.estTimeStatic}>{"EST WAIT"}</Text>
        </View>
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  leftContainer: {
    flex: 2,
  },
  rightContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'flex-end',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  address: {
    fontSize: 14,
    paddingVertical: 4,
  },
  estTime: {
    fontWeight: 'bold',
    fontSize: 16,
    color: "#09836a",
  },
  estTimeStatic: {
    fontSize: 10,
    fontWeight: 'semibold',
  },
  status: {
    fontSize: 12,
    fontWeight: 'semibold',
  },
});

export default RowComp;
