import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Banner from './Banner';
import SearchMenu from './SearchMenu';
import PromosToday from './PromosToday';
import Tour from './Tour';
import UpcomingEvents from './UpcomingEvents';
import Promotion from './Promotion';

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Banner/>
            <View style={styles.content}>
                <SearchMenu/>
                <PromosToday/>
                <Tour/>
                <UpcomingEvents/>
                <Promotion/>
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
