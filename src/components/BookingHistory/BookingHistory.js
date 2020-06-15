import React from "react";
import {StyleSheet, Text, View, ViewPropTypes} from "react-native";
import PropTypes from "prop-types";
import {Touchable} from "../index";
import {BaseColor} from "config/color";
import useApp from "hooks/app/useApp";

const BookingHistory = (props) => {
    const {onPress, item} = props;
    const {checkIn, checkOut, guest, room, noOfRooms, hotel, price} = item;
    const {state: appState} = useApp();
    const {color} = appState;
    return (
        <Touchable
            onPress={onPress}
            style={{...styles.container, backgroundColor: color.primaryColor}}
        >
            <Text style={styles.header}>{hotel}</Text>
            <Text style={styles.header}>{room} (x{noOfRooms}) - {guest} khách</Text>
            <View style={styles.content}>
                <View style={styles.checkInOut}>
                    <Text style={styles.checkInOutProperty}>Check In</Text>
                    <Text style={styles.checkInOutProperty}>Check Out</Text>
                </View>
                <View style={styles.checkInOut}>
                    <Text style={styles.checkInOutValue}>{checkIn}</Text>
                    <Text style={styles.checkInOutValue}>{checkOut}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text>
                    Chờ thanh toán ...
                </Text>
                <Text style={{right: 2}}>{price} VNĐ</Text>
            </View>
        </Touchable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        maxHeight: 185,
    },
    header: {
        width: "100%",
        height: 35,
        padding: 10,
        alignItems: "center",
        borderBottomWidth: 1,
        color: BaseColor.whiteColor,
        borderBottomColor: BaseColor.whiteColor,
    },
    content: {
        width: "100%",
        height: 77,
        padding: 10,
        paddingTop: 15,
        alignItems: "center",
        color: BaseColor.whiteColor,
    },
    checkInOut: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    checkInOutProperty: {
        color: BaseColor.whiteColor,
        fontSize: 13,
    },
    checkInOutValue: {
        color: BaseColor.whiteColor,
        fontSize: 16,
        fontWeight: "500",
    },
    footer: {
        width: "100%",
        padding: 10,
        alignItems: "center",
        backgroundColor: BaseColor.dividerColor,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
    },
});

BookingHistory.propTypes = {
    name: PropTypes.string.isRequired,
    checkIn: PropTypes.string,
    checkOut: PropTypes.string,
    total: PropTypes.string,
    price: PropTypes.string,
    style: ViewPropTypes.style,
};

export default BookingHistory;
