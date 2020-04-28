import React from 'react';
import {ViewPropTypes, Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Touchable} from '../index';
import {BaseColor} from 'config/color';

// Preview component: http://passionui.com/wp-content/uploads/2019/07/2019-07-21_1223.png
const BookingHistory = (props) => {
	const {onPress, item} = props;
	const {name, checkIn, checkOut, duration, price} = item;
    return (
    	<Touchable onPress={onPress} style={styles.container}>
		    <Text style={styles.header}>{name}</Text>
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
			    <Text>{duration}</Text>
			    <Text style={{right: 2}}>{price}</Text>
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
		backgroundColor: BaseColor.primaryColor,
		borderRadius: 10
	},
	header: {
		width: '100%',
		height: 35,
		padding: 10,
		alignItems: 'center',
		borderBottomWidth: 1,
		color: BaseColor.whiteColor,
		borderBottomColor: BaseColor.whiteColor,
	},
	content: {
		width: '100%',
		height: 77,
		padding: 10,
		paddingTop: 15,
		alignItems: 'center',
		color: BaseColor.whiteColor,
	},
	checkInOut: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	checkInOutProperty: {
		color: BaseColor.whiteColor,
		fontSize: 13
	},
	checkInOutValue: {
		color: BaseColor.whiteColor,
		fontSize: 16,
		fontWeight: '500'
	},
	footer: {
		width: '100%',
		height: 29,
		padding: 10,
		alignItems: 'center',
		backgroundColor: BaseColor.dividerColor,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomStartRadius: 10,
		borderBottomEndRadius: 10,
	}
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
