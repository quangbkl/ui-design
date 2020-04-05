import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import Button from "../Button/Button";

const HotelCard = (props) => {
	const{item } = props;
	const {image, title, country} = item;
	return (
		<View style={styles.container}
		>
			<Image
				source={{uri: image}}
				style={styles.image}
			>
			</Image>
			<Text style={styles.title}> {title} </Text>
			<Text style={styles.country}> {country} </Text>
			<Button
				style={{
					backgroundColor: '#e5634d',
					borderRadius: 5,
					height: 25,
					position: 'absolute',
					top: 210,
					left: 5,
					paddingVertical: 5
				}}
				children={'Book Now'}
				onPress={() =>{
					alert('fjkasfjka')
				}}
			>
			</Button>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		width: 200,
		height: 250,
		marginTop: 10,
		marginRight: 20,
		position: 'relative',
		backgroundColor: '#f4f4f4'
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 15,
	},
	title: {
		top: 140,
		fontSize: 15,
		fontWeight: '400',
		color: '#ffffff',
		position: 'absolute'
	},
	country: {
		top: 170,
		fontSize: 20,
		fontWeight: '500',
		color: '#ffffff',
		position: 'absolute'
	}
});

export default HotelCard;
