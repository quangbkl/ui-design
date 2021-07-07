import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Card, CardItem, Icon, Left, Right } from "native-base";
import { Button, CustomIcon, Separator, Text } from "components";
import { useForm, Controller } from "react-hook-form";
import useApp from "hooks/app/useApp";
import { BaseColor } from "config/color";
import moment from "moment";

const numberWithDots = (x) => {
  if (!x) return "";
  const [number, decimal] = x.toString().split(".");
  const separateNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return decimal ? [separateNumber, decimal].join() : separateNumber;
};

const Step1 = (props) => {
  const { onNextStep2, informationBooking, userInfo, setUserInfo } = props;
  const { state: appState } = useApp();
  const { i18n } = appState;
  const { color } = appState;
  const [expandPriceDetail, setExpandPriceDetail] = useState(false);
  const { control, handleSubmit, errors } = useForm({
    defaultValues: userInfo,
  });

  const submitForm = () => {
    onNextStep2(() => {});
  };

  return (
    <>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.hotelIn4}>
            <View style={{ flexDirection: "row" }}>
              <CustomIcon type={"hotel"} color={color.primaryColor} size={20} />
              <Text style={{ marginLeft: 15, fontWeight: "700" }}>
                {informationBooking.tour.name}
              </Text>
            </View>
            <View style={styles.checkInOut}>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Text>Min size</Text>
                <Text>Max size</Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Text>
                  {informationBooking.tour.minSize}   người
                </Text>
                <Text>
                  {informationBooking.tour.maxSize} người
                </Text>
              </View>
            </View>
            <Separator />
            <View style={styles.rest}>
              <Text style={{ fontWeight: "600" }}>
                Thời gian Khởi hành{": "}
                {moment(informationBooking.checkinDate, "DD-mm-YYYY").format(
	                "ddd, MMM Do YYYY"
                )}
              </Text>
              <Text style={{ fontSize: 15, opacity: 0.7 }}>
                Số lượng khách{": "}{informationBooking.guest} hành khách
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 20, fontWeight: "700", marginLeft: 15 }}>
            Chi tiết giá
          </Text>
          <TouchableWithoutFeedback
            onPress={() => setExpandPriceDetail(!expandPriceDetail)}
          >
            <Card
              style={{ marginBottom: 0.5, marginLeft: 15, marginRight: 15 }}
            >
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
                  <Text>
                    {numberWithDots(informationBooking.grandTotal)}{" "}
                    VND{" "}
                  </Text>
                  {expandPriceDetail ? (
                    <Icon
                      name="up"
                      type="AntDesign"
                      style={{ color: color.primaryColor }}
                    />
                  ) : (
                    <Icon
                      name="down"
                      type="AntDesign"
                      style={{ color: color.primaryColor }}
                    />
                  )}
                </Right>
              </CardItem>
            </Card>
          </TouchableWithoutFeedback>
          {expandPriceDetail && (
            <Card style={{ marginTop: 0, marginLeft: 15, marginRight: 15 }}>
              <CardItem style={{ flex: 1 }}>
                <Text numberOfLines={2} style={{ flex: 1 }}>
                  Tiền Tour:
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
            </Card>
          )}
        </View>

        <View style={{ marginTop: 8, marginBottom: 10 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              marginLeft: 15,
              marginTop: 5,
            }}
          >
            Thông tin người đại diện mua vé
          </Text>
          <Controller
            style={styles.textInput}
            as={TextInput}
            control={control}
            name="name"
            onChangeText={name => setUserInfo({...userInfo, name })}
            onChange={args => args[0].nativeEvent.text}
            rules={{ required: true }}
            placeholder="Nhập họ tên"
          />
          {errors.name && <Text errorColor caption1 style={{ marginLeft: 20 }}>Vui lòng nhập họ tên</Text>}
          <Controller
            style={styles.textInput}
            as={TextInput}
            control={control}
            name="email"
            onChangeText={email => setUserInfo({...userInfo, email })}
            onChange={args => args[0].nativeEvent.text}
            rules={{ required: true }}
            placeholder="Nhập email"
          />
          {errors.email && <Text errorColor caption1 style={{ marginLeft: 20 }}>Vui lòng nhập email</Text>}
          <Controller
            style={styles.textInput}
            as={TextInput}
            control={control}
            name="phoneNumber"
            onChangeText={phoneNumber => setUserInfo({...userInfo, phoneNumber })}
            onChange={args => args[0].nativeEvent.text}
            rules={{ required: true }}
            placeholder="Nhập SĐT"
            keyboardType="number-pad"
          />
          {errors.phoneNumber && <Text errorColor caption1 style={{ marginLeft: 20 }}>Vui lòng nhập SDDT</Text>}
          <Controller
            style={styles.textInput}
            as={TextInput}
            control={control}
            name="note"
            onChangeText={note => setUserInfo({...userInfo, note })}
            onChange={args => args[0].nativeEvent.text}
            placeholder="Nhập ghi chú"
          />
        </View>
      </KeyboardAwareScrollView>
      <View style={{ padding: 10 }}>
        <Button onPress={handleSubmit(submitForm)}>
          <Text whiteColor>Tiếp tục</Text>
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
    marginTop: 10,
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
  textInput: {
    height: 50,
    backgroundColor: BaseColor.whiteColor,
    borderRadius: 5,
    margin: 15,
    marginBottom: 5,
    padding: 10,
  },
});

export default Step1;
