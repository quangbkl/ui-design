import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Container} from 'native-base';
import useApp from 'hooks/app/useApp';
import {BookingHistory, Button, Header} from 'components';
import appRoutes from 'navigations/appRoutes';
import {getBookingHistories} from 'services/bookingHistoryServices';
import {useFilterDynamic} from 'hooks/common';
import bookingHistoryDB from '__mocks__/db/booking-history-db';

// Use BookingHistory component
const BookingScreen = (props) => {
    const {state: appState} = useApp();
    const {i18n} = appState;
	const {navigation} = props;
	/*const defaultFilters = {
		page: 1,
		limit: 10
	};
	const loadDataBooking = (params) => getBookingHistories(params)
		.then(res => res.data.bookingHistories);
	const {
		loading: loadingPosts,
		list: listBookings,
		fetchData,
		refreshPage,
		fetchNext
	} = useFilterDynamic(defaultFilters, loadDataBooking);
	useEffect(() => {
		fetchData().catch(console.log);
	}, []);*/
	const renderListItem = ({item}) => {
		return (
			<BookingHistory
				item={item}
				onPress={() => {alert("fdfk")}}
			/>
		);
	};
	
	return (
		<Container>
			<Header title={i18n.t('main.booking.book_room')} LeftComponent={null}/>
			<FlatList
				data={bookingHistoryDB.booking_histories}
				renderItem={renderListItem}
				keyExtractor={item => item.id.toString()}
			/>
		</Container>
	);
};

const styles = StyleSheet.create({
	margin: {
		marginLeft: 15,
		marginRight: 15,
	},
	padding: {
		paddingLeft: 10,
		paddingRight: 10,
	}
});

export default BookingScreen;
