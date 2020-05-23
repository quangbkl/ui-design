import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import Text from 'components/Text/Text';
import {Button} from '../index';
import useApp from 'hooks/app/useApp';

const ProgressBooking = props => {
	const {headerContext, middleContext, footerContext, onPress, children} = props;
	const {state: appState} = useApp();
	const {color} = appState;
	return (
		<View style={styles.container}>
			<View>
				<Text footnote textPrimaryColor>{headerContext}</Text>
				<Text title4 style={{color: color.primaryColor}}>{middleContext}</Text>
				<Text footnote textPrimaryColor>{footerContext}</Text>
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
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 10,
		paddingBottom: 10,
	},
	left: {
		textAlign: 'center',
	},
	progressBooking: {
		width: 120,
		borderRadius: 10
	},
});

ProgressBooking.propTypes = {
	headerContext: PropTypes.string,
	middleContext: PropTypes.string,
	footerContext: PropTypes.string,
	onPress: PropTypes.func,
};

export default ProgressBooking;
