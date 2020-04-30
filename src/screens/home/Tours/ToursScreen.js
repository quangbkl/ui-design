import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
// https://github.com/uuidjs/uuid#getrandomvalues-not-supported
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {useFilterDynamic} from 'hooks/common';
import {bookingHotel} from 'services/bookingServices';
import {FilterSort, HotelItem} from 'components';
import Header from 'components/Header/Header';
import CustomIcon from 'components/Icon/CustomIcon';

// TODO: Code HotelItem component first
const ToursScreen = props => {
	const [view, setView] = useState('block');
	return (
		<>
			<Header
				title="Tour"
				description="30 April 2020, 2 Nights, 1 Room"
				RightComponent={<CustomIcon type="search"/>}
			/>
			<FilterSort view={view} onChangeView={setView}/>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	eachItem: {
		marginBottom: 20,
	},
	spaceCol: {
		flex: 1,
		justifyContent: 'space-around',
	},
});

export default ToursScreen;
