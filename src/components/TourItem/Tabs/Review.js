import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from 'native-base';
import {Text} from 'components/index';
import {BaseColor} from 'config/color';
import {Rating} from 'react-native-ratings';
import {getRatePerFive} from 'helpers/tour';
import useApp from 'hooks/app/useApp';

const Review = ({item}) => {
	const {generalInformation, includes, excludes} = item;
	const {state: appState} = useApp();
	const {color} = appState;
	return (
		<Container>
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.ratingContent}>
						<View style={styles.score}>
							<Text style={{fontSize: 25, color: color.primaryColor}}>{getRatePerFive(item)}</Text>
							<Text>out of 5</Text>
						</View>
						<View style={styles.ratingDetail}>
							<View style={styles.starBlock}>
								<Rating
									type='custom'
									startingValue={5}
									imageSize={14}
									readonly
									style={styles.starItem}
									ratingColor={BaseColor.dividerColor}
								/>
								<Rating
									type='custom'
									startingValue={4}
									imageSize={14}
									readonly
									ratingCount={4}
									style={styles.starItem}
									ratingColor={BaseColor.dividerColor}
								/>
								<Rating
									type='custom'
									startingValue={3}
									imageSize={14}
									readonly
									ratingCount={3}
									style={styles.starItem}
									ratingColor={BaseColor.dividerColor}
								/>
								<Rating
									type='custom'
									startingValue={2}
									imageSize={14}
									readonly
									ratingCount={2}
									style={styles.starItem}
									ratingColor={BaseColor.dividerColor}
								/>
								<Rating
									type='custom'
									startingValue={1}
									imageSize={14}
									readonly
									ratingCount={1}
									style={styles.starItem}
									ratingColor={BaseColor.dividerColor}
								/>
							</View>
							<View style={styles.scoreDetail}>
							
							</View>
						</View>
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
		marginRight: 20,
	},
	ratingContent: {
		flex: 1,
		flexDirection: 'row',
	},
	score: {
		flex: 30,
		flexDirection: 'column',
	},
	ratingDetail: {
		marginLeft: 15,
		flex: 70,
		flexDirection: 'row',
	},
	starBlock: {
		flex: 40,
		
	},
	scoreDetail: {
		flex: 60,
	},
	starItem: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		
	},
});
export default Review;
