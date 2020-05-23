import React from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';

const Banner = () => {
    const image = 'data:image/jpeg;base64,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';

    return (
        <SafeAreaView style={styles.main}>
            <Image source={{uri: image}} style={styles.image}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {},
    image: {
        width: '100%',
        height: 140,
    },
});

export default Banner;
