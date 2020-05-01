import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Container} from 'native-base';
import Header from 'components/Header/Header';
import Text from 'components/Text/Text';
import ProgressBooking from '../../../components/ProgressBooking/ProgressBooking';
import appRoutes from 'navigations/appRoutes';
import {useNavigation} from '@react-navigation/native';

const CheckoutReviewScreen = () => {
	const navigation = useNavigation();
	
	return (
		<Container>
			<Header title="Travel Agency"/>
			<Text>tour detail</Text>
		</Container>
	
	);
};

const styles = StyleSheet.create({
	container: {
		paddingLeft: 15,
		paddingRight: 15,
	},
	checkInOut: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	duration: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
});
export default CheckoutReviewScreen;
