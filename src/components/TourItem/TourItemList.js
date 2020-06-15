import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import {getImageTour, getPricePerParticipant, getRatePerFive} from 'helpers/tour';
import CustomIcon from '../Icon/CustomIcon';
import {BaseColor} from 'config/color';
import useApp from 'hooks/app/useApp';

const TourItemList = ({item}) => {
    const {state: appState} = useApp();
    const {color} = appState;
    return (
        <View style={styles.container}>
            <Image
                style={styles.largeImage}
                source={{
                    uri: getImageTour(item),
                }}
            />
            <View style={styles.rightBlock}>
                <Text style={styles.name}>{item.title}</Text>
                <View style={styles.locationTime}>
                    <View style={styles.departureDate}>
                        <CustomIcon type="calendar-alt" size={12} color={BaseColor.grayColor}/>
                        <Text style={styles.locationText}>{item.departureDate}</Text>
                    </View>
                    <View style={styles.locationBlock}>
                        <CustomIcon type="map-marker-alt" size={12} color={BaseColor.grayColor}/>
                        <Text style={styles.locationText}>{item.location}</Text>
                    </View>
                </View>

                <View style={styles.rating}>
                    <Rating
                        startingValue={getRatePerFive(item)}
                        imageSize={12}
                        readonly
                    />
                    <Text style={styles.textRating}>Rating </Text>
                    <Text style={{color: color.primaryColor}}>{item.ratePercent} of 100</Text>
                </View>
                <View style={{...styles.formatCommon, width: 80}}>
                    <CustomIcon type="history" size={12} color={BaseColor.accentColor} style={{marginLeft: 3}}/>
                    <Text style={styles.formatCommonText}>{item.generalInformation.duration}</Text>
                </View>
                <View style={{...styles.formatCommon, width: 90}}>
                    <CustomIcon type="hospital" size={12} color={BaseColor.accentColor} style={{marginLeft: 3}}/>
                    <Text style={styles.formatCommonText}>Insurrance</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{...styles.formatCommon, width: 110}}>
                        <CustomIcon type="users" size={12} color={BaseColor.accentColor} style={{marginLeft: 3}}/>
                        <Text style={styles.formatCommonText}>Family Dinner</Text>
                    </View>
                    <View style={{...styles.formatCommon, width: 80, marginLeft: 5}}>
                        <CustomIcon type="beer" size={12} color={BaseColor.accentColor} style={{marginLeft: 3}}/>
                        <Text style={styles.formatCommonText}>Free Beer</Text>
                    </View>
                </View>
                <View style={styles.price}>
                    <Text style={{color: color.primaryColor, fontSize: 18}}>{getPricePerParticipant(item)}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20
    },
    largeImage: {
        width: '35%',
        height: 160,
        borderRadius: 6,
    },
    rightBlock: {
        marginLeft: 10,
        position: 'relative'
    },
    name: {
        fontSize: 17,
    },
    locationTime: {
        flexDirection: 'row',
        marginTop: 7,
    },
    departureDate: {
        flexDirection: 'row',
    },
    locationBlock: {
        flexDirection: 'row',
        marginLeft: 5,
    },
    locationText: {
        marginLeft: 6,
        color: BaseColor.grayColor,
        fontSize: 12,
        lineHeight: 15,
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 7
    },
    textRating: {
        color: BaseColor.textPrimaryColor,
        opacity: 0.7,
        marginLeft: 8
    },
    formatCommon: {
        marginTop: 5,
        padding: 3,
        flexDirection: 'row',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: BaseColor.accentColor,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: BaseColor.fieldColor
    },
    formatCommonText: {
        color: BaseColor.accentColor,
        marginLeft: 5,
        fontSize: 12
    },
    price: {
        position: 'absolute',
        top: 165,
        right: 0
    }
});

export default TourItemList;
