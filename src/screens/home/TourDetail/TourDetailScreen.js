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
	const SeparatorCustom = () => {
		return (
			<View
				style={{
					height: 1,
					backgroundColor: '#8b8b8b',
					marginTop: 10,
					marginBottom: 10,
				}}
			/>
		);
	};
	return (
		<Container>
			<Header title="Travel Agency"/>
			<ScrollView>
				<View style={styles.container}>
					<View>
						<Text headline thin>Hotel</Text>
						<Text title3>Hilton San Francisco</Text>
						<SeparatorCustom/>
					</View>
					<View>
						<View style={styles.checkInOut}>
							<Text headline thin style={{right: 0}}>Check In</Text>
							<View>
								<Text headline>Check In</Text>
								<Text subhead grayColor>Sun, 14:00</Text>
							</View>
						</View>
						<View style={styles.checkInOut}>
							<Text headline thin>Check Out</Text>
							<View>
								<Text headline>Check Out</Text>
								<Text subhead grayColor>Mon, 14:00</Text>
							</View>
						</View>
						<View style={styles.duration}>
							<Text headline thin>Duration</Text>
							<Text headline>1 Night</Text>
						</View>
						<SeparatorCustom/>
					</View>
					<View>
						<Text headline thin>Room</Text>
						<Text title3>Standard Twin Room (x1)</Text>
						<Text subhead>Standard Twin Room (x1)Standard Twin Room (x1)Standard Twin Room (x1)Standard Twin
							Room (x1)Standard Twin Room (x1)Standard Twin Room (x1)Standard Twin Room (x1)Standard Twin
							Room (x1)Standard Twin Room (x1)</Text>
						<SeparatorCustom/>
					</View>
					<View>
						<Text headline thin>Contact Name</Text>
						<Text title3>Standard Twin Room (x1)</Text>
						<Text subhead grayColor>Standard Twin Standard m (x1)Standard Twin Room (x1)Standard TwiStandard Twin
							Standard m (x1)Standard Twin Room (x1)Standard TwiStandard Twin Standard m (x1)Standard Twin
							Room (x1)Standard Twin Room (x1)Standard Twin Room (x1)Standard Twin Room (x1)</Text>
						<SeparatorCustom/>
					</View>
					<View style={{marginTop: 10, bottom: 10}}>
						<Text headline thin>Price Details</Text>
						<Text title3>Standard Twin Room (x1)</Text>
					</View>
				</View>
			</ScrollView>
			<ProgressBooking
				headerContext={'16 Days'}
				middleContext={'$2199.99'}
				footerContext={'3 participants'}
				children={'Book Now'}
				onPress={() => navigation.navigate(appRoutes.CHECKOUT)}
			/>
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
