import React from 'react';
import {Image, View, ViewPropTypes, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Card as NativeBaseCard, CardItem} from 'native-base';

const Card = (props) => {
    const {image, style, children, ...rest} = props;

    return (
        <NativeBaseCard {...rest} style={[styles.card, style]}>
            <CardItem cardBody style={{flex: 1, backgroundColor: 'red'}}>
                <Image resizeMode={'cover'} source={{uri: image}}
                       style={{flex: 1, width: undefined, height: undefined}}/>
            </CardItem>
            <View style={styles.footer}>
                {children}
            </View>
        </NativeBaseCard>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        position: 'relative',
        width: 150,
        height: 200,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
    },
});

Card.propTypes = {
    image: PropTypes.string.isRequired,
    style: ViewPropTypes.style,
    styleContent: ViewPropTypes.style,
    onPress: PropTypes.func,
};

export default Card;
