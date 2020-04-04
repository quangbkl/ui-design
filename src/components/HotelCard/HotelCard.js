import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const HotelCard = (props) => {
	const{item } = props;
	const {image, title, country} = item;
	return (
		<View style={styles.HotelCard} >
			<Image
				source={{uri: image}}
				style={styles.Image}
			>
			</Image>
			<Text style={styles.AttractionActivities}> {title} </Text>
			<Text style={styles.Barcelona}> {country} </Text>
		</View>
	)
};

const styles = StyleSheet.create({
	HotelCard: {
		width: 200,
		height: 250,
		marginTop: 10,
		marginRight: 20,
		position: 'relative',
		backgroundColor: '#f4f4f4'
	},
	Image: {
		width: '100%',
		height: '100%',
		borderRadius: 15,
	},
	AttractionActivities: {
		top: 140,
		fontSize: 15,
		fontWeight: '400',
		color: '#ffffff',
		position: 'absolute'
	},
	Barcelona: {
		top: 170,
		fontSize: 20,
		fontWeight: '500',
		color: '#ffffff',
		position: 'absolute'
	}
});

export default HotelCard;
