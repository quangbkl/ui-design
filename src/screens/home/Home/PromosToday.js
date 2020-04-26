import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import HotelCard from '../../../components/HotelCard/HotelCard';
import appRoutes from 'navigations/appRoutes';
import Text from '../../../components/Text/Text';
import promosDB from '../../../__mocks__/db/promos-db';

// TODO: Use HotelCard component
const PromosToday = (props) => {
	const {navigation} = props;
	// const defaultFilters = {
	// 	page: 1,
	// 	limit: 10,
	// };
	// const loadDataPromos = (params) => getPromos(params)
	// .then(res => res.data.promos);
	// const {
	// 	list: listPromos,
	// 	fetchData,
	// } = useFilterDynamic(defaultFilters, loadDataPromos);
	
	const renderListItem = ({item}) => {
		return (
			<HotelCard
				item={item}
				onPress={() => navigation.navigate(appRoutes.HOTEL_DETAIL, {promosId: item.id})}
				_onPressBookNow={() => navigation.navigate(appRoutes.CHECKOUT_REVIEW, {promosId: item.id})}
			/>
		);
	};
	
	// useEffect(() => {
	// 	fetchData().catch(console.log);
	// }, []);
	
	
	return (
		<View>
			<Text style={styles.margin} title3>Promos Today</Text>
			<FlatList
				horizontal
				data={promosDB.promos}
				// data={listPromos}
				renderItem={renderListItem}
				keyExtractor={item => item.id.toString()}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	margin: {
		marginTop: 15,
	},
});
export default PromosToday;
