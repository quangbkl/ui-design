import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {v4 as uuidv4 } from 'uuid';
import {useFilterDynamic} from '../../../hooks/common';
import {bookingHotel} from '../../../services/bookingServices';
import FilterSort from '../../../components/FilterSort/FilterSort';
import CustomHeader from '../../../components/Header/CustomHeader';
import CustomIcon from '../../../components/Icon/CustomIcon';
import HotelItem from '../../../components/HotelItem/HotelItem';

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

  const renderRightHeader = () => <CustomIcon type="search" />;
  const renderItem = ({item, index}) => {
    if (view === 'grid' && index % 2 === 1) {
      return (
        <View style={[styles.rightItem, styles.eachItem]}>
          <HotelItem view={view} item={item} />
        </View>
      );
    }
    return (
      <View style={styles.eachItem}>
        <HotelItem view={view} item={item} />
      </View>
    );
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <View>
      <CustomHeader
        hasLeft
        hasRight
        title="Hotels"
        description="3 April 2020, 2 Nights, 1 Room"
        right={renderRightHeader()}
      />
      <FilterSort view={view} onChangeView={setView} />
      <FlatList
        style={view === 'block' ? {} : styles.container}
        data={listHotels}
        refreshing={loadingHotels}
        onRefresh={refreshPage}
        onEndReached={fetchNext}
        renderItem={renderItem}
        key={uuidv4()}
        keyExtractor={() => uuidv4()}
        numColumns={view === 'grid' ? 2 : 1}
      />
    </View>
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
  rightItem: {
    marginLeft: 20,
  },
});

export default HotelsScreen;
