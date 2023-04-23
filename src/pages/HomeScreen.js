import React, { useEffect, useState, useRef, } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

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

    const greetingTransY = useRef(new Animated.Value(-400)).current;
    const welcomeTransX = useRef(new Animated.Value(500)).current;
    const favTransX = useRef(new Animated.Value(500)).current;
    const otherTitleTransX = useRef(new Animated.Value(500)).current;
    const nearbyTransX = useRef(new Animated.Value(500)).current;

    useEffect(() => {
        
        const animGreeting = Animated.timing(greetingTransY, {
            toValue: 0,
            duration: 1000,
            //delay: 2000,
            easing: Easing.ease,
            useNativeDriver: true
        }
        );

        const animWelcome = Animated.timing(welcomeTransX, {
            toValue: 0,
            duration: 500,
            // delay: 2000,
            easing: Easing.ease,
            useNativeDriver: true
        }
        );

        const animFav = Animated.timing(favTransX, {
            toValue: 0,
            duration: 500,
            // delay: 2000,
            easing: Easing.ease,
            useNativeDriver: true
        }
        );

        const animOtherTitle = Animated.timing(otherTitleTransX, {
            toValue: 0,
            duration: 400,
            // delay: 2000,
            easing: Easing.ease,
            useNativeDriver: true
        }
        );

        const animNearby = Animated.timing(nearbyTransX, {
            toValue: 0,
            duration: 500,
            // delay: 2000,
            easing: Easing.ease,
            useNativeDriver: true
        }
        );

        Animated.sequence(
            [
                animGreeting, 
                animWelcome,
                animFav,
                animOtherTitle,
                animNearby
            ]).start();
    }, []);


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

                        <Animated.View style={[styles.greetingsView, { transform: [{ translateY: greetingTransY }] }]}>
                            <Greetings />
                        </Animated.View>

                        <Animated.View style={[styles.welcomeBodyView, { transform: [{ translateX: welcomeTransX }] }]}>
                            <Welcome />
                        </Animated.View>

                        <Animated.View style={[styles.primaryBodyView, { transform: [{ translateX: favTransX }] }]} >
                            <Favourite item={favourite} />
                        </Animated.View>

                        <Animated.View style={[styles.otherSalonsHeadingView, { transform: [{ translateX: otherTitleTransX }] }]} >
                            <Text style={styles.otherSalonsHeadingText}>OTHER SALONS FOR YOU</Text>
                        </Animated.View>

                        <Animated.View style={[styles.otherSalonsListView, { transform: [{ translateX: nearbyTransX }] }]} >
                            {nearby.map((item) => {
                                return (
                                    <View key={item.id}>
                                        <RowComp item={item} isNearBy={true} />
                                        <View style={styles.lineSeparator} />
                                    </View>

                                )
                            })
                            }
                        </Animated.View>
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
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    bodyContainer: {
        flex: 1,
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
