import React, { useEffect, useState, useRef, } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Animated } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import RowComp from '../components/RowComp';
import Welcome from '../components/Welcome';
import Favourite from '../components/Favourite';
import Greetings from '../components/Greetings';

import Header from '../components/Header';

import { favourite } from '../data/favourite';
import { nearby } from '../data/nearby';

const HEADER_MIN_HEIGHT = 100;
const HEADER_SCROLL_DISTANCE = 150;

const GRADIENT_START_COLOR = '#09836a';
const GRADIENT_END_COLOR = '#073a3d';
const HEADER_START_COLOR_OPACITY = '#009b6200';
const HEADER_END_COLOR_OPACITY = '#009b62ff';

const HomeScreen = () => {
    const [scrollY] = useState(new Animated.Value(0));

    const headerColor = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_START_COLOR_OPACITY, HEADER_END_COLOR_OPACITY],
        extrapolate: 'clamp',
    });

    
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <LinearGradient colors={[GRADIENT_START_COLOR, GRADIENT_END_COLOR]} style={styles.gradient}>

                <Animated.View style={[styles.headerContainer, { backgroundColor: headerColor, height: HEADER_MIN_HEIGHT }]}>
                    <Header />
                </Animated.View>

                <View style={styles.bodyContainer}>
                    <Animated.ScrollView
                        scrollEventThrottle={100}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
                        
                        contentContainerStyle={styles.contentContainer}
                        >
                        

                        <View style={styles.greetingsView}>
                            <Greetings />
                        </View>
                        <View style={styles.welcomeBodyView}>
                            <Welcome />
                        </View>

                        <View style={styles.primaryBodyView} >
                            <Favourite item={favourite} />
                        </View>
                        <View style={styles.otherSalonsHeadingView} >
                            <Text style={styles.otherSalonsHeadingText}>OTHER SALONS FOR YOU</Text>
                        </View>

                        <View style={styles.otherSalonsListView} >
                            {nearby.map((item) => {
                                return (
                                    <>
                                <RowComp item={item} isNearBy={true}/>
                                <View style={styles.lineSeparator} />
                                </>

                                )
                            })
                            }
                        </View>


                    </Animated.ScrollView>
                </View>

            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    },
    headerContainer: {
        // flex: 1,
        // position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    bodyContainer: {
        flex: 1,
        //paddingTop: 10,
    },
    greetingsView: {
        flex: 0.2,
        margin: 15,
        marginBottom: 10,
        borderRadius: 10,
    },
    welcomeBodyView: {
        flex: 0.2,
        margin: 15,
        backgroundColor: "white",
        marginBottom: 10,
        borderRadius: 10,
    },
    primaryBodyView: {
        flex: 0.3,
        margin: 15,
        backgroundColor: "white",
        marginBottom: 10,
        borderRadius: 10,
    },
    otherSalonsHeadingView: {
        margin: 15,
    },
    otherSalonsHeadingText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: "white",
    },
    otherSalonsListView: {
        flex: 0.3,
        margin: 15,
        backgroundColor: "white",
        marginBottom: 10,
        borderRadius: 10,
    },
    lineSeparator: {
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
    },
    contentContainer: {
        paddingVertical: 40,
      }
});

export default HomeScreen;
