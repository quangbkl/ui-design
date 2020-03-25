import React from 'react';
import {Image, View, ViewPropTypes, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Card as NativeBaseCard, CardItem} from 'native-base';


class Card extends React.Component {
    render() {
        const {image, children, ...rest} = this.props;

        return (
            <NativeBaseCard {...rest} style={styles.card}>
                <CardItem cardBody>
                    <Image source={{uri: image}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <View style={styles.footer}>
                    {children}
                </View>
            </NativeBaseCard>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        position: 'relative',
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
