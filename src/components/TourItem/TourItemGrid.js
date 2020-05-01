import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	Image,
} from 'react-native';
import {getImageTour, getDuration, getPricePerParticipant} from 'helpers/tour';
import {BaseColor} from 'config/color';
import CustomIcon from '../Icon/CustomIcon';

const widthItem = Dimensions.get('window').width / 2 - 30;

const TourItemGrid = ({item}) => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.largeImage}
				source={{
					uri: getImageTour(item),
				}}
			/>
			<View style={styles.locationBlock}>
				<CustomIcon type="map-marker-alt" size={13}/>
				<Text style={styles.locationText}>{item.location}</Text>
			</View>
			<Text style={styles.title}>{item.title}</Text>
			<Text style={styles.duration}>{getDuration(item)}</Text>
			<Text style={styles.price}>{getPricePerParticipant(item)}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: widthItem,
		marginTop: 5
	},
	largeImage: {
		width: '100%',
		height: 110,
		borderRadius: 6,
	},
	locationBlock: {
		flexDirection: 'row',
		marginTop: 5,
	},
	locationText: {
		marginLeft: 6,
		color: BaseColor.grayColor,
		fontSize: 13,
		lineHeight: 15,
	},
	title: {
		marginTop: 5,
		fontSize: 17,
	},
	duration: {
		marginTop: 5,
		fontSize: 15,
		color: BaseColor.accentColor
	},
	price: {
		marginTop: 5,
		color: BaseColor.primaryColor,
		fontSize: 20,
		fontWeight: '700'
	},
});

export default TourItemGrid;
