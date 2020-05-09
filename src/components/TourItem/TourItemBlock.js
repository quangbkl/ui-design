import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
// https://github.com/uuidjs/uuid#getrandomvalues-not-supported
import 'react-native-get-random-values';
import {getImageTour, getPricePerParticipant, getRatePerFive} from 'helpers/tour';
import {BaseColor} from 'config/color';
import {Button} from '../index';
import appRoutes from 'navigations/appRoutes';
import {useNavigation} from '@react-navigation/native';
import useApp from 'hooks/app/useApp';

const TourItemBlock = ({item}) => {
	const navigation = useNavigation();
	const {title, author, ratePercent} = item;
	const {name, avatar} = author;
	const {state: appState} = useApp();
	const {color} = appState;
	return (
		<View>
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image
						style={styles.largeImage}
						source={{
							uri: getImageTour(item),
						}}
					/>
				</View>
				<Button style={{...styles.buttonPrice, backgroundColor: color.primaryColor}}>{getPricePerParticipant(item)}</Button>
			</View>
			<View>
				<View style={styles.information}>
					<ImageBackground
						source={{uri: avatar}}
						style={styles.avatar}
						imageStyle={{borderRadius: 30}}
					>
						<Text style={{...styles.score, backgroundColor: color.primaryColor}}>9.5</Text>
					</ImageBackground>
					<View style={{marginLeft: 15}}>
						<Text style={{fontSize: 20, fontWeight: '600'}}>{title}</Text>
						<Text>by {name}</Text>
					</View>
				</View>
				<View style={styles.ratingContainer}>
					<View style={{
						flexDirection: 'row',
						justifyContent: 'flex-start',
						alignItems: 'center',
						
					}}>
						<Rating
							startingValue={getRatePerFive(item)}
							imageSize={12}
							readonly
							style={styles.rating}
						/>
						<Text style={{color: BaseColor.textPrimaryColor, opacity: 0.6}}>Rating </Text>
						<Text style={{color: color.primaryColor}}>{ratePercent} of 100</Text>
					</View>
					<Button
						style={{...styles.bookNow, borderColor: color.primaryColor, color: color.primaryColor}}
						onPress={() => navigation.navigate(appRoutes.CHECKOUT_REVIEW, {tourId: item.id})}
					>Book now</Button>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'relative',
	},
	imageContainer: {
		marginTop: 10,
	},
	largeImage: {
		width: '100%',
		height: 200,
	},
	buttonPrice: {
		position: 'absolute',
		width: 100,
		height: 40,
		top: 20,
		left: 20,
		color: 'white',
		fontWeight: '700'
	},
	information: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginTop: 15,
		marginLeft: 15,
		marginRight: 15,
	},
	avatar: {
		width: 60,
		height: 60,
		position: 'relative',
	},
	score: {
		width: 20,
		height: 20,
		borderRadius: 10,
		position: 'absolute',
		top: 35,
		right: -5,
		color: BaseColor.whiteColor,
		fontSize: 12,
		textAlign: 'center',
		alignItems: 'center',
	},
	ratingContainer: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 15,
		marginRight: 15,
	},
	bookNow: {
		width: 90,
		height: 35,
		backgroundColor: BaseColor.fieldColor,
		borderWidth: 1,
		borderRadius: 20,
	},
});

export default TourItemBlock;
