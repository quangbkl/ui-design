import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Button from '../Button/Button';
import Touchable from '../Touchable/Touchable';
import useApp from 'hooks/app/useApp';

const HotelCard = (props) => {
    const {onPress, _onPressBookNow, item} = props;
    const {image, title, country} = item;
    const {state: appState} = useApp();
    const {color} = appState;
    return (
        <Touchable onPress={onPress} style={styles.container}>
            <ImageBackground
                source={{uri: image}}
                style={styles.image}
                imageStyle={{borderRadius: 7.5}}
            >
                <View style={styles.childrenContainer}>
                    <Text style={styles.title}> {title} </Text>
                    <Text style={styles.country}> {country} </Text>
                    <Button
                        style={{...styles.button, backgroundColor: color.primaryColor}}
                        children={'Book Now'}
                        onPress={_onPressBookNow}
                    >
                    </Button>
                </View>
            </ImageBackground>
        </Touchable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 200,
        height: 250,
        marginTop: 10,
        marginRight: 15,
        backgroundColor: '#f4f4f4',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    childrenContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginLeft: 10,
        marginBottom: 15,
    },
    title: {
        fontSize: 15,
        fontWeight: '400',
        color: '#ffffff',
        marginBottom: 10,
    },
    country: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff',
        marginBottom: 10,
    },
    button: {
        borderRadius: 5,
        width: 84,
        height: 25,
        marginLeft: 5,
        paddingVertical: 5,
    },
});

export default HotelCard;
