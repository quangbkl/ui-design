import React from 'react';
import {FlatList, Image, TouchableOpacity, View, StyleSheet} from "react-native";
import Icon from "../Icon/Icon";
import Text from "../../components/Text/Text";
import Tag from "../Tag/Tag";
import {Rating} from 'react-native-ratings';
import useApp from "../../hooks/app/useApp";
import {useNavigation} from "@react-navigation/native";
import scaleWithPixel from "../../helpers/scaleWithPixel";

const HotelItemBlock = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const navigation = useNavigation();

    const {
        style,
        image,
        name,
        location,
        price,
        available,
        rate,
        rateStatus,
        onPress,
        onPressTag,
        services
    } = props;

    const styles = StyleSheet.create({
        blockImage: {
            height: scaleWithPixel(200),
            width: "100%"
        },
        blockContentAddress: {
            flexDirection: "row",
            marginTop: 3,
            alignItems: "center"
        },
        blockContentDetail: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: 10
        },
        blockListContentIcon: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: 50,
            width: "100%",
            marginTop: 4
        },
        contentService: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginTop: 10,
            borderColor: colors.fieldColor,
            borderBottomWidth: 1
        },
        serviceItemBlock: {
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
            width: 60
        },
    })

    return (
        <View style={style}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
                <Image source={{uri: image}} style={styles.blockImage}/>
            </TouchableOpacity>
            <View style={{paddingHorizontal: 20}}>
                <Text
                    title2
                    semibold
                    style={{marginTop: 5}}
                    numberOfLines={1}
                >
                    {name}
                </Text>
                <View style={styles.blockContentAddress}>
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
                <View style={styles.blockContentDetail}>
                    <View>
                        <Text title3 primaryColor semibold>
                            {price}
                        </Text>
                        <Text
                            caption1
                            accentColor
                            style={{
                                marginTop: 3
                            }}
                            numberOfLines={1}
                        >
                            {available}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row"
                        }}
                    >
                        <Tag onPress={onPressTag} rate>
                            {rate}
                        </Tag>
                        <View
                            style={{
                                marginLeft: 10
                            }}
                        >
                            <Text
                                caption1
                                grayColor
                                semibold
                                style={{paddingBottom: 5}}
                            >
                                {rateStatus}
                            </Text>
                            <Rating
                                startingValue={rate}
                                imageSize={10}
                                tintColor={colors.backgroundPrimaryColor}
                                readonly
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.contentService}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={services}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item, index}) => (
                        <View
                            style={styles.serviceItemBlock}
                            key={"block" + index}
                        >
                            <Icon
                                name={item.icon}
                                size={16}
                                color={colors.accentColor}
                            />
                            <Text
                                overline
                                grayColor
                                style={{marginTop: 4}}
                                numberOfLines={1}
                            >
                                {item.name}
                            </Text>
                        </View>
                    )}
                />
                <TouchableOpacity
                    style={{
                        alignItems: "flex-end",
                        justifyContent: "center",
                        width: 16
                    }}
                >
                    <Icon
                        name="angle-right"
                        size={16}
                        color={colors.grayColor}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

HotelItemBlock.propTypes = {};

export default HotelItemBlock;
