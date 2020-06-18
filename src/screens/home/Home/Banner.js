import React from 'react';
import {StyleSheet, Image, SafeAreaView} from 'react-native';

const Banner = () => {
    const image = 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/600x403/8bd0c647595a029753bbb7a56cf37fd6/istock-1208828267.jpg';

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
