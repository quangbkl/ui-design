import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from 'native-base';
import {Text} from 'components/index';
import {BaseColor} from 'config/color';

const Review = ({item}) => {
	const {generalInformation, includes, excludes} = item;
	return (
		<Container>
			<ScrollView>
				<Text>review</Text>
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
export default Review;
