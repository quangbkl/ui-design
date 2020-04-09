import React, {useEffect} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import HotelCard from '../../../components/HotelCard/HotelCard';
import {useFilterDynamic} from '../../../hooks/common';
import {getPromos} from '../../../services/promoServices';
import appRoutes from 'navigations/appRoutes';

// TODO: Use HotelCard component
const PromosToday = props => {
    const {navigation} = props;
    const defaultFilters = {
        page: 1,
        limit: 10,
    };
    const loadDataPromos = params =>
        getPromos(params).then(res => res.data.promos);
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
                onPress={() =>
                    navigation.navigate(appRoutes.HOTEL_DETAIL, {
                        promosId: item.id,
                    })
                }
                _onPressBookNow={() =>
                    navigation.navigate(appRoutes.PREVIEW_BOOKING, {
                        promosId: item.id,
                    })
                }
            />
        );
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

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
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        marginTop: 15,
        fontSize: 20,
        color: '#212121',
    },
});
export default PromosToday;
