import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {Body, Card, CardItem, Icon, Left, Right} from 'native-base';
import {Button, Text} from 'components';
import useApp from 'hooks/app/useApp';

const Step1 = props => {
	const {state: appState} = useApp();
	const {i18n} = appState;
	const {color} = appState;
    const [expandPriceDetail, setExpandPriceDetail] = useState(false);

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Text style={{ margin: 10 }}>Thông tin giao dịch</Text>
                    <Card>
                        <CardItem>
                            <Left>
                                <Icon name="home" style={{color: color.primaryColor}} />
                                <Body>
                                    <Text>Dream Hotel</Text>
                                    <Text>Th 6, 22 thg 5 2020 . 1 đêm</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Icon name="right" type="AntDesign" style={{color: color.primaryColor}}/>
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
                                        <Icon name="up" type="AntDesign" style={{color: color.primaryColor}} />
                                    ) : (
                                        <Icon name="down" type="AntDesign" style={{color: color.primaryColor}} />
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
