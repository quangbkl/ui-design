import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {v4 as uuidv4} from 'react-native-uuid';
import {useFilterDynamic} from 'hooks/common';
import {getTours} from 'services/tourService';
import {FilterSort} from 'components';
import Header from 'components/Header/Header';
import CustomIcon from 'components/Icon/CustomIcon';
import TourItem from 'components/TourItem/TourItem';
import useApp from 'hooks/app/useApp';

const ToursScreen = props => {
	const {state: appState} = useApp();
	const {color} = appState;
	const defaultFilters = {
		page: 1,
		limit: 20
	};
	
	const [view, setView] = useState('block');
	const loadDataTours = params =>
		getTours(params).then(res => res.data.tours);
	const {
		loading: loadingTours,
		list: listTours,
		fetchData,
		refreshPage,
		fetchNext,
	} = useFilterDynamic(defaultFilters, loadDataTours);
	
	const renderItem = ({item}) => {
		return (
			<View style={styles.eachItem}>
				<TourItem view={view} item={item}/>
			</View>
		);
	};
	
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<Header
				title="Tour"
				description="30 April 2020, 2 Nights, 1 Room"
				RightComponent={<CustomIcon type="search" color={color.primaryColor}/>}
			/>
			<FilterSort view={view} onChangeView={setView}/>
			<FlatList
				style={view === 'block' ? {} : styles.container}
				data={listTours}
				refreshing={loadingTours}
				onRefresh={refreshPage}
				onEndReached={fetchNext}
				renderItem={renderItem}
				key={uuidv4()}
				keyExtractor={() => uuidv4()}
				columnWrapperStyle={view === 'grid' ? styles.spaceCol : null}
				numColumns={view === 'grid' ? 2 : 1}
			/>
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
		justifyContent: 'space-between',
	},
});

export default ToursScreen;
