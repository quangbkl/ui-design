import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';

const Banner = () => {
    const image = 'https://lh3.googleusercontent.com/proxy/pQUnypEQcb4Dcy6it8biKPYqQg2zEnD5ofsN2T5uql6so9jStGwUpEh62eLmPWbDWCvLdljpEjgeNr7biAKA4BgXQ_w1ftm8kkNhxy7NnksZcaB8slUYgA';

    return (
        <View style={styles.main}>
            <Image source={{uri: image}} style={styles.image}/>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {},
    image: {
        width: Dimensions.get('window').width,
        height: 140,
    },
});

export default Banner;
