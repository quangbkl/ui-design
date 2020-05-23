import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Card, Left, CardItem, Icon, Body, Right, Container} from 'native-base';
import {Text, Button} from 'components';
import {TouchableWithoutFeedback} from 'react-native';

const Step1 = props => {
    const [expandPriceDetail, setExpandPriceDetail] = useState(false);

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Text style={{ margin: 10 }}>Thông tin giao dịch</Text>
                    <Card>
                        <CardItem>
                            <Left>
                                <Icon name="home" />
                                <Body>
                                    <Text>Dream Hotel</Text>
                                    <Text>Th 6, 22 thg 5 2020 . 1 đêm</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Icon name="right" type="AntDesign" />
                            </Right>
                        </CardItem>
                    </Card>
                    <TouchableWithoutFeedback
                        onPress={() =>
                            setExpandPriceDetail(!expandPriceDetail)
                        }>
                        <Card style={{marginBottom: 0.5}}>
                            <CardItem>
                                <Left>
                                    <Text>Chi tiết giá</Text>
                                </Left>
                                <Right
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                    }}>
                                    <Text>3000 VND </Text>
                                    {expandPriceDetail ? (
                                        <Icon name="up" type="AntDesign" />
                                    ) : (
                                        <Icon name="down" type="AntDesign" />
                                    )}
                                </Right>
                            </CardItem>
                        </Card>
                    </TouchableWithoutFeedback>
                    {expandPriceDetail && (
                        <Card style={{marginTop: 0}}>
                            <CardItem style={{flex: 1}}>
                                <Text numberOfLines={2} style={{flex: 3}}>
                                    AHA Thu Do Vang 12Hn, Standard Double(1x)
                                </Text>
                                <Right style={{flex: 2}}>
                                    <Text>419.000 VND</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    )}
                </View>
            </ScrollView>
            <View style={{padding: 10}}>
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
        backgroundColor: '#f2f2f2',
    },
    content: {
        flex: 1,
    },
});

export default Step1;
