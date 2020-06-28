import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet, Image, TextInput } from "react-native";
import { BookingHistory, Button, Header, Text } from "components";
import bookingHistoryDB from "__mocks__/db/booking-history-db";
import { getRouterParam } from "helpers/common";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { ScrollView } from "react-native-gesture-handler";
import { BaseColor } from "config/color";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import appRoutes from "../../../navigations/appRoutes";
import bookingServices from "../../../services/bookingServices";
import Spinner from "react-native-loading-spinner-overlay";
import { uploadImage } from "../../../services/imgur";
import { v4 as uuidv4 } from "react-native-uuid";
import { Toast } from "native-base";

const BookingAuthentication = (props) => {
  const navigation = useNavigation();

  const bookingId = getRouterParam(props, "bookingId");
  const [booking, setBooking] = useState();
  const [cameraType, setCameraType] = useState();
  const [image, setImage] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [loading, setLoading] = useState(false);

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return false;
      }
    }
    return true;
  };

  const chooseImage = async () => {
    const allow = await getPermissionAsync();
    if (!allow) return;
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage({
        name: uuidv4(),
        type: "image/jpg",
        uri: result.uri,
      });
    }
  };

  const fetchBooking = async () => {
    setLoading(true);
    try {
      const { hotel_booking } = await bookingServices.getBookingHotel(
        bookingId
      );
      setBooking(hotel_booking);
    } catch {
      Toast.show({
        text: 'Có lỗi xảy ra',
        type: 'danger',
      })
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = () => {
    setLoading(true);
    uploadImage(image)
      .then((res) => {
        const params = {
          imageWitness: res.url,
          status: "pending_confirm",
        };
        bookingServices
          .updateBookingHotel(bookingId, params)
          .then(() => {
            setConfirming(false);
            setModalVisible(true);
          })
          .catch(() => {
            Toast.show({
              text: "Có lỗi xảy ra, vui lòng thử lại",
              type: "danger",
              position: 'top'
            });
          });
      })
      .catch((err) => {
        Toast.show({
          text: "Tải lỗi, vui lòng thử lại",
          type: "danger",
          position: 'top',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    // fetch booking
    fetchBooking();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Xác thực đặt phòng" />
      <Spinner
        visible={loading}
        textContent={"Vui lòng chờ..."}
        textStyle={styles.spinnerTextStyle}
      />
      {booking ? (
        <>
          <ScrollView>
            <BookingHistory item={booking} />
            <View style={{ flex: 1, flexDirection: "row", margin: 15 }}>
              {/* <Button style={styles.buttonPickImage} onPress={chooseImage}>
                <Text whiteColor>Chụp ảnh</Text>
              </Button> */}
              <Button style={styles.buttonPickImage} onPress={chooseImage}>
                <Text whiteColor>{image || booking.imageWitness ? "Thay đổi ảnh" : "Tải ảnh lên"}</Text>
              </Button>
            </View>
            {!image && booking.status !== 'pending_payment' && (
              <Image
                style={styles.image}
                source={{
                  uri: booking.imageWitness,
                }}
              />
            )}
            {image && (
              <Image
                style={styles.image}
                source={{
                  uri: image.uri,
                }}
              />
            )}
          </ScrollView>
          <View style={{ padding: 10 }}>
            <Button onPress={handleConfirm} loading={confirming}>
              <Text whiteColor>Xác thực</Text>
            </Button>
            <Modal
              isVisible={modalVisible}
              backdropColor="rgba(0, 0, 0, 0.5)"
              backdropOpacity={1}
              animationIn="fadeIn"
              animationInTiming={600}
              animationOutTiming={600}
              backdropTransitionInTiming={600}
              backdropTransitionOutTiming={600}
              // onBackdropPress={setModalVisible(false)}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    padding: 15,
                    borderRadius: 5,
                  }}
                >
                  <Text>
                    Hình ảnh của bạn đã được tải lên. Bạn sẽ nhận được thông tin
                    xác nhận trong vòng 24h. Nếu bạn không nhận được vui lòng
                    liên hệ nhân viên hỗ trợ.
                  </Text>
                  <Button
                    style={{ marginTop: 20, height: 45 }}
                    onPress={() => {
                      setModalVisible(false);
                      navigation.navigate(appRoutes.HOME);
                    }}
                  >
                    Tiếp tục
                  </Button>
                </View>
              </View>
            </Modal>
          </View>
        </>
      ) : null}
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
  spinnerTextStyle: {
    color: "#FFF",
  },
});

export default BookingAuthentication;
