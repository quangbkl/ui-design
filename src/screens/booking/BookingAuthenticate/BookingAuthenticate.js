import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet, Image, TextInput } from "react-native";
import { BookingHistory, Button, Header, Text } from "components";
import bookingHistoryDB from "__mocks__/db/booking-history-db";
import { getRouterParam } from "helpers/common";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { useForm, Controller } from "react-hook-form";
import { ScrollView } from "react-native-gesture-handler";
import { BaseColor } from "config/color";

const BookingAuthentication = (props) => {
  const bookingId = getRouterParam(props, "bookingId");
  const [booking, setBooking] = useState();
  const [cameraType, setCameraType] = useState();
  const [image, setImage] = useState();
  const { register, setValue, handleSubmit } = useForm();

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const chooseImage = async () => {
    await getPermissionAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  useEffect(() => {
    register({ name: "accountName" });
    register({ name: "money" });
  }, [register]);

  useEffect(() => {
    // fetch booking
    const curr = bookingHistoryDB.booking_histories.find(
      (el) => el.id === bookingId
    );
    setBooking(curr);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Header title="Xác thực đặt phòng" RightComponent={null} />
        {booking && <BookingHistory item={booking} />}
        <View style={{ flex: 1, flexDirection: "row", margin: 15 }}>
          <Button style={styles.buttonPickImage} onPress={chooseImage}>
            <Text whiteColor>Chụp ảnh</Text>
          </Button>
          <Button style={styles.buttonPickImage} onPress={chooseImage}>
            <Text whiteColor>{image ? "Thay đổi ảnh" : "Tải ảnh lên"}</Text>
          </Button>
        </View>
        {image && (
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        )}
        <View style={{ marginTop: 15, marginBottom: 15 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              marginLeft: 15,
              marginTop: 5,
            }}
          >
            Thông tin chuyển khoản
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Tên chủ tài khoản"
            onChangeText={(text) => setValue("accountName", text, true)}
          />
          <TextInput
            keyboardType="numeric"
            style={styles.textInput}
            placeholder="Số tiền chuyển khoản"
            onChangeText={(text) => setValue("money", text, true)}
          />
        </View>
      </ScrollView>
      <View style={{ padding: 10 }}>
        <Button>
          <Text whiteColor>Xác thực</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonPickImage: {
    flex: 1,
    margin: 5,
    alignSelf: "center",
    height: 40,
  },
  image: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    height: 500,
  },
  textInput: {
    height: 50,
    backgroundColor: BaseColor.fieldColor,
    borderRadius: 5,
    margin: 15,
    marginBottom: 5,
    padding: 10,
  },
});

export default BookingAuthentication;
