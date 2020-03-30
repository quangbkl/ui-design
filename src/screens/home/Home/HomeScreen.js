import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import HeaderImage from './HeaderImage';
import SearchMenu from './SearchMenu';
import Tours from './Tours';

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <HeaderImage/>
            <View style={styles.content}>
                <SearchMenu/>
                <Tours/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        backgroundColor: '#635DB7',
    },
});

export default HomeScreen;
