import React from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Card = (props) => {
    const {style, children, styleContent, image, onPress} = props;

    const styles = StyleSheet.create({
        imageBanner: {width: '100%', height: '100%', borderRadius: 8}
    });

    return (
        <TouchableOpacity
            style={style}
            onPress={onPress}
            activeOpacity={0.9}
        >
            <Image source={{uri: image}} style={styles.imageBanner}/>
            <View style={styleContent}>{children}</View>
        </TouchableOpacity>
    );
};

Card.propTypes = {
    image: PropTypes.node.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleContent: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    onPress: PropTypes.func
};

Card.defaultProps = {
    style: {},
    styleContent: {
        position: 'absolute',
        bottom: 0,
        padding: 10
    },
    onPress: () => {
    }
};

export default Card;
