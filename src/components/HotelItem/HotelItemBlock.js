/**
 * Preview image: http://passionui.com/wp-content/uploads/2019/07/2019-07-18_2052-768x445.png
 * */

// let item = {
//     image: "assets/images/hotel-01.jpg",
//     name: "Boston Hotel",
//     location: "553 Gislason Radial",
//     price: "$125",
//     available: "Only 1 rooms leave",
//     rate: 4.5,
//     rateStatus: "Very Good",
//     rateCount: "85 of 100",
//     numReviews: 100,
//     services: [
//         { icon: "wifi", name: "Free Wifi" },
//         { icon: "coffee", name: "Free Coffee" },
//         { icon: "bath", name: "Free Bath" },
//         { icon: "car", name: "Free Car" },
//         { icon: "paw", name: "Free Paw" },
//         { icon: "futbol", name: "Free Futbol" }
//     ]
// }
//
// <HotelItem
//     grid
//     image={item.image}
//     name={item.name}
//     location={item.location}
//     price={item.price}
//     available={item.available}
//     rate={item.rate}
//     rateStatus={item.rateStatus}
//     numReviews={item.numReviews}
//     services={item.services}
//     style={
//         index % 2 ? { marginLeft: 15 } : {}
//     }
//     onPress={() =>
//         navigation.navigate("HotelDetailScreen") // call internal function
//     }
// />

import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {List} from 'native-base';
import {Rating} from 'react-native-ratings';
// https://github.com/uuidjs/uuid#getrandomvalues-not-supported
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {getImageHotel, getRatePerFive} from 'helpers/hotel';
import {BaseColor} from 'config/color';
import CustomIcon from '../Icon/CustomIcon';
import Touchable from '../Touchable/Touchable';

const HotelItemBlock = ({item}) => {
    const {hotel, roomAvailable} = item;
    const renderService = ({item: service}) => {
        return (
            <View style={styles.serviceItem}>
                <CustomIcon style={styles.icon} type={service.key} size={17}/>
                <Text style={styles.nameService}>{service.name}</Text>
            </View>
        );
    };
    return (
        <View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.largeImage}
                    source={{
                        uri: getImageHotel(hotel),
                    }}
                />
            </View>
            <Text style={styles.name}>{hotel.name}</Text>
            <View style={styles.locationBlock}>
                <CustomIcon type="map-marker-alt" size={13}/>
                <Text style={styles.locationText}>{hotel.location}</Text>
            </View>
            <View style={styles.mainInfo}>
                <View>
                    <Text style={styles.price}>{hotel.price}</Text>
                    <Text style={styles.available}>{`Only ${roomAvailable.length} room(s) leaft`}</Text>
                </View>
                <View style={styles.rightMain}>
                    <Text style={styles.rateText}>{getRatePerFive(hotel)}</Text>
                    <View>
                        <Text style={styles.rateReview}>Very Good</Text>
                        <Rating
                            style={styles.rateStar}
                            startingValue={getRatePerFive(hotel)}
                            imageSize={16}
                            readonly
                        />
                    </View>
                </View>
            </View>
            <View style={styles.serviceBlock}>
                <List
                    horizontal
                    dataArray={hotel.services}
                    renderItem={renderService}
                    keyExtractor={() => uuidv4()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        marginTop: 10,
    },
    largeImage: {
        width: '100%',
        height: 200,
    },
    name: {
        marginTop: 13,
        marginLeft: 20,
        fontSize: 21,
    },
    locationBlock: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
    },
    locationText: {
        marginLeft: 6,
        color: BaseColor.grayColor,
        fontSize: 13,
        lineHeight: 15,
    },
    mainInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 10,
        marginTop: 15,
    },
    price: {
        color: BaseColor.primaryColor,
        fontSize: 21,
    },
    available: {
        color: BaseColor.bluePrimaryColor,
        fontSize: 12,
    },
    rightMain: {
        flexDirection: 'row',
    },
    rateText: {
        fontSize: 20,
        padding: 8,
        backgroundColor: BaseColor.primaryColor,
        color: BaseColor.whiteColor,
        borderRadius: 5,
        marginRight: 10,
    },
    rateReview: {
        fontSize: 13,
        color: BaseColor.grayColor,
    },
    rateStar: {
        marginTop: 8,
    },
    serviceBlock: {
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
    },
    serviceItem: {
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center',
    },
    nameService: {
        marginTop: 5,
        fontSize: 13,
        color: BaseColor.grayColor,
    },
    icon: {
        textAlign: 'center',
        color: BaseColor.bluePrimaryColor,
    },
});

export default HotelItemBlock;
