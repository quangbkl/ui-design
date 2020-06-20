import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from "../Button/Button";
import Touchable from "../Touchable/Touchable";
import useApp from "hooks/app/useApp";

const numberWithDots = (x) => {
  if (!x) return '';
  const [number, decimal] = x.toString().split('.');
  const separateNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return decimal ? [separateNumber, decimal].join() : separateNumber;
};

const RoomType = (props) => {
  const { onBookNow, item } = props;
  const { type, image, price, roomAvailable } = item;
  const { state: appState } = useApp();
  const { color } = appState;
  const renderType = () => {
    switch (type) {
      case "standard":
        return "Tiêu chuẩn";
      case "deluxe":
        return "Sang trọng";
      default:
        return "";
    }
  };
  return (
    <Touchable style={styles.container}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
        imageStyle={{ borderRadius: 7.5 }}
      >
        <View style={styles.childrenContainer}>
          <Text style={styles.country}> {renderType()} </Text>
          <Text style={styles.title}> {numberWithDots(price)} </Text>
          <Text style={styles.title}> {`Còn ${roomAvailable} phòng`} </Text>
        </View>
      </ImageBackground>
      <Button
        onPress={() => onBookNow(item)}
        style={{ ...styles.buttonSelect, backgroundColor: color.primaryColor }}
        children="Chọn"
      />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 200,
    height: 250,
    marginTop: 10,
    marginRight: 15,
    // backgroundColor: "#f4f4f4",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  childrenContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: "400",
    color: "#ffffff",
    marginBottom: 5,
  },
  country: {
    fontSize: 20,
    fontWeight: "500",
    color: "#ffffff",
    marginBottom: 5,
  },
  buttonSelect: {
    height: 40,
    marginTop: 5,
    padding: 5,
  },
});

export default RoomType;
