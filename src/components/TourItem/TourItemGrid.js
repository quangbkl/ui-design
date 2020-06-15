import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {getDuration, getImageTour, getPricePerParticipant} from 'helpers/tour';
import {BaseColor} from 'config/color';
import CustomIcon from '../Icon/CustomIcon';
import useApp from 'hooks/app/useApp';

const widthItem = Dimensions.get('window').width / 2 - 30;

const TourItemGrid = ({item}) => {
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
            <View style={styles.locationBlock}>
                <CustomIcon type="map-marker-alt" size={13} color={color.primaryColor}/>
                <Text style={styles.locationText}>{item.location}</Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.duration}>{getDuration(item)}</Text>
            <Text style={{...styles.price, color: color.primaryColor}}>{getPricePerParticipant(item)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: widthItem,
        marginTop: 5
    },
    largeImage: {
        width: '100%',
        height: 110,
        borderRadius: 6,
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
    title: {
        marginTop: 5,
        fontSize: 17,
    },
    duration: {
        marginTop: 5,
        fontSize: 15,
        color: BaseColor.accentColor
    },
    price: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: '700'
    },
});

export default TourItemGrid;
