import React, {useEffect} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import HotelCard from "../../../components/HotelCard/HotelCard";
import {useFilterDynamic} from "../../../hooks/common";
import {getPromos} from "../../../services/promoServices";

// TODO: Use HotelCard component
const PromosToday = () => {
	const defaultFilters = {
		page: 1,
		limit: 10,
	};
	const loadDataPromos = (params) => getPromos(params)
	.then(res => res.data.promos);
	const {
		loading: loadingPromos,
		list: listPromos,
		fetchData,
		refreshPage,
		fetchNext,
	} = useFilterDynamic(defaultFilters, loadDataPromos);
	
	const renderListItem = ({item}) => {
		return (
			<HotelCard
				item={item}
			/>
		);
	};
	
	useEffect(() => {
		fetchData();
	}, []);
	
	
	
	return (
        <View>
	        <Text style={styles.title}>Promos Today</Text>
	        <FlatList
		        horizontal={true}
		        data={listPromos}
		        renderItem={renderListItem}
		        refreshing={loadingPromos}
		        onRefresh={refreshPage}
		        onEndReached={fetchNext}
		        onEndReachedThreshold={0.5}
		        keyExtractor={item => item.id.toString()}
	        />
        </View>
    );
};

const styles = StyleSheet.create({
	title: {
		marginTop: 10,
		fontSize: 20,
		color: '#212121'
	}
});
export default PromosToday;
