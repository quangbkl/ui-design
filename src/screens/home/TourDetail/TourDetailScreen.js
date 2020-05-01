import React, {Component} from 'react'
import { ScrollableTabView, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview'
import {Container} from 'native-base';
import {Header, Button, Text} from 'components';
import {BaseColor} from 'config/color';
import Preview from 'components/BookingHistory/Preview';
import Confirm from 'components/BookingHistory/Confirm';
import Complete from 'components/BookingHistory/Complete';
import Detail from 'components/BookingHistory/Detail';
import {ImageBackground, StyleSheet, View} from 'react-native';

const TourDetailScreen = () => {
	const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR35uSBKPVv-b_w74wr-w5jwn9HMdB69mJhCmTmHzX0pc88dPFzYCXl4ywjly3--Bk&usqp=CAU';
	const tabBarUnderlineStyle = {
		backgroundColor: BaseColor.primaryColor,
		height: 1,
		width: '25%'
	};
	return (
		<Container>
			<Header title={'Travel Agency'}/>
			<View style={styles.authorContainer}>
				<View style={styles.authorLeft}>
					<ImageBackground
						source={{uri: avatar}}
						style={styles.avatar}
						imageStyle={{borderRadius: 40}}
					/>
					<Button style={styles.follow}>+ Follow</Button>
				</View>
				<View style={styles.authorRight}>
					<Text style={styles.name}>Steve Garrett</Text>
					<Text style={styles.agency}>Travel Agency</Text>
					<Text style={styles.corporation}>Singapore, Golden Mile</Text>
					<View style={styles.indicator}>
						<View style={styles.indicatorItem}>
							<Text style={styles.indicatorItemValue}>97.01%</Text>
							<Text style={{...styles.indicatorItemTitle}}>Feedback</Text>
						</View>
						<View style={styles.indicatorItem}>
							<Text style={{...styles.indicatorItemValue, textAlign: 'center'}}>999</Text>
							<Text style={{...styles.indicatorItemTitle}}>Items</Text>
						</View>
						<View style={styles.indicatorItem}>
							<Text style={{...styles.indicatorItemValue, textAlign: 'right'}}>120K</Text>
							<Text style={{...styles.indicatorItemTitle}}>Followers</Text>
						</View>
					</View>
				</View>
			</View>
			<ScrollableTabView
				renderTabBar={() => <ScrollableTabBar/>}
				tabBarActiveTextColor={BaseColor.textPrimaryColor}
				tabBarInactiveTextColor={BaseColor.dividerColor}
				tabBarUnderlineStyle={tabBarUnderlineStyle}
				tabBarTextStyle={{fontFamily: 'Roboto', fontSize: 18, fontWeight: '300'}}
			>
				<Preview tabLabel="     Preview     " />
				<Confirm tabLabel="     Confirm     " />
				<Complete tabLabel="    Complete    " />
				<Detail tabLabel="     Detail     " />
			</ScrollableTabView>
		</Container>
	)
};
const styles = StyleSheet.create({
	authorContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginTop: 10,
		marginLeft: 15,
		marginRight: 15,
	},
	authorLeft: {
	
	},
	avatar: {
		width: 80,
		height: 80
	},
	follow: {
		marginTop: 10,
		width: 80,
		height: 25,
		color: BaseColor.whiteColor,
		borderRadius: 15,
		backgroundColor: BaseColor.primaryColor,
		fontSize: 15,
		textAlignVertical: 'center',
		alignItems: 'center'
	},
	authorRight: {
		flex: 100,
		marginLeft: 15,
		flexDirection: 'column',
		justifyContent: 'space-between',
		marginRight: 30
	},
	name: {fontSize: 20, fontWeight: '600'},
	agency: {color: 'red', fontSize: 16},
	corporation: {fontSize: 14, color: BaseColor.textPrimaryColor, opacity: 0.7},
	indicator: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 15
	},
	indicatorItem: {
	
	},
	indicatorItemValue: {fontWeight: '700', color: BaseColor.textPrimaryColor, fontSize: 15},
	indicatorItemTitle: {fontWeight: '400', color: BaseColor.textPrimaryColor, fontSize: 15, opacity: 0.6},
});
export default TourDetailScreen;

