import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {v4 as uuidv4} from 'react-native-uuid';
import {FilterSort, HotelItem} from 'components';
import Header from 'components/Header/Header';
import CustomIcon from 'components/Icon/CustomIcon';
import TourItem from 'components/TourItem/TourItem';
import useApp from 'hooks/app/useApp';
import {getRouterParam} from "helpers/common";
import {useNavigation} from "@react-navigation/native";
import appRoutes from "navigations/appRoutes";
import {searchTours} from "services/tourService";

const ToursScreen = props => {
	const searchParams = getRouterParam(props, "searchParams");
	const navigation = useNavigation();
	const {state: appState} = useApp();
	const {color} = appState;
	const [view, setView] = useState("block");
	const [tours, setTours] = useState([]);
	const [loading, setLoading] = useState(false);
	
	const renderItem = ({item}) => {
		const detailTour = () => {
			navigation.navigate(appRoutes.TOUR_DETAIL, {
				tourId: item.id,
				bookInfo: searchParams,
			});
		};
		
		return (
			<View style={styles.eachItem}>
				<TourItem onViewTour={detailTour} view={view} item={item}/>
			</View>
		);
	};
	
	useEffect(() => {
		setLoading(true);
		console.log(searchParams)
		searchTours(searchParams)
		.then(res => {
			const {result} = res.data;
			console.log("tour list: ",result)
			setTours(result.tours)
		})
		.finally(() => setLoading(false))
		
	}, []);
    
    
    return (
        <>
            <Header
	            title={searchParams.location.name}
	            description={`${searchParams.checkinDate}, ${searchParams.day} ngày`}
                RightComponent={<CustomIcon type="search" color={color.primaryColor}/>}
            />
            <FilterSort view={view} onChangeView={setView}/>
	
	        {loading ? (
		        <ActivityIndicator size="large" color={`${color.primaryColor}`}/>
	        ) : (
		        <FlatList
			        style={view === 'block' ? {} : styles.container}
			        data={tours}
			        renderItem={renderItem}
			        key={uuidv4()}
			        keyExtractor={() => uuidv4()}
			        columnWrapperStyle={view === 'grid' ? styles.spaceCol : null}
			        numColumns={view === 'grid' ? 2 : 1}
		        />
	        )}
         
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
