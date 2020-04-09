import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import {getImageHotel, getRatePerFive} from 'helpers/hotel';
import CustomIcon from '../Icon/CustomIcon';
import {BaseColor} from 'config/color';

// Follow HotelItemBlock
const HotelItemList = ({item}) => {
    const {hotel, roomAvailable} = item;
    return (
        <View style={styles.container}>
            <Image
                style={styles.largeImage}
                source={{
                    uri: getImageHotel(hotel),
                }}
            />
            <View style={styles.rightBlock}>
                <Text style={styles.name}>{hotel.name}</Text>
                <View style={styles.locationBlock}>
                    <CustomIcon type="map-marker-alt" size={13} />
                    <Text style={styles.locationText}>{hotel.location}</Text>
                </View>
                <Rating
                    style={styles.rateStar}
                    startingValue={getRatePerFive(hotel)}
                    imageSize={14}
                    readonly
                />
                <Text style={styles.price}>{hotel.price}</Text>
                <Text style={styles.unit}>AVG/NIGHT</Text>
                <Text style={styles.available}>{`Only ${
                    roomAvailable.length
                } room(s) leaft`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    largeImage: {
        width: '40%',
        height: 140,
        borderRadius: 6,
    },
    rightBlock: {
        marginLeft: 10,
    },
    name: {
        fontSize: 17,
    },
    locationBlock: {
        flexDirection: 'row',
        marginTop: 5,
    },
    locationText: {
        marginLeft: 6,
        color: BaseColor.grayColor,
        fontSize: 13,
        lineHeight: 15,
    },
    rateStar: {
        marginLeft: -30,
        marginTop: 5,
    },
    price: {
        marginTop: 5,
        color: BaseColor.primaryColor,
        fontSize: 20,
    },
    unit: {
        marginTop: 5,
        fontSize: 13,
    },
    available: {
        marginTop: 5,
        color: BaseColor.bluePrimaryColor,
        fontSize: 12,
    },
});

export default HotelItemList;
