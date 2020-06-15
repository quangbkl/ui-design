import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import {Card, CardItem, Left, Right} from "native-base";
import {Button, CustomIcon, Separator, Text} from "components";
import useApp from "hooks/app/useApp";
import {BaseColor} from "config/color";

const Step2 = (props) => {
    const {onNextStep3} = props;
    const {state: appState} = useApp();
    const {i18n} = appState;
    const {color} = appState;

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.hotelIn4}>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{fontWeight: "700"}}>Khách sạn Hoàng Gia</Text>
                        </View>
                        <Separator/>
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
                                <CustomIcon type={"moon"} color={color.primaryColor}/>
                                <Text style={{marginTop: 5}}>2 Đêm</Text>
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
                    </View>

                    <View style={{marginTop: -10}}>
                        <View style={styles.userIn4}>
                            <Text style={{fontSize: 17, fontWeight: "700"}}>
                                Phòng tiêu chuẩn (x2) - 8 khách
                            </Text>
                            <Separator/>
                            <View style={{flexDirection: "row"}}>
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
                                    <Text style={styles.Text15}>2 giường đôi</Text>
                                    <Text style={styles.Text15}>4 khách/phòng</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <View style={{flex: 1, marginTop: 8}}>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri:
                                                "https://pix6.agoda.net/hotelImages/111/1115897/1115897_15122500310038726516.jpg?s=1024x768",
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop: -10}}>
                        <View style={styles.userIn4}>
                            <Text style={{fontSize: 17, fontWeight: "700"}}>
                                Chính sách khách sạn & phòng
                            </Text>
                            <Separator/>
                            <View style={{marginTop: 8}}>
                                <Text style={{fontSize: 15, marginTop: 10}}>
                                    Đặt phòng này không được hoàn tiền. Thời gian hiển thị là giờ
                                    địa phương. Số đêm nghỉ và hạng phòng không được thay đổi
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop: -10}}>
                        <View style={styles.userIn4}>
                            <Text style={{fontSize: 17, fontWeight: "700"}}>
                                Chi tiết đặt phòng
                            </Text>
                            <Separator/>
                            <View style={{marginTop: 8}}>
                                <Text style={styles.Text15}>Tên khách hàng</Text>
                                <Text style={{fontSize: 15, marginTop: 5}}>
                                    Nguyễn Thị Thúy Tomoe
                                </Text>
                            </View>
                            <View style={{marginTop: 8}}>
                                <Text style={styles.Text15}>Email</Text>
                                <Text style={{fontSize: 15, marginTop: 5}}>
                                    thuynguyen03091999@gmail.com
                                </Text>
                            </View>
                            <View style={{marginTop: 8}}>
                                <Text style={styles.Text15}>SĐT</Text>
                                <Text style={{fontSize: 15, marginTop: 5}}>0356533048</Text>
                            </View>
                        </View>
                    </View>
                    <Card style={{marginTop: 0, marginLeft: 15, marginRight: 15}}>
                        <CardItem style={{flex: 1}}>
                            <Text style={{fontWeight: "700"}}>Chi tiết giá</Text>
                        </CardItem>
                        <Separator style={{marginLeft: 15, marginRight: 15}}/>
                        <CardItem style={{flex: 1}}>
                            <Text numberOfLines={2} style={{flex: 1}}>
                                Tiền phòng:
                            </Text>
                            <Right style={{flex: 1}}>
                                <Text>2 x 150.000 VND</Text>
                            </Right>
                        </CardItem>
                        <CardItem style={{flex: 1}}>
                            <Text numberOfLines={2} style={{flex: 1}}>
                                Phụ phí:
                            </Text>
                            <Right style={{flex: 1}}>
                                <Text>0 VND</Text>
                            </Right>
                        </CardItem>
                        <CardItem style={{flex: 1}}>
                            <Text numberOfLines={2} style={{flex: 1}}>
                                Tổng tiền:
                            </Text>
                            <Right style={{flex: 1}}>
                                <Text>300.000 VND</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </View>
            </ScrollView>
            <View style={{padding: 10}}>
                <Button onPress={() => onNextStep3()}>
                    <Text whiteColor>Thanh toán</Text>
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
    Text15: {fontSize: 15, fontWeight: "600", opacity: 0.7},
});

export default Step2;
