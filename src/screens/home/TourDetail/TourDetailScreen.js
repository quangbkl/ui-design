import React from 'react';
import {ScrollableTabBar, ScrollableTabView} from '@valdio/react-native-scrollable-tabview';
import {Container} from 'native-base';
import {Button, Header, Text} from 'components';
import {BaseColor} from 'config/color';
import {ImageBackground, StyleSheet, View} from 'react-native';
import appRoutes from 'navigations/appRoutes';
import ProgressBooking from 'components/ProgressBooking/ProgressBooking';
import {useNavigation} from '@react-navigation/native';
import Information from 'components/TourItem/Tabs/Information';
import tourDB from '__mocks__/db/tours-db';
import {normalizeNumber} from 'helpers/number';
import Tour from 'components/TourItem/Tabs/Tour';
import Packages from 'components/TourItem/Tabs/Packages';
import Review from 'components/TourItem/Tabs/Review';
import useApp from 'hooks/app/useApp';

const TourDetailScreen = () => {
	const item = tourDB.tours[0];
	const {author} = item;
	const navigation = useNavigation();
	const {state: appState} = useApp();
	const {color} = appState;
	const tabBarUnderlineStyle = {
		backgroundColor: color.primaryColor,
		height: 1,
		// width: '25%'
	};
	return (
		<Container>
			<Header title={'Travel Agency'}/>
			<View style={styles.authorContainer}>
				<View style={styles.authorLeft}>
					<ImageBackground
						source={{uri: author.avatar}}
						style={styles.avatar}
						imageStyle={{borderRadius: 40}}
					/>
					<Button style={{...styles.follow, backgroundColor: color.primaryColor}}>+ Follow</Button>
				</View>
				<View style={styles.authorRight}>
					<Text style={styles.name}>{author.name}</Text>
					<Text style={{...styles.agency, color: color.primaryColor}}>Travel Agency</Text>
					<Text style={styles.corporation}>{author.corporation}</Text>
					<View style={styles.indicator}>
						<View style={styles.indicatorItem}>
							<Text style={styles.indicatorItemValue}>{author.feedBack}%</Text>
							<Text style={{...styles.indicatorItemTitle}}>Feedback</Text>
						</View>
						<View style={styles.indicatorItem}>
							<Text style={{...styles.indicatorItemValue, textAlign: 'center'}}>{normalizeNumber(author.items)}</Text>
							<Text style={{...styles.indicatorItemTitle}}>Items</Text>
						</View>
						<View style={styles.indicatorItem}>
							<Text style={{...styles.indicatorItemValue, textAlign: 'right'}}>{normalizeNumber(author.followers)}</Text>
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
				showsHorizontalScrollIndicator={false}
			>
				<Information tabLabel="  Information  " item={item}/>
				<Tour tabLabel="     Tour     " item={item}/>
				<Packages tabLabel="   Packages   " item={item} navigation={navigation}/>
				<Review tabLabel="    Review   " item={item}/>
			</ScrollableTabView>
			<ProgressBooking
				headerContext={'2 Day / 1 Night'}
				middleContext={'$399.99'}
				footerContext={'2 Adults / 1 Children'}
				children={'Book Now'}
				onPress={() => navigation.navigate(appRoutes.CHECKOUT_REVIEW, {promosId: 1})}
			/>
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
		fontSize: 15,
		textAlign: 'center',
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
	agency: {fontSize: 16},
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

