import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {List} from 'native-base';
import {Rating} from 'react-native-ratings';
import {v4 as uuidv4} from 'react-native-uuid';
import {getImageHotel, getRatePerFive} from 'helpers/hotel';
import {BaseColor} from 'config/color';
import CustomIcon from '../Icon/CustomIcon';
import Touchable from '../Touchable/Touchable';

const HotelItemBlock = ({item}) => {
    const {
        name,
        location,
        price,
        roomAvailable,
        ratePercent,
        services,
        featureImage
    } = item;
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
                        uri: featureImage,
                    }}
                />
            </View>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.locationBlock}>
                <CustomIcon type="map-marker-alt" size={13}/>
                <Text style={styles.locationText}>{location}</Text>
            </View>
            <View style={styles.mainInfo}>
                <View>
                    <Text style={styles.price}>{price}</Text>
                    <Text style={styles.available}>{`Only ${roomAvailable} room(s) leaft`}</Text>
                </View>
                <View style={styles.rightMain}>
                    <Text style={styles.rateText}>{getRatePerFive({ratePercent})}</Text>
                    <View>
                        <Text style={styles.rateReview}>Rất tốt</Text>
                        <Rating
                            style={styles.rateStar}
                            startingValue={getRatePerFive({ratePercent})}
                            imageSize={16}
                            readonly
                        />
                    </View>
                </View>
            </View>
            <View style={styles.serviceBlock}>
                <List
                    horizontal
                    dataArray={services}
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
