import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {Card, CardItem, Icon, Left, Right} from 'native-base';
import {Button, CustomIcon, Separator, Text} from 'components';
import useApp from 'hooks/app/useApp';
import {BaseColor} from 'config/color';

const Step1 = props => {
	const {state: appState} = useApp();
	const {i18n} = appState;
	const {color} = appState;
    const [expandPriceDetail, setExpandPriceDetail] = useState(false);
	
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.hotelIn4}>
	                    <View style={{flexDirection: 'row'}}>
		                    <CustomIcon type={'hotel'} color={color.primaryColor} size={20} />
		                    <Text style={{marginLeft: 15, fontWeight: '700'}}>Dream Hotel</Text>
	                    </View>
	                    <View style={styles.checkInOut}>
		                    <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
			                    <Text>Check in</Text>
			                    <Text>Check out</Text>
		                    </View>
		                    <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
			                    <Text>T.7, 23 Th5 2020(14:00)</Text>
			                    <Text>T.3, 26 Th5 2020(12:00)</Text>
		                    </View>
	                    </View>
	                    <Separator/>
	                    <View style={styles.rest}>
		                    <Text style={{fontWeight: '600'}}>(1x) Basic double room</Text>
		                    <Text style={{fontSize: 15, opacity: 0.7}}>1 giường cỡ queen</Text>
		                    <Text style={{fontSize: 15, opacity: 0.7}}>1khách/phòng</Text>
	                    </View>
	                    <Separator/>
	                    <View style={styles.policy}>
		                    <View style={{flexDirection: 'row'}}>
			                    <CustomIcon type={'ban'} color={color.primaryColor} size={17} />
			                    <Text style={{marginLeft: 15, opacity: 0.7}}>Không hoàn tiền</Text>
		                    </View>
		                    <View style={{flexDirection: 'row'}}>
			                    <CustomIcon type={'ban'} color={color.primaryColor} size={17} />
			                    <Text style={{marginLeft: 15, opacity: 0.7}}>không thể thay đổi lịch trình</Text>
		                    </View>
	                    </View>
                    </View>
	                
	                <Text style={{fontSize: 20, fontWeight: '700', marginLeft: 15}}>Chi tiết giá</Text>
                    <TouchableWithoutFeedback
                        onPress={() =>
                            setExpandPriceDetail(!expandPriceDetail)
                        }>
                        <Card style={{marginBottom: 0.5}}>
                            <CardItem>
                                <Left>
                                    <Text>Tổng giá tiền</Text>
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
	
	            <View style={{marginTop: 8}}>
		            <Text style={{fontSize: 20, fontWeight: '700', marginLeft: 15}}>Thông tin liên hệ</Text>
		            <View style={styles.userIn4}>
			            <View>
				            <Text style={{fontSize: 15, fontWeight: '600'}}>KyLC</Text>
				            <Text style={{fontSize: 14, opacity: 0.6}}>duykypaul@gmail.com . +84329199381</Text>
			            </View>
		            </View>
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
    	flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10
    },
	rest: {
    	marginTop: 5,
		flexDirection: 'column',
		justifyContent: 'space-between',
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
	
	
});

export default Step1;
