import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from 'native-base';
import {BaseColor} from 'config/color';
import {Button, ListItem, Text} from 'components';
import appRoutes from '../../../navigations/appRoutes';

const Packages = ({item, navigation}) => {
	const {packages} = item;
	const {description, standard, luxury} = packages;
	return (
		<Container>
			<ScrollView>
				<View style={styles.container}>
					<Text>{description}</Text>
					<View style={styles.package}>
						<Text style={styles.title}>{standard.title}</Text>
						<View style={{flexDirection: 'row', marginTop: 10}}>
							<Text style={styles.price}>{standard.price}</Text>
							<Text style={styles.type}>{standard.type}</Text>
						</View>
						<Text style={styles.description}>{standard.description}</Text>
						<Button
							style={styles.bookNow}
							onPress={() => {navigation.navigate(appRoutes.CHECKOUT_REVIEW, {touId: 1})}}
						>Book Now</Button>
					</View>
					<View style={styles.package}>
						<Text style={styles.title}>{luxury.title}</Text>
						<View style={{flexDirection: 'row', marginTop: 10}}>
							<Text style={styles.price}>{luxury.price}</Text>
							<Text style={styles.type}>{luxury.type}</Text>
						</View>
						<Text style={styles.description}>{luxury.description}</Text>
						<ListItem style={{...styles.listItem, marginTop: 10, borderTopWidth: 1}}>
							<Text style={styles.specialTitle}>{luxury.specialService[0].title}</Text>
							<Text style={styles.specialValue}>{luxury.specialService[0].shortDescription}</Text>
						</ListItem>
						<ListItem style={styles.listItem}>
							<Text style={styles.specialTitle}>{luxury.specialService[1].title}</Text>
							<Text style={styles.specialValue}>{luxury.specialService[1].shortDescription}</Text>
						</ListItem>
						<ListItem style={styles.listItem}>
							<Text style={styles.specialTitle}>{luxury.specialService[2].title}</Text>
							<Text style={styles.specialValue}>{luxury.specialService[2].shortDescription}</Text>
						</ListItem>
						<ListItem style={{...styles.listItem, borderBottomWidth: 0}}>
							<Text style={styles.specialTitle}>{luxury.specialService[3].title}</Text>
							<Text style={styles.specialValue}>{luxury.specialService[3].shortDescription}</Text>
						</ListItem>
						<Button
							style={styles.bookNow}
							onPress={() => {navigation.navigate(appRoutes.CHECKOUT_REVIEW, {touId: 1})}}
						>Book Now</Button>
					</View>
				</View>
			</ScrollView>
		</Container>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		marginLeft: 20,
		marginRight: 20
	},
	package: {
		marginTop: 15,
		backgroundColor: BaseColor.fieldColor,
		borderRadius: 10,
		padding: 10
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
	},
	price: {
		fontSize: 25,
		fontWeight: '700',
		color: 'red'
	},
	type: {
		fontSize: 14,
		marginLeft: 15,
		color: BaseColor.accentColor,
	},
	description: {
		marginTop: 10
	},
	bookNow: {
		marginTop: 10,
	},
	listItem: {
		flexDirection: 'column',
		paddingTop: 10,
		paddingBottom: 10,
	},
	specialTitle: {
		fontSize: 20,
		color: BaseColor.accentColor,
	},
	specialValue: {
		fontSize: 16,
		color: BaseColor.textPrimaryColor,
		opacity: 0.6
	}
});
export default Packages;
