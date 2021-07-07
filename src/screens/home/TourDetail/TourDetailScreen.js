import React, {useEffect, useState} from 'react';
import {ScrollableTabBar, ScrollableTabView} from '@valdio/react-native-scrollable-tabview';
import {Container} from 'native-base';
import {Button, Header, Text} from 'components';
import {BaseColor} from 'config/color';
import {ActivityIndicator, ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
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
import {getRouterParam} from "../../../helpers/common";
import {getTour} from "../../../services/tourService";
import {formatPrice} from "../../../helpers/tour";

const TourDetailScreen = (props) => {
    // const item = tourDB.tours[0];
    // const {author} = item;
    const {state: appState} = useApp();
    const {color} = appState;
	const tourId = getRouterParam(props, "tourId");
	const bookInfo = getRouterParam(props, "bookInfo");
	const [tour, setTour] = useState();
	const [loading, setLoading] = useState(false);
	const navigation = useNavigation();
	const [visible, setVisible] = useState(false);
    const tabBarUnderlineStyle = {
        backgroundColor: color.primaryColor,
        height: 1,
    };
	
	useEffect(() => {
		if (tourId) {
			setLoading(true);
			getTour(tourId)
			.then((data) => {
				console.log(data);
				setTour(data.result.tour);
			})
			.finally(() => setLoading(false));
		}
	}, [tourId]);
	
	const handleBooking = (tour) => {
		setVisible(false);
		const informationBooking = {
			tour,
			...bookInfo,
		};
		navigation.navigate("BookingTourV2", { informationBooking });
	};
	
    return (
        <>
	            <Header title={'Travel Agency'}/>
		        {loading ? (
			        <ActivityIndicator size="large" color={`${color.primaryColor}`} />
		        ) : (
			        tour && (
				        <>
				            <View style={styles.authorContainer}>
				                <View style={styles.authorLeft}>
				                    <ImageBackground
				                        source={{uri: tour.organizerAvatar}}
				                        style={styles.avatar}
				                        imageStyle={{borderRadius: 40}}
				                    />
				                    <Button style={{...styles.follow, backgroundColor: color.primaryColor}}>+ Follow</Button>
				                </View>
				                <View style={styles.authorRight}>
				                    <Text style={styles.name}>{tour.organizerName}</Text>
				                    <Text style={{...styles.agency, color: color.primaryColor}}>Travel Agency</Text>
				                    <Text style={styles.corporation}>Golden Mile</Text>
				                    <View style={styles.indicator}>
				                        <View style={styles.indicatorItem}>
				                            <Text style={styles.indicatorItemValue}>97.01%</Text>
				                            <Text style={{...styles.indicatorItemTitle}}>Feedback</Text>
				                        </View>
				                        <View style={styles.indicatorItem}>
				                            <Text style={{
				                                ...styles.indicatorItemValue,
				                                textAlign: 'center'
				                            }}>999</Text>
				                            <Text style={{...styles.indicatorItemTitle}}>Items</Text>
				                        </View>
				                        <View style={styles.indicatorItem}>
				                            <Text style={{
				                                ...styles.indicatorItemValue,
				                                textAlign: 'right'
				                            }}>120k</Text>
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
				                tabBarTextStyle={{fontSize: 18, fontWeight: '300'}}
				                showsHorizontalScrollIndicator={false}
				            >
				                <Information tabLabel="  Information  " item={tour}/>
				                <Tour tabLabel="     Tour     " item={tour}/>
				                {/*<Packages tabLabel="   Packages   " item={item} navigation={navigation}/>*/}
				                {/*<Review tabLabel="    Review   " item={item}/>*/}
				            </ScrollableTabView>
				            <ProgressBooking
				                headerContext={tour.duration + ' days'}
				                middleContext={formatPrice(tour)}
				                footerContext={tour.minSize + ' - ' + tour.maxSize + ' peoples'}
				                children={'Book Now'}
				                // onPress={() => navigation.navigate(appRoutes.BOOKING_TOUR_V2, {tour: tour, bookInfo: bookInfo})}
				                onPress={() => handleBooking(tour)}
				            />
				        </>
			        )
                )}
        </>
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
    authorLeft: {},
    avatar: {
        width: 80,
        height: 80
    },
	fill: {
		flex: 1,
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
    indicatorItem: {},
    indicatorItemValue: {fontWeight: '700', color: BaseColor.textPrimaryColor, fontSize: 15},
    indicatorItemTitle: {fontWeight: '400', color: BaseColor.textPrimaryColor, fontSize: 15, opacity: 0.6},
});
export default TourDetailScreen;

