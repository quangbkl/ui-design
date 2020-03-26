import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import Text from '../../../components/Text';

const ImageSliderItem = (props) => {
    const {image, text} = props;

    return (
        <View style={styles.main}>
            <Image
                style={styles.image}
                source={{uri: image}}
            />
            <Text style={styles.text} type="title3">{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
    },
    image: {
        width: 280,
        height: 280,
        borderRadius: 280 / 2,
    },
    text: {
        paddingTop: 25,
    },
});

ImageSliderItem.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default ImageSliderItem;
