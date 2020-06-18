import React from 'react';
import {Rating} from "react-native-ratings";
import {Image, TouchableOpacity, View, StyleSheet} from "react-native";
import Icon from "../Icon/Icon";
import Text from "../../components/Text/Text";
import useApp from "../../hooks/app/useApp";
import scaleWithPixel from "../../helpers/scaleWithPixel";

const HotelItemGrid = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const {
        style,
        image,
        name,
        location,
        price,
        rate,
        numReviews,
        onPress
    } = props;

    const styles = StyleSheet.create({
        girdImage: {
            borderRadius: 8,
            height: scaleWithPixel(120),
            width: "100%"
        },
        girdContent: {
            flex: 1
        },
        girdContentLocation: {
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: 5
        },
        girdContentRate: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10
        }
    })

    return (
        <View style={[styles.girdContent, style]}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
                <Image source={{uri: image}} style={styles.girdImage}/>
            </TouchableOpacity>
            <View style={styles.girdContentLocation}>
                <Icon
                    name="map-marker-alt"
                    color={colors.primaryColor}
                    size={10}
                />
                <Text
                    caption2
                    grayColor
                    style={{
                        marginLeft: 3
                    }}
                    numberOfLines={1}
                >
                    {location}
                </Text>
            </View>
            <Text
                body2
                semibold
                style={{
                    marginTop: 5
                }}
            >
                {name}
            </Text>
            <View style={styles.girdContentRate}>
                <Rating
                    startingValue={rate}
                    imageSize={10}
                    tintColor={colors.backgroundPrimaryColor}
                    readonly
                />
                <Text caption2 grayColor>
                    {numReviews} reviews
                </Text>
            </View>
            <Text
                title3
                primaryColor
                semibold
                style={{
                    marginTop: 5
                }}
            >
                {price}
            </Text>
        </View>
    );
}

HotelItemGrid.propTypes = {};

export default HotelItemGrid;
