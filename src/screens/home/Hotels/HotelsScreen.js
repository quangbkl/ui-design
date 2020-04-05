import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
// https://github.com/uuidjs/uuid#getrandomvalues-not-supported
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {useFilterDynamic} from 'hooks/common';
import {bookingHotel} from 'services/bookingServices';
import {FilterSort, HotelItem} from 'components';
import Header from 'components/Header/Header';
import CustomIcon from 'components/Icon/CustomIcon';

// TODO: Code HotelItem component first
const HotelsScreen = props => {
    const {startDate, endDate, numRooms} = props;
    const defaultFilters = {
        page: 1,
        limit: 20,
        startDate,
        endDate,
        numRooms,
    };

    const [view, setView] = useState('block');
    const loadDataBookingHotel = params =>
        bookingHotel(params).then(res => res.data.hotelBooks);
    const {
        loading: loadingHotels,
        list: listHotels,
        fetchData,
        refreshPage,
        fetchNext,
    } = useFilterDynamic(defaultFilters, loadDataBookingHotel);

    const renderItem = ({item}) => {
        return (
            <View style={styles.eachItem}>
                <HotelItem view={view} item={item}/>
            </View>
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <SafeAreaView
            style={{flex: 1}}
            forceInset={{top: 'always'}}
        >
            <ScrollView>
                <View>
                    <Header
                        title="Hotels"
                        description="3 April 2020, 2 Nights, 1 Room"
                        RightComponent={<CustomIcon type="search"/>}
                    />
                    <FilterSort view={view} onChangeView={setView}/>
                    <FlatList
                        style={view === 'block' ? {} : styles.container}
                        data={listHotels}
                        refreshing={loadingHotels}
                        onRefresh={refreshPage}
                        onEndReached={fetchNext}
                        renderItem={renderItem}
                        key={uuidv4()}
                        keyExtractor={() => uuidv4()}
                        columnWrapperStyle={view === 'grid' ? styles.spaceCol : null}
                        numColumns={view === 'grid' ? 2 : 1}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
        
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

export default HotelsScreen;
