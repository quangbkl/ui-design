import React from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from "react-native";
import Text from "../../components/Text/Text";
import Icon from "../Icon/Icon";
import {Rating} from "react-native-ratings";
import useApp from "../../hooks/app/useApp";
import scaleWithPixel from "../../helpers/scaleWithPixel";

const HotelItemList = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const {
        style,
        image,
        name,
        location,
        price,
        available,
        rate,
        rateCount,
        onPress
    } = props;

    const styles = StyleSheet.create({
        listImage: {
            height: scaleWithPixel(140),
            width: scaleWithPixel(120)
        },
        listContent: {
            flexDirection: "row",
            backgroundColor: colors.fieldColor
        },
        listContentRight: {
            paddingHorizontal: 10,
            paddingVertical: 2,
            flex: 1
        },
        listContentRow: {
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5
        },
    })

    return (
        <View style={[styles.listContent, style]}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
                <Image source={{uri: image}} style={styles.listImage}/>
            </TouchableOpacity>
            <View style={styles.listContentRight}>
                <Text headline semibold numberOfLines={1}>
                    {name}
                </Text>
                <View style={styles.listContentRow}>
                    <Icon
                        name="map-marker-alt"
                        color={colors.lightPrimaryColor}
                        size={10}
                    />
                    <Text
                        caption1
                        grayColor
                        style={{
                            marginLeft: 3
                        }}
                        numberOfLines={1}
                    >
                        {location}
                    </Text>
                </View>
                <View style={styles.listContentRow}>
                    <Rating
                        startingValue={rate}
                        imageSize={10}
                        tintColor={colors.backgroundPrimaryColor}
                        readonly
                    />
                    <Text
                        caption1
                        grayColor
                        semibold
                        style={{
                            marginLeft: 10,
                            marginRight: 3
                        }}
                    >
                        Ratting
                    </Text>
                    <Text caption1 primaryColor semibold>
                        {rateCount}
                    </Text>
                </View>
                <Text
                    title3
                    primaryColor
                    semibold
                    style={{marginTop: 5, marginBottom: 5}}
                >
                    {price}
                </Text>
                <Text caption1 semibold>
                    AVG/NIGHT
                </Text>
                <Text footnote accentColor style={{marginTop: 3}}>
                    {available}
                </Text>
            </View>
        </View>
    );
}

HotelItemList.propTypes = {};

export default HotelItemList;
