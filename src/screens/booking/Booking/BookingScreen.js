import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  AsyncStorage,
} from "react-native";

import useApp from "hooks/app/useApp";
import { BookingHistory, Button, Header } from "components";

import bookingHistoryDB from "__mocks__/db/booking-history-db";
import {
  ScrollableTabBar,
  ScrollableTabView,
} from "@valdio/react-native-scrollable-tabview";
import { BaseColor } from "config/color";
import bookingServices from "../../../services/bookingServices";
import appRoutes from "../../../navigations/appRoutes";

// Use BookingHistory component
const BookingScreen = (props) => {
  const { navigation } = props;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Lịch sử" RightComponent={null} LeftComponent={null} />
      <Button onPress={() => navigation.navigate(appRoutes.BOOKING_HOTEL)} style={{ margin: 15 }}>Lịch sử đặt phòng</Button>
      <Button style={{ margin: 15 }}>Lịch sử đặt tour</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  margin: {
    marginLeft: 15,
    marginRight: 15,
  },
  padding: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default BookingScreen;
