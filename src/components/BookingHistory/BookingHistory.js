import React from "react";
import {StyleSheet, Text, View, ViewPropTypes} from "react-native";
import PropTypes from "prop-types";
import {Touchable} from "../index";
import {BaseColor} from "config/color";
import useApp from "hooks/app/useApp";
import { status } from '../../constants/booking';
import { useNavigation } from '@react-navigation/native';
import appRoutes from "../../navigations/appRoutes";

const numberWithDots = (x) => {
    if (!x) return "";
    const [number, decimal] = x.toString().split(".");
    const separateNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return decimal ? [separateNumber, decimal].join() : separateNumber;
  };

const renderStatus = (code) => {
    const stt = status.find(x => x.code === code);
    return stt && stt.name;
}

const BookingHistory = (props) => {
    const {item} = props;
    const {state: appState} = useApp();
    const navigation = useNavigation();
    const {color} = appState;
    const onPress = () => {
        if (item.status === 'pending_payment' || item.status === 'pending_confirm') {
            navigation.navigate(appRoutes.BOOKING_AUTHENTICATE, { bookingId: item.id })
        }
    }
    return (
        <Touchable
            onPress={onPress}
            style={{...styles.container, backgroundColor: color.primaryColor}}
        >
            <Text style={styles.header}>{item.hotel.name}</Text>
            <Text style={styles.header}>{item.roomType === 'standard' ? 'Phòng tiêu chuẩn' : 'Phòng cao cấp'} (x{item.rooms}) - {item.guests} khách</Text>
            <View style={styles.content}>
                <View style={styles.checkInOut}>
                    <Text style={styles.checkInOutProperty}>Check In</Text>
                    <Text style={styles.checkInOutProperty}>Check Out</Text>
                </View>
                <View style={styles.checkInOut}>
                    <Text style={styles.checkInOutValue}>{item.checkinDate}</Text>
                    <Text style={styles.checkInOutValue}>{item.checkoutDate}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text>
                    {renderStatus(item.status)}
                </Text>
                <Text style={{right: 2}}>{numberWithDots(item.grandTotal)} VNĐ</Text>
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
