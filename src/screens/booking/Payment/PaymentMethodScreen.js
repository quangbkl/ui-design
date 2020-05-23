import React, {useState} from 'react';
import {ScrollView, StyleSheet, Switch, View} from 'react-native';
import {Container} from 'native-base';
import Header from 'components/Header/Header';
import Text from 'components/Text/Text';
import appRoutes from 'navigations/appRoutes';
import {useNavigation} from '@react-navigation/native';
import {Button, TextInput} from 'components';
import useApp from 'hooks/app/useApp';

const CheckoutReviewScreen = () => {
	const navigation = useNavigation();
	const [reminders, setReminders] = useState(false);
	const {state: appState} = useApp();
	const {i18n} = appState;
	const toggleSwitch = () => setReminders(value => !value);
	return (
		
		<Container>
			<Header title="Payment Method" />
			<ScrollView>
				<View style={styles.container}>
					<View style={{
						borderBottomWidth: 1,
						borderBottomColor: '#000',
						marginBottom: 15
					}}>
						<Text style={{marginBottom: 10}} headline>Credit Card Details</Text>
						<TextInput style={{height: 40, marginBottom: 10}} placeholder={'Credit Card Number'}/>
						<View
							style={{
								flex: 2,
								flexDirection: 'row',
								justifyContent: 'space-between',
								marginBottom: 10
							}}
						>
							<TextInput style={{flex: 65, height: 40}} placeholder={'Valid Until'}/>
							<Text style={{flex: 5, height: 40}}></Text>
							<TextInput style={{flex: 35, height: 40}} placeholder={'3-Digit CCV'}/>
						</View>
						<TextInput style={{height: 40, marginBottom: 10}} placeholder={'Name on card'}/>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
						<Text>Set as primary</Text>
						<Switch size={18} value={reminders} onValueChange={toggleSwitch}/>
					</View>
				</View>
			</ScrollView>
			<Button
				style={styles.payNowButton}
				children={i18n.t('main.booking.payment_method.pay_now')}
				onPress={() => navigation.navigate(appRoutes.BOOKING_DETAIL)}
			/>
		</Container>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingLeft: 15,
		paddingRight: 15,
		marginTop: 20
	},
	payNowButton: {
		marginBottom: 10,
		marginLeft: 10,
		marginRight: 10
	}
});
export default CheckoutReviewScreen;
