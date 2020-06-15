import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Text from 'components/Text/Text';
import {Touchable} from '../../index';

const TourInformationItem = (props) => {
    const {image, title, description} = props;
    return (
        <Touchable style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image source={{uri: image}} style={styles.image}/>
            <Text style={styles.description}>{description}</Text>
        </Touchable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
    },
    title: {
        fontWeight: '700',
    },
    image: {
        marginTop: 15,
        width: '100%',
        height: 100,
    },
    description: {
        marginTop: 15,
        textAlign: 'justify'
    }
});
export default TourInformationItem;
