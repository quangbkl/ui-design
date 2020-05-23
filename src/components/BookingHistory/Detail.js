import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Container} from 'native-base';
import Text from 'components/Text/Text';
import {CustomIcon} from 'components/index';
import useApp from 'hooks/app/useApp';

const Detail = () => {
	const {state: appState} = useApp();
	const {color} = appState;
	return (
		<Container>
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.content}>
						<CustomIcon type={'copy'} color={color.primaryColor} size={50} />
						<Text style={styles.title}>Booking ID 01233</Text>
						<Text style={styles.description}>Thank you. Your order has been completed. The SRR Secretariat will be in contact with via email to confirm your registration and send you details for the meeting</Text>
					</View>
				</View>
			</ScrollView>
		</Container>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		marginLeft: 20,
		marginRight: 20
	},
	content: {
		alignItems: 'center'
	},
	title: {
		marginTop: 20,
		fontSize: 25,
		fontWeight: '700'
	},
	description: {
		marginTop: 20,
		fontSize: 18,
		textAlign: 'center'
	}
});
export default Detail;
