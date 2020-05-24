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

const Step2 = (props) => {
  const { state: appState } = useApp();
  const { i18n } = appState;
  const { color } = appState;

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.hotelIn4}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "700" }}>Dream Hotel</Text>
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
                <Text>T.7, 23 Th5</Text>
                <Text>14:00</Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <CustomIcon type={"moon"} color={color.primaryColor} />
                <Text style={{ marginTop: 5 }}>1 Đêm</Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <Text>Check out</Text>
                <Text>T.3, 26 Th5</Text>
                <Text>12:00</Text>
              </View>
            </View>
            {/*<View style={styles.rest}>
							<Text style={{fontWeight: '600'}}></Text>
							<Text style={{fontSize: 15, opacity: 0.7}}>1 giường cỡ queen</Text>
							<Text style={{fontSize: 15, opacity: 0.7}}>1khách/phòng</Text>
						</View>
						<Separator/>
						*/}
          </View>

          <View style={{ marginTop: -10 }}>
            <View style={styles.userIn4}>
              <Text style={{ fontSize: 17, fontWeight: "700" }}>
                (1x) Basic double room
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flex: 40,
                    marginTop: 8,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.Text15}>Loại giường</Text>
                  <Text style={styles.Text15}>Số khách</Text>
                </View>
                <View
                  style={{
                    flex: 60,
                    marginTop: 8,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.Text15}>1 giường đôi</Text>
                  <Text style={styles.Text15}>2 khách/phòng</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{ flex: 40, marginTop: 8, flexDirection: "column" }}
                >
                  <Image
                    style={styles.image}
                    source={{
                      uri:
                        "https://kristinmateikahome.files.wordpress.com/2019/11/david-werbrouck-ohxhsg8_vn0-unsplash-edit-.jpg",
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 60,
                    marginTop: 8,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <Text style={styles.Text15}>Không gồm bữa sáng</Text>
                  <Text style={styles.Text15}>WIFI miễn phí</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: -10 }}>
            <View style={styles.userIn4}>
              <Text style={{ fontSize: 17, fontWeight: "700" }}>
                Chính sách khách sạn & phòng
              </Text>
              <View style={{ marginTop: 8 }}>
                <Text style={{ fontSize: 15 }}>
                  Áp dụng chính sách hủy phòng
                </Text>
                <Text style={{ fontSize: 15, marginTop: 10 }}>
                  đặt phòng này không được hoàn tiền. Thời gian hiển thị là giờ
                  địa phương. Số đêm nghỉ và hạng phòng không được thay đổi
                </Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: -10 }}>
            <View style={styles.userIn4}>
              <Text style={{ fontSize: 17, fontWeight: "700" }}>
                Chi tiết đặt phòng
              </Text>
              <View style={{ marginTop: 8 }}>
                <Text style={styles.Text15}>Tên khách hàng</Text>
                <Text style={{ fontSize: 15, marginTop: 5 }}>duykypaul</Text>
              </View>
            </View>
          </View>

          <Card style={{ marginTop: 0 }}>
            <Text style={{ fontSize: 17, fontWeight: "700", marginLeft: 15 }}>
              Chi tiết giá
            </Text>
            <CardItem style={{ flex: 1 }}>
              <Text numberOfLines={2} style={{ flex: 3 }}>
                AHA Thu Do Vang 12Hn, Standard Double(1x)
              </Text>
              <Right style={{ flex: 2 }}>
                <Text>419.000 VND</Text>
              </Right>
            </CardItem>
          </Card>
          <TouchableWithoutFeedback>
            <Card style={{ marginBottom: 0.5 }}>
              <CardItem>
                <Left>
                  <Text>Tổng giá tiền</Text>
                </Left>
                <Right
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Text>3000 VND </Text>
                </Right>
              </CardItem>
            </Card>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
      <View style={{ padding: 10 }}>
        <Button>
          <Text whiteColor>Tiếp tục thanh toán</Text>
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
    width: "90%",
    height: 65,
    borderRadius: 5,
  },
  Text15: { fontSize: 15, fontWeight: "600", opacity: 0.7 },
});

export default Step2;
