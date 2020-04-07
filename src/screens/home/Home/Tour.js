import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useFilterDynamic} from "../../../hooks/common";
import {getTours} from "../../../services/tourService";
import TourCard from "../../../components/TourCard/TourCard";
import appRoutes from '../../../navigations/appRoutes';
import tourDB from '../../../__mocks__/db/tours-db';

// TODO: Use TourCard component
const Tour = (props) => {
  const {navigation} = props;
	// const defaultFilters = {
	// 	page: 1,
	// 	limit: 10,
	// };
	// const loadDataTours = (params) => getTours(params)
	// .then(res => res.data.tours);
	// const {
	// 	loading: loadingTours,
	// 	list: listTours,
	// 	fetchData,
	// 	refreshPage,
	// 	fetchNext,
	// } = useFilterDynamic(defaultFilters, loadDataTours);
	
	const renderListItem = ({item}) => {
		return (
			<TourCard
				item={item}
        onPress={() => navigation.navigate(appRoutes.HOTEL_DETAIL, {tourId: item.id})}
			/>
		);
	};
	
	// useEffect(() => {
	// 	fetchData();
	// }, []);
	
	
	
	return (
		<View>
			<Text style={styles.title}>Tour</Text>
			<Text style={styles.shortDescription}>let find out what most interesting things</Text>
			<FlatList
          horizontal
          data={tourDB.tours}
          // data={listTours}
          renderItem={renderListItem}
          // refreshing={loadingTours}
          // onRefresh={refreshPage}
          // onEndReached={fetchNext}
          // onEndReachedThreshold={0.5}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	title: {
		marginTop: 15,
		fontSize: 20,
		color: '#212121'
	},
	shortDescription: {
		fontSize: 15,
		color: '#212121'
	}
});

export default Tour;
