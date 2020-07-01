import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, SafeAreaView, AsyncStorage } from 'react-native';
import { Toast } from 'native-base';
import useApp from 'hooks/app/useApp';
import {Header} from 'components';
import bookingServices from '../../../services/bookingServices';
import Spinner from "react-native-loading-spinner-overlay";
import BookingTourHistory from "components/BookingHistory/BookingTourHistory";

// Use BookingTourHistory component
const BookingTourScreen = (props) => {
    const {state: appState} = useApp();
    const {i18n} = appState;
    const {navigation} = props;
	const {color} = appState;
	const [tourBookings, setTourBookings] = useState([]);
	const [loading, setLoading] = useState(false);

	const renderListItem = ({item}) => {
		return (
			<BookingTourHistory
				item={item}
			/>
		);
	};
	const getBooking = async () => {
		const userId = await AsyncStorage.getItem('userId');
		const userLoginId = await AsyncStorage.getItem('userLoginId');
		setLoading(true);
		try {
			const { result } = await bookingServices.getBookingTours({ userId: userLoginId || userId, page: 1, pageSize: 100 });
            setTourBookings(result.tourBookings);
		} catch {
			Toast.show({
				text: 'Có lỗi xảy ra',
				type: 'danger',
			})
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getBooking();
	}, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title="Danh sách đặt Tour"/>
            <Spinner
                visible={loading}
                textContent={"Vui lòng chờ..."}
                textStyle={styles.spinnerTextStyle}
            />
	        <FlatList
				data={tourBookings}
				renderItem={renderListItem}
				keyExtractor={item => item.id.toString()}
			/>
        </SafeAreaView>
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
    },
    spinnerTextStyle: {
        color: "#FFF",
      },
});

export default BookingTourScreen;
