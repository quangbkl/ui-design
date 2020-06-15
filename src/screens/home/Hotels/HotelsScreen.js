import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { v4 as uuidv4 } from "react-native-uuid";
import { useFilterDynamic } from "hooks/common";
import { useNavigation } from "@react-navigation/native";
import { bookingHotel } from "services/bookingServices";
import { FilterSort, HotelItem } from "components";
import Header from "components/Header/Header";
import CustomIcon from "components/Icon/CustomIcon";
import useApp from "hooks/app/useApp";
import { getRouterParam } from "helpers/common";
import appRoutes from "navigations/appRoutes";
import { hotelAvailable } from "../../../__mocks__/db/hotel-db";
import { searchHotels } from '../../../services/hotelServices';

// TODO: Code HotelItem component first
const HotelsScreen = (props) => {
  const searchParams = getRouterParam(props, "searchParams");
  const navigation = useNavigation();
  const { state: appState } = useApp();
  const { color } = appState;
  const [view, setView] = useState("block");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const renderItem = ({ item }) => {
    const detailHotel = () => {
      navigation.navigate(appRoutes.HOTEL_DETAIL, {
        hotelId: item.id,
        bookInfo: searchParams,
      });
    };

    return (
      <View style={styles.eachItem}>
        <HotelItem onViewHotel={detailHotel} view={view} item={item} />
      </View>
    );
  };

  useEffect(() => {
    setLoading(true);
    searchHotels(searchParams)
      .then(res => {
        const { result } = res.data;
        console.log(result)
        setHotels(result.hotels)
      })
      .finally(() => setLoading(false))
      
    // setHotels(hotelAvailable.hotelBooks);
  }, []);

  return (
    <>
      <Header
        title={searchParams.location.name}
        description={`${searchParams.checkinDate}, ${searchParams.night} đêm, ${
          searchParams.rooms
        } phòng`}
      />
      <FilterSort view={view} onChangeView={setView} />
      
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          style={view === "block" ? {} : styles.container}
          data={hotels}
          renderItem={renderItem}
          key={uuidv4()}
          keyExtractor={() => uuidv4()}
          columnWrapperStyle={view === "grid" ? styles.spaceCol : null}
          numColumns={view === "grid" ? 2 : 1}
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
    justifyContent: "space-around",
  },
});

export default HotelsScreen;
