import React, {useState} from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    View,
    Clipboard,
    Alert,
} from "react-native";
import {Card, CardItem, Left, Right, Toast } from "native-base";
import {Button, CustomIcon, Separator, Text, SelectList} from "components";
import BankListItem from "../BookingV2/BankListItem";
import {
    TouchableHighlight,
    TouchableOpacity,
} from "react-native-gesture-handler";

const numberWithDots = (x) => {
    if (!x) return "";
    const [number, decimal] = x.toString().split(".");
    const separateNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return decimal ? [separateNumber, decimal].join() : separateNumber;
};


const allBanks = [
    {
        image:
            "https://tienaoplus.com/wp-content/uploads/2020/02/y-nghia-logo-ngan-hang-viettinbank-4.png",
        name: "Vietinbank",
        value: "VIETINBANK",
    },
    {
        image:
            "https://vietcombank-vaytheoluong.com/wp-content/uploads/2019/11/vpbank.jpg",
        name: "VP Bank",
        value: "VIETCOMBANK",
    },
    {
        image:
            "https://m.thebank.vn/uploads/2020/03/04/thebank_logobidv_1583313052.jpg",
        name: "BIDV",
        value: "BIDV",
    },
];

const Step2 = (props) => {
    const {onComplete, informationBooking} = props;
    const [selectedBank, setSelectedBank] = useState();
    const banks = allBanks.filter(el => informationBooking.tour.tourPaymentInformations.map(x => x.bankCode).includes(el.value));
    const [currentBank, setCurrentBank] = useState();

    const handleCopy = (text) => {
        Clipboard.setString(text);
        Toast.show({
            text: 'Copy to Clipboard',
            type: 'success',
            position: 'top'
        })
    };

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Card style={{marginTop: 5, marginLeft: 15, marginRight: 15}}>
                        <CardItem style={{flex: 1}}>
                            <Text style={{fontWeight: "700"}}>
                                Chọn ngân hàng thành toán
                            </Text>
                        </CardItem>
                        <Separator style={{marginLeft: 15, marginRight: 15}}/>
                        <View style={{marginLeft: 15, marginRight: 15}}>
                            <SelectList value={selectedBank} onChange={(value) => {
                                setSelectedBank(value);
                                const curr = informationBooking.tour.tourPaymentInformations.find(x => x.bankCode === value);
                                setCurrentBank(curr);
                            }}>
                                {banks.map((el) => (
                                    <BankListItem
                                        key={el.value}
                                        name={el.name}
                                        value={el.value}
                                        image={el.image}
                                    />
                                ))}
                            </SelectList>
                        </View>
                    </Card>
                    {currentBank && (
                        <Card style={{marginTop: 0, marginLeft: 15, marginRight: 15}}>
                            <CardItem style={{flex: 1}}>
                                <Text style={{fontWeight: "700"}}>
                                    Vui lòng chuyển khoản để thanh toán
                                </Text>
                            </CardItem>
                            <Separator style={{marginLeft: 15, marginRight: 15}}/>
                            <CardItem style={{flex: 1, flexDirection: "column"}}>
                                <Text style={{fontSize: 15, fontWeight: "600", opacity: 0.7}}>
                                    Ngân hàng thanh toán
                                </Text>
                                <Text style={{fontSize: 15, marginTop: 5}}>{currentBank.bankCode}</Text>
                            </CardItem>
                            <CardItem style={{flex: 1, flexDirection: "column"}}>
                                <Text style={{fontSize: 15, fontWeight: "600", opacity: 0.7}}>
                                    Tên chủ tài khoản
                                </Text>
                                <TouchableOpacity onPress={() => handleCopy(currentBank.accountNumber)}>
                                    <Text style={{fontSize: 15, marginTop: 5}}>
                                        {currentBank.accountName}
                                    </Text>
                                </TouchableOpacity>
                            </CardItem>
                            <CardItem style={{flex: 1, flexDirection: "column"}}>
                                <Text style={{fontSize: 15, fontWeight: "600", opacity: 0.7}}>
                                    Số tài khoản
                                </Text>
                                <TouchableOpacity onPress={() => handleCopy(currentBank.accountNumber)}>
                                    <Text style={{fontSize: 15, marginTop: 5}}>
                                        {currentBank.accountNumber}
                                    </Text>
                                </TouchableOpacity>
                            </CardItem>
                        </Card>
                    )}
                    <Card style={{marginTop: 0, marginLeft: 15, marginRight: 15}}>
                        <CardItem style={{flex: 1}}>
                            <Text style={{fontWeight: "700"}}>Thông tin thanh toán</Text>
                        </CardItem>
                        <Separator style={{marginLeft: 15, marginRight: 15}}/>
                        <CardItem style={{flex: 1}}>
                            <Text numberOfLines={2} style={{flex: 1}}>
                                Tổng giá tiền:
                            </Text>
                            <Right style={{flex: 1}}>
                                <Text>{numberWithDots(informationBooking.grandTotal)} VND</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </View>
            </ScrollView>
            <View style={{padding: 10}}>
                <Button onPress={() => onComplete()}>
                    <Text whiteColor>Xong</Text>
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
});

export default Step2;
