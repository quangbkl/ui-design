import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from 'native-base';
import {ListItem, Text} from 'components/index';
import {BaseColor} from 'config/color';
import Gallery from './Gallery';

const Information = ({item}) => {
	const {generalInformation, includes, excludes} = item;
	return (
		<Container>
			<ScrollView>
				<View style={styles.container}>
					<ListItem style={styles.listItem}>
						<Text style={styles.ListItemProperty}>Location</Text>
						<Text style={styles.ListItemValue}>{generalInformation.location}</Text>
					</ListItem>
					<ListItem style={styles.listItem}>
						<Text style={styles.ListItemProperty}>Duration</Text>
						<Text style={styles.ListItemValue}>{generalInformation.duration}</Text>
					</ListItem>
					<ListItem style={styles.listItem}>
						<Text style={styles.ListItemProperty}>Departure</Text>
						<Text style={styles.ListItemValue}>{generalInformation.departure}</Text>
					</ListItem>
					<ListItem style={styles.listItem}>
						<Text style={styles.ListItemProperty}>Price per Participant</Text>
						<Text style={styles.ListItemValue}>{generalInformation.pricePerParticipant}</Text>
					</ListItem>
					<ListItem style={styles.listItem}>
						<Text style={styles.ListItemProperty}>Group size</Text>
						<Text style={styles.ListItemValue}>{generalInformation.groupSize}</Text>
					</ListItem>
					<ListItem style={styles.listItem}>
						<Text style={styles.ListItemProperty}>Transportation</Text>
						<Text style={styles.ListItemValue}>{generalInformation.transportation}</Text>
					</ListItem>
					
					<Gallery item={item}/>
					<View>
						<Text style={styles.titleBoot}>Includes</Text>
						<Text style={styles.contentBoot}>{includes}</Text>
					</View>
					<View>
						<Text style={styles.titleBoot}>Excludes</Text>
						<Text style={styles.contentBoot}>{excludes}</Text>
					</View>
				</View>
			</ScrollView>
		</Container>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 20,
		marginRight: 20
	},
	listItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 30
	},
	ListItemProperty: {
		color: BaseColor.textPrimaryColor,
		fontSize: 15,
		fontWeight: '400',
		opacity: 0.7
	},
	ListItemValue: {
		color: BaseColor.accentColor,
		fontSize: 15,
		fontWeight: '700',
	},
	titleBoot: {
		marginTop: 15,
		fontWeight: '700',
		fontSize: 18
	},
	contentBoot: {
		marginTop: 10,
	}
});
export default Information;
