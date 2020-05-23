import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Container} from 'native-base';
import Header from 'components/Header/Header';
import Text from 'components/Text/Text';
import appRoutes from '../../../navigations/appRoutes';
import {useNavigation} from '@react-navigation/native';
import {CustomIcon, ListItemAngleRight} from 'components';

const PaymentMethodsScreen = () => {
	const navigation = useNavigation();
	const handleNavigate = (route) => () => {
		return navigation.navigate(route);
	};
	return (
		<Container >
			<Header title="Payment Method" />
			<ScrollView style={styles.container}>
				<View style={{width: '100%'}}>
					<ListItemAngleRight onPress={handleNavigate(appRoutes.PAYMENT_METHOD)}>
						<View style={styles.icon}>
							<CustomIcon type={'credit-card'} color={'black'} size={28} />
						</View>
						<Text style={styles.payment}>Domestic Card</Text>
					</ListItemAngleRight>
					<ListItemAngleRight onPress={handleNavigate(appRoutes.PAYMENT_METHOD)}>
						<View style={styles.icon}>
							<CustomIcon type={'cc-visa'} color={'black'} size={28} />
						</View>
						<Text style={styles.payment}>Credit Card</Text>
					</ListItemAngleRight>
					<ListItemAngleRight onPress={handleNavigate(appRoutes.PAYMENT_METHOD)}>
						<View style={styles.icon}>
							<CustomIcon type={'globe'} color={'black'} size={28} />
						</View>
						<Text style={styles.payment}>Internet Banking</Text>
					</ListItemAngleRight>
					<ListItemAngleRight onPress={handleNavigate(appRoutes.PAYMENT_METHOD)}>
						<View style={styles.icon}>
							<CustomIcon type={'mobile-alt'} color={'black'} size={28} />
						</View>
						<Text style={styles.payment}>Mobile Wallets</Text>
					</ListItemAngleRight>
				</View>
			</ScrollView>
		</Container>
	
	);
};

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10,
	},
	icon: {
		width: 40,
		alignItems: 'center'
	},
	payment: {
		marginLeft: 10,
		marginTop: 2,
		// textAlignVertical: 'center',
	}
});
export default PaymentMethodsScreen;
