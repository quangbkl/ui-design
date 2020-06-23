import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Modal from "react-native-modal";
import { Grid, Col, Row, List, Button as NBButton } from "native-base";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { Bar } from "react-native-progress";
import { Rating } from "react-native-ratings";
import MapView, { PROVIDER_DEFAULT, Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

import { v4 as uuidv4 } from "react-native-uuid";
import { Header, CustomIcon, Text, Separator, Button } from "components";
import { getRouterParam } from "helpers/common";
import { BaseColor } from "config/color";
import RoomType from "../../../components/RoomType/RoomType";
import { getHotel } from "../../../services/hotelServices";
import useApp from "../../../hooks/app/useApp";

const allServices = [
  { code: "wifi", name: "Wifi" },
  { code: "coffee", name: "Coffee" },
  { code: "bath", name: "Bath" },
  { code: "car", name: "Car" },
  { code: "paw", name: "Paw" },
  { code: "futbol", name: "Futbol" },
];

const getRoomTypes = (hotel) => {
  let result = [];
  const { roomTypes } = hotel;
  if (roomTypes.includes("standard")) {
    result.push({
      type: "standard",
      image: hotel.imageStandard,
      price: hotel.priceStandard,
      roomAvailable: hotel.availableRoomStandard,
      tax: hotel.taxStandard,
    });
  }
  if (roomTypes.includes("deluxe")) {
    result.push({
      type: "deluxe",
      image: hotel.imageDeluxe,
      price: hotel.priceDeluxe,
      roomAvailable: hotel.availableRoomDeluxe,
      tax: hotel.taxDeluxe,
    });
  }
  return result;
};

const HotelDetailScreen = (props) => {
  const hotelId = getRouterParam(props, "hotelId");
  const bookInfo = getRouterParam(props, "bookInfo");
  const {state: appState} = useApp();
  const {color} = appState;
  const [hotel, setHotel] = useState();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const gotoPreviewGGMap = () => {
    navigation.navigate("Preview GGMap", {
      location: {
        latitude: hotel.latitude,
        longitude: hotel.longitude,
      },
    });
  };
  const [visible, setVisible] = useState(false);
  const renderService = ({ item: service }) => {
    const actualService = allServices.find((el) => el.code === service);
    if (actualService) {
      return (
        <View style={styles.serviceItem}>
          <CustomIcon
            type={actualService.code}
            size={22}
            color={BaseColor.bluePrimaryColor}
          />
          <Text caption2>{actualService.name}</Text>
        </View>
      );
    }
    return null;
  };

  const handleBooking = (type) => {
    setVisible(false);
    const informationBooking = {
      room: type,
      hotel,
      ...bookInfo,
    };
    navigation.navigate("BookingV2", { informationBooking });
  };
  const renderListItem = ({ item }) => {
    return <RoomType onBookNow={handleBooking} item={item} />;
  };

  useEffect(() => {
    if (hotelId) {
      setLoading(true);
      getHotel(hotelId)
        .then((data) => {
          console.log(data);
          setHotel(data.result.hotel);
        })
        .finally(() => setLoading(false));
    }
  }, [hotelId]);

  return (
    <>
      <SafeAreaView style={styles.fill}>
        <Header title="Thông tin khách sạn" />
        {loading ? (
          <ActivityIndicator size="large" color={`${color.primaryColor}`} />
        ) : (
          hotel && (
            <>
              <ScrollView style={styles.scrollViewContent}>
                <View style={styles.reviewBlock}>
                  <Text style={styles.titleReviewBlock} title1>
                    {hotel.name}
                  </Text>
                  <Rating startingValue={4.25} imageSize={16} readonly />

                  <Text
                    numberOfLines={4}
                    style={styles.titleReviewDescription}
                    thin
                  >
                    {hotel.description}
                  </Text>
                </View>
                {/* Reviews */}
                <View style={styles.blockReviews}>
                  <View style={styles.commonRate}>
                    <Text style={styles.ratePerTen} title2 whiteColor>
                      9.5
                    </Text>
                    <View style={styles.commonRateRight}>
                      <Text title2 primaryColor>
                        Xuất sắc
                      </Text>
                      <Text subhead>Xem 1000 đánh giá</Text>
                    </View>
                  </View>
                  <Grid style={styles.detailReview}>
                    <Row style={styles.rowReview}>
                      <Col style={styles.reviewItem}>
                        <View style={styles.reviewItemFirstLine}>
                          <Text body2>Độ sạch sẽ</Text>
                          <Text body2>8</Text>
                        </View>
                        <Bar progress={0.8} width={null} />
                      </Col>
                      <Col style={styles.reviewItem}>
                        <View style={styles.reviewItemFirstLine}>
                          <Text body2>Tiện nghi</Text>
                          <Text body2>8</Text>
                        </View>
                        <Bar progress={0.8} width={null} />
                      </Col>
                    </Row>
                    <Row style={styles.rowReview}>
                      <Col style={styles.reviewItem}>
                        <View style={styles.reviewItemFirstLine}>
                          <Text body2>Vị trí</Text>
                          <Text body2>8</Text>
                        </View>
                        <Bar progress={0.8} width={null} />
                      </Col>
                      <Col style={styles.reviewItem}>
                        <View style={styles.reviewItemFirstLine}>
                          <Text body2>Dịch vụ</Text>
                          <Text body2>8</Text>
                        </View>
                        <Bar progress={0.8} width={null} />
                      </Col>
                    </Row>
                    <Row style={styles.rowReview}>
                      <Col style={styles.reviewItem}>
                        <View style={styles.reviewItemFirstLine}>
                          <Text body2>Đáng giá tiền</Text>
                          <Text body2>8</Text>
                        </View>
                        <Bar progress={0.8} width={null} />
                      </Col>
                      <Col />
                    </Row>
                  </Grid>
                </View>
                <Separator />
                {/* Description */}
                <View>
                  <Text title3>Mô tả khách sạn</Text>
                  <Text thin body2>
                    {hotel.description}
                  </Text>
                </View>
                <Separator />
                {/* Services */}
                <View>
                  <List
                    horizontal
                    dataArray={hotel.services}
                    renderItem={renderService}
                    keyExtractor={() => uuidv4()}
                  />
                </View>
                <Separator />
                {/* Location */}
                <View>
                  <Text title3>Vị trí</Text>
                  <Text thin body2>
                    {hotel.location}
                  </Text>
                  <View>
                    <MapView
                      region={{
                        latitude: hotel.latitude,
                        longitude: hotel.longitude,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                      }}
                      style={styles.map}
                      provider={PROVIDER_DEFAULT}
                    >
                      <Marker
                        coordinate={{
                          latitude: hotel.latitude,
                          longitude: hotel.longitude,
                        }}
                      />
                    </MapView>
                    <NBButton
                      onPress={gotoPreviewGGMap}
                      style={styles.buttonViewMap}
                    >
                      <Text body2 whiteColor>
                        Xem bản đồ
                      </Text>
                    </NBButton>
                  </View>
                </View>
                <Separator />
                {/* Checkin - Checkout */}
                <View>
                  <Text title3>Checkin / Checkout</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text body2>Check in từ:</Text>
                      <Text body2 bluePrimaryColor>
                        {hotel.checkin}
                      </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text body2>Check out đến:</Text>
                      <Text body2 bluePrimaryColor>
                        {hotel.checkout}
                      </Text>
                    </View>
                  </View>
                </View>
                <Separator />
                {/* Help */}
                <View
                  style={{
                    alignItems: "center",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <Text title3>Cần giúp đỡ?</Text>
                  <Text caption1 grayColor>
                    Chúng tôi rất vui khi đón tiếp bạn
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <CustomIcon style={styles.iconHelp} type="phone" />
                    <Text bluePrimaryColor body1>
                      {hotel.phoneNumber}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <CustomIcon
                      style={styles.iconHelp}
                      type="envelope-open-text"
                    />
                    <Text bluePrimaryColor body1>
                      {hotel.email}
                    </Text>
                  </View>
                </View>
                <Separator />
                {/* Reason to choose us */}
                {/* <View>
                <Text title3>Reasons to choose us</Text>
                <View style={styles.reasonBlock}>
                  <View style={styles.reasonItem}>
                    <CustomIcon
                      type="map-marker-alt"
                      color={BaseColor.bluePrimaryColor}
                    />
                    <View style={styles.reasonItemRight}>
                      <Text title3>Excellent</Text>
                      <Text subhead>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                      </Text>
                    </View>
                  </View>
                  <View style={styles.reasonItem}>
                    <CustomIcon
                      type="pagelines"
                      color={BaseColor.bluePrimaryColor}
                    />
                    <View style={styles.reasonItemRight}>
                      <Text title3>Excellent</Text>
                      <Text subhead>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                      </Text>
                    </View>
                  </View>
                  <View style={styles.reasonItem}>
                    <CustomIcon
                      type="air-freshener"
                      color={BaseColor.bluePrimaryColor}
                    />
                    <View style={styles.reasonItemRight}>
                      <Text title3>Excellent</Text>
                      <Text subhead>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                      </Text>
                    </View>
                  </View>
                  <View style={styles.reasonItem}>
                    <CustomIcon
                      type="angellist"
                      color={BaseColor.bluePrimaryColor}
                    />
                    <View style={styles.reasonItemRight}>
                      <Text title3>Excellent</Text>
                      <Text subhead>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                      </Text>
                    </View>
                  </View>
                </View>
              </View> */}
              </ScrollView>
              <View style={{ padding: 10 }}>
                <Button onPress={() => setVisible(true)}>
                  <Text whiteColor>Chọn loại phòng</Text>
                </Button>
              </View>
              <Modal isVisible={visible}>
                <View style={styles.contentModal}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>Chọn loại phòng</Text>
                    <AntDesignIcon
                      onPress={() => setVisible(false)}
                      style={{ fontSize: 30 }}
                      name="close"
                    />
                  </View>
                  <View>
                    <FlatList
                      horizontal
                      data={getRoomTypes(hotel)}
                      renderItem={renderListItem}
                      keyExtractor={(item) => JSON.stringify(item)}
                      showsHorizontalScrollIndicator={false}
                    />
                  </View>
                </View>
              </Modal>
            </>
          )
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  contentModal: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  map: {
    flex: 1,
    height: 200,
  },
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  reviewBlock: {
    borderRadius: 10,
    backgroundColor: "#fff",
    marginTop: 5,
    paddingTop: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 10,
    elevation: 12,
  },
  titleReviewBlock: {
    textAlign: "center",
  },
  titleReviewDescription: {
    textAlign: "center",
    margin: 10,
  },
  blockReviews: {
    marginTop: 20,
  },
  commonRate: {
    display: "flex",
    flexDirection: "row",
  },
  ratePerTen: {
    backgroundColor: BaseColor.primaryColor,
    width: 60,
    height: 60,
    lineHeight: 60,
    borderRadius: 30,
    marginRight: 5,
    textAlign: "center",
  },
  commonRateRight: {
    justifyContent: "space-around",
  },
  rowReview: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailReview: {
    marginTop: 15,
  },
  reviewItem: {
    marginBottom: 10,
    width: "48%",
  },
  reviewItemFirstLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  serviceItem: {
    alignItems: "center",
    marginRight: 20,
  },
  iconHelp: {
    marginRight: 5,
    color: BaseColor.bluePrimaryColor,
  },
  reasonBlock: {
    marginLeft: 10,
  },
  reasonItem: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  reasonItemRight: {
    justifyContent: "space-around",
    marginLeft: 10,
  },
  buttonViewMap: {
    paddingLeft: 10,
    paddingRight: 10,
    bottom: 3,
    right: 3,
    height: 30,
    position: "absolute",
    backgroundColor: "#000",
    borderRadius: 4,
  },
});

HotelDetailScreen.propTypes = {};

export default HotelDetailScreen;
