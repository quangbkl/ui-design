import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const TourCard = (props) => {
	const{item } = props;
	const {image, title} = item;
	return (
		<View style={styles.container}
		>
			<Image
				source={{uri: image}}
				style={styles.image}
			>
			</Image>
			<Text style={styles.title}> {title} </Text>
		</View>
	)
};
const styles = StyleSheet.create({
	container: {
		width: 160,
		height: 140,
		marginTop: 10,
		marginRight: 20,
		position: 'relative',
		backgroundColor: '#f4f4f4'
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 15
	},
	title: {
		top: 110,
		fontSize: 15,
		fontWeight: '400',
		color: '#ffffff',
		position: 'absolute'
	}
});

export default TourCard;
