import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Banner from './Banner';
import SearchMenu from './SearchMenu';
import PromosToday from './PromosToday';
import Tour from './Tour';
import UpcomingEvents from './UpcomingEvents';
import Promotion from './Promotion';

const HomeScreen = props => {
    const {navigation} = props;

    return (
        <ScrollView style={styles.container}>
            <Banner />
            <View style={styles.content}>
                <SearchMenu navigation={navigation} />
                <PromosToday navigation={navigation} />
                <Tour navigation={navigation} />
                <UpcomingEvents />
                <Promotion />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    content: {
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
    },
});

export default HomeScreen;
