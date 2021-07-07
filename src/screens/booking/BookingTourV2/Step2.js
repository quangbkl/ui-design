import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Card, CardItem, Left, Right } from "native-base";
import { Button, CustomIcon, Separator, Text } from "components";
import useApp from "hooks/app/useApp";
import { BaseColor } from "config/color";
import moment from "moment";
import {getTransportation} from "../../../helpers/tour";

const numberWithDots = (x) => {
  if (!x) return "";
  const [number, decimal] = x.toString().split(".");
  const separateNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return decimal ? [separateNumber, decimal].join() : separateNumber;
};

const Step2 = (props) => {
  const { onNextStep3, informationBooking, userInfo } = props;
  const { state: appState } = useApp();
  const { i18n } = appState;
  const { color } = appState;

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.hotelIn4}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "700" }}>
                {informationBooking.tour.name}
              </Text>
            </View>
            <Separator />
            <View style={styles.checkInOut}>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Text>Check in</Text>
                <Text>
                  {moment(informationBooking.checkinDate, "DD-mm-YYYY").format(
                    "ddd, MMM Do"
                  )}
                </Text>
                <Text>08:00</Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <CustomIcon type={"sun"} color={color.primaryColor} />
                <Text style={{ marginTop: 5 }}>
                  {informationBooking.day} Ngày
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <Text>Check out</Text>
                <Text>
                  {moment(informationBooking.checkinDate, "DD-mm-YYYY")
                    .add(informationBooking.day, "days")
                    .format("ddd, MMM Do")}
                </Text>
                <Text>17:00</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: -10 }}>
            <View style={styles.userIn4}>
              <Text style={{ fontSize: 17, fontWeight: "700" }}>
	              Thời gian Khởi hành{": "}
	              {moment(informationBooking.checkinDate, "DD-mm-YYYY").format(
		              "ddd, MMM Do YYYY"
	              )} 08:00
              </Text>
              <Separator />
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flex: 40,
                    marginTop: 8,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.Text15}>Số khách</Text>
                  <Text style={styles.Text15}>Phương tiện</Text>
                </View>
                <View
                  style={{
                    flex: 60,
                    marginTop: 8,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.Text15}>{informationBooking.guest}   người</Text>
                  <Text style={styles.Text15}>{getTransportation(informationBooking.tour)}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, marginTop: 8 }}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: informationBooking.tour.images[0],
                    }}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: -10 }}>
            <View style={styles.userIn4}>
              <Text style={{ fontSize: 17, fontWeight: "700" }}>
                Chính sách đi tour
              </Text>
              <Separator />
              <View style={{ marginTop: 8 }}>
                <Text style={{ fontSize: 15, marginTop: 10 }}>
                  Đặt tour này không được hoàn tiền. Số ngày và số lượng người không được thay đổi
                </Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: -10 }}>
            <View style={styles.userIn4}>
              <Text style={{ fontSize: 17, fontWeight: "700" }}>
                Chi tiết đặt tour
              </Text>
              <Separator />
              <View style={{ marginTop: 8 }}>
                <Text style={styles.Text15}>Tên khách hàng đại diện</Text>
                <Text style={{ fontSize: 15, marginTop: 5 }}>
                  {userInfo.name}
                </Text>
              </View>
              <View style={{ marginTop: 8 }}>
                <Text style={styles.Text15}>Email</Text>
                <Text style={{ fontSize: 15, marginTop: 5 }}>
                  {userInfo.email}
                </Text>
              </View>
              <View style={{ marginTop: 8 }}>
                <Text style={styles.Text15}>SĐT</Text>
                <Text style={{ fontSize: 15, marginTop: 5 }}>{userInfo.phoneNumber}</Text>
              </View>
            </View>
          </View>
          <Card style={{ marginTop: 0, marginLeft: 15, marginRight: 15 }}>
            <CardItem style={{ flex: 1 }}>
              <Text style={{ fontWeight: "700" }}>Chi tiết giá</Text>
            </CardItem>
            <Separator style={{ marginLeft: 15, marginRight: 15 }} />
            <CardItem style={{ flex: 1 }}>
              <Text numberOfLines={2} style={{ flex: 1 }}>
                Tiền tour:
              </Text>
              <Right style={{ flex: 1 }}>
                <Text>
                  {informationBooking.guest} x{" "}
                  {numberWithDots(informationBooking.tour.pricePerParticipant)} VND
                </Text>
              </Right>
            </CardItem>
            <CardItem style={{ flex: 1 }}>
              <Text numberOfLines={2} style={{ flex: 1 }}>
                Thuế:
              </Text>
              <Right style={{ flex: 1 }}>
                <Text>{5} %</Text>
              </Right>
            </CardItem>
            <CardItem style={{ flex: 1 }}>
              <Text numberOfLines={2} style={{ flex: 1 }}>
                Tổng tiền:
              </Text>
              <Right style={{ flex: 1 }}>
                <Text>
                  {numberWithDots(informationBooking.grandTotal)} VND
                </Text>
              </Right>
            </CardItem>
          </Card>
        </View>
      </ScrollView>
      <View style={{ padding: 10 }}>
        <Button onPress={() => onNextStep3()}>
          <Text whiteColor>Đặt Tour</Text>
        </Button>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  content: {
    flex: 1,
  },
  hotelIn4: {
    margin: 15,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 8,
    backgroundColor: BaseColor.whiteColor,
    borderRadius: 8,
  },
  checkInOut: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  rest: {
    marginTop: 5,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  policy: {
    marginTop: 5,
  },
  userIn4: {
    margin: 15,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 8,
    backgroundColor: BaseColor.whiteColor,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 5,
  },
  Text15: { fontSize: 15, fontWeight: "600", opacity: 0.7 },
});

export default Step2;
