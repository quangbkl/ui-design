import React from 'react';
import {View, FlatList, StyleSheet, SafeAreaView} from 'react-native';

import useApp from 'hooks/app/useApp';
import {BookingHistory, Button, Header} from 'components';

import bookingHistoryDB from '__mocks__/db/booking-history-db';
import {ScrollableTabBar, ScrollableTabView} from "@valdio/react-native-scrollable-tabview";
import {BaseColor} from "config/color";

// Use BookingHistory component
const BookingScreen = (props) => {
    const {state: appState} = useApp();
    const {i18n} = appState;
    const {navigation} = props;
	const {color} = appState;
	const tabBarUnderlineStyle = {
		backgroundColor: color.primaryColor,
		height: 2,
	};
	const renderListItem = ({item}) => {
		return (
			<BookingHistory
				item={item}
			/>
		);
	};
    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title={i18n.t('main.booking.booking_history')} RightComponent={null} LeftComponent={null}/>
	        <ScrollableTabView
		        renderTabBar={() => <ScrollableTabBar/>}
		        tabBarActiveTextColor={BaseColor.textPrimaryColor}
		        tabBarInactiveTextColor={BaseColor.dividerColor}
		        tabBarUnderlineStyle={tabBarUnderlineStyle}
		        tabBarTextStyle={{fontSize: 18, fontWeight: '300'}}
		        showsHorizontalScrollIndicator={false}
	        >
		        <View tabLabel={i18n.t('main.booking.booking_hotel')}>
			        <FlatList
				        data={bookingHistoryDB.booking_histories}
				        renderItem={renderListItem}
				        keyExtractor={item => item.id.toString()}
			        />
		        </View>
		        <View tabLabel={i18n.t('main.booking.booking_tour')}>
			        <FlatList
				        data={bookingHistoryDB.booking_histories}
				        renderItem={renderListItem}
				        keyExtractor={item => item.id.toString()}
			        />
		        </View>
	        </ScrollableTabView>
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
    }
});

export default BookingScreen;
