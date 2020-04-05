import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Touchable from '../Touchable/Touchable';

const TourCard = (props) => {
	const{ onPress, item } = props;
	const {image, title} = item;
	return (
		<Touchable style={styles.container} onPress={onPress}
		>
			<ImageBackground
				source={{uri: image}}
				style={styles.image}
        imageStyle={{ borderRadius: 15 }}
			>
        <Text style={styles.title}> {title} </Text>
			</ImageBackground>
		</Touchable>
	)
};
const styles = StyleSheet.create({
	container: {
    flex: 1,
		width: 140,
		height: 160,
		marginTop: 10,
		marginRight: 20,
		backgroundColor: '#f4f4f4',
	},
	image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: 'center',
	},
	title: {
		fontSize: 17,
		fontWeight: '400',
		color: '#ffffff',
    marginBottom: 10
	}
});

export default TourCard;
