import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import Text from 'components/Text/Text';
import {Button} from '../index';

const ProgressBooking = props => {
	const {headerContext, middleContext, footerContext, onPress, children} = props;
	
	return (
		<View style={styles.container}>
			<View>
				<Text footnote grayColor>{headerContext}</Text>
				<Text title3 darkPrimaryColor>{middleContext}</Text>
				<Text footnote grayColor>{footerContext}</Text>
			</View>
			<Button children={children} style={styles.progressBooking} onPress={onPress}/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderWidth: 0.5,
		borderTopColor: '#8b8b8b',
		padding: 15,
	},
	left: {
		textAlign: 'center',
	},
	progressBooking: {
		width: 100,
	},
});

ProgressBooking.propTypes = {
	headerContext: PropTypes.element,
	middleContext: PropTypes.element,
	footerContext: PropTypes.element,
	onPress: PropTypes.func,
};

export default ProgressBooking;
