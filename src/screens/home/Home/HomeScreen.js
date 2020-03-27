import React from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderImage from './HeaderImage';
import SearchMenu from './SearchMenu';

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <HeaderImage/>
            <View style={styles.content}>
                <SearchMenu/>
            </View>
        </View>
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
