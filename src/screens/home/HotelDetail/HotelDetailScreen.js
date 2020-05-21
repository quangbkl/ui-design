import React, {useState} from 'react';
import {
    Animated,
    Platform,
    StatusBar,
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import {Grid, Col, Row, List} from 'native-base';
import {Bar} from 'react-native-progress';
import {Rating} from 'react-native-ratings';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';

// https://github.com/uuidjs/uuid#getrandomvalues-not-supported
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {Header, CustomIcon, Text, Separator, Button} from 'components';
import {getRouterParam} from 'helpers/common';
import {BaseColor} from 'config/color';
import useApp from "hooks/app/useApp";

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const HotelDetailScreen = props => {
    const hotelId = getRouterParam(props, 'hotelId');
    const {state: appState} = useApp();
    const {i18n} = appState;
    const [scrollY] = useState(
        new Animated.Value(
            // iOS has negative initial scroll value because content inset...
            Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
        ),
    );
    const _renderScrollViewContent = () => {
        const services = [
            {key: 'wifi', name: 'Free Wifi'},
            {key: 'coffee', name: 'Free Coffee'},
            {key: 'bath', name: 'Free Bath'},
            {key: 'car', name: 'Free Car'},
            {key: 'paw', name: 'Free Paw'},
            {key: 'futbol', name: 'Free Futbol'},
        ];
        const renderService = ({item: service}) => {
            return (
                <View style={styles.serviceItem}>
                    <CustomIcon type={service.key} size={22} color={BaseColor.bluePrimaryColor}/>
                    <Text caption2>{service.name}</Text>
                </View>
            );
        };
        return (
            <View style={styles.scrollViewContent}>
                <View style={styles.reviewBlock}>
                    <Text style={styles.titleReviewBlock} title1>
                        Hilton San Francisco
                    </Text>
                    <Rating startingValue={4.25} imageSize={16} readonly/>

                    <Text
                        numberOfLines={4}
                        style={styles.titleReviewDescription}
                        thin>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged
                    </Text>
                </View>
                {/* Reviews */}
                <View style={styles.blockReviews}>
                    <View style={styles.commonRate}>
                        <Text style={styles.ratePerTen} title2 whiteColor>
                            9.5
                        </Text>
                        <View style={styles.commonRateRight}>
                            <Text title2 primaryColor>
                                Excellent
                            </Text>
                            <Text subhead>See 1000 reviews</Text>
                        </View>
                    </View>
                    <Grid style={styles.detailReview}>
                        <Row style={styles.rowReview}>
                            <Col style={styles.reviewItem}>
                                <View style={styles.reviewItemFirstLine}>
                                    <Text body2>Độ sạch sẽ</Text>
                                    <Text body2>8</Text>
                                </View>
                                <Bar progress={0.8} width={null}/>
                            </Col>
                            <Col style={styles.reviewItem}>
                                <View style={styles.reviewItemFirstLine}>
                                    <Text body2>Tiện nghi</Text>
                                    <Text body2>8</Text>
                                </View>
                                <Bar progress={0.8} width={null}/>
                            </Col>
                        </Row>
                        <Row style={styles.rowReview}>
                            <Col style={styles.reviewItem}>
                                <View style={styles.reviewItemFirstLine}>
                                    <Text body2>Vị trí</Text>
                                    <Text body2>8</Text>
                                </View>
                                <Bar progress={0.8} width={null}/>
                            </Col>
                            <Col style={styles.reviewItem}>
                                <View style={styles.reviewItemFirstLine}>
                                    <Text body2>Dịch vụ</Text>
                                    <Text body2>8</Text>
                                </View>
                                <Bar progress={0.8} width={null}/>
                            </Col>
                        </Row>
                        <Row style={styles.rowReview}>
                            <Col style={styles.reviewItem}>
                                <View style={styles.reviewItemFirstLine}>
                                    <Text body2>Đáng giá tiền</Text>
                                    <Text body2>8</Text>
                                </View>
                                <Bar progress={0.8} width={null}/>
                            </Col>
                            <Col/>
                        </Row>
                    </Grid>
                </View>
                <Separator/>
                {/* Description */}
                <View>
                    <Text title3>Hotel Description</Text>
                    <Text thin body2>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged
                    </Text>
                </View>
                <Separator/>
                {/* Services */}
                <View>
                    <List
                        horizontal
                        dataArray={services}
                        renderItem={renderService}
                        keyExtractor={() => uuidv4()}
                    />
                </View>
                <Separator/>
                {/* Location */}
                <View>
                    <Text title3>Location</Text>
                    <Text thin body2>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text
                    </Text>
                    <MapView style={styles.map} provider={PROVIDER_DEFAULT}  />
                </View>
                <Separator/>
                {/* Checkin - Checkout */}
                <View>
                    <Text title3>Checkin / Checkout</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flex: 1}}>
                            <Text body2>Check in from:</Text>
                            <Text body2 bluePrimaryColor>15:00</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text body2>Check out to:</Text>
                            <Text body2 bluePrimaryColor>15:00</Text>
                        </View>
                    </View>
                </View>
                <Separator/>
                {/* Help */}
                <View style={{alignItems: 'center', marginTop: 10, marginBottom: 10}}>
                    <Text title3>Need Us Help?</Text>
                    <Text caption1 grayColor>We would be happy to help you</Text>
                    <View style={{flexDirection: 'row'}}>
                        <CustomIcon style={styles.iconHelp} type="phone"/>
                        <Text bluePrimaryColor body1>0362897165</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <CustomIcon style={styles.iconHelp} type="envelope-open-text"/>
                        <Text bluePrimaryColor body1>trantienduc10@gmail.com</Text>
                    </View>
                </View>
                <Separator/>
                {/* Reason to choose us */}
                <View>
                    <Text title3>Reasons to choose us</Text>
                    <View style={styles.reasonBlock}>
                        <View style={styles.reasonItem}>
                            <CustomIcon type="map-marker-alt" color={BaseColor.bluePrimaryColor}/>
                            <View style={styles.reasonItemRight}>
                                <Text title3>
                                    Excellent
                                </Text>
                                <Text subhead>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum
                                </Text>
                            </View>
                        </View>
                        <View style={styles.reasonItem}>
                            <CustomIcon type="pagelines" color={BaseColor.bluePrimaryColor}/>
                            <View style={styles.reasonItemRight}>
                                <Text title3>
                                    Excellent
                                </Text>
                                <Text subhead>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum
                                </Text>
                            </View>
                        </View>
                        <View style={styles.reasonItem}>
                            <CustomIcon type="air-freshener" color={BaseColor.bluePrimaryColor}/>
                            <View style={styles.reasonItemRight}>
                                <Text title3>
                                    Excellent
                                </Text>
                                <Text subhead>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum
                                </Text>
                            </View>
                        </View>
                        <View style={styles.reasonItem}>
                            <CustomIcon type="angellist" color={BaseColor.bluePrimaryColor}/>
                            <View style={styles.reasonItemRight}>
                                <Text title3>
                                    Excellent
                                </Text>
                                <Text subhead>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
    const HeaderRightComponent = () => {
        return <CustomIcon type="images"/>;
    };
    const scrollYRender = Animated.add(
        scrollY,
        Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );
    const headerTranslate = scrollYRender.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -HEADER_SCROLL_DISTANCE],
        extrapolate: 'clamp',
    });

    return (
        <SafeAreaView style={styles.fill}>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor="rgba(0, 0, 0, 0.251)"
            />
            <Animated.ScrollView
                style={styles.fill}
                scrollEventThrottle={1}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: scrollY}}}],
                    {useNativeDriver: true},
                )}>
                {_renderScrollViewContent()}
            </Animated.ScrollView>
            <Animated.View
                pointerEvents="none"
                style={[
                    styles.header,
                    {transform: [{translateY: headerTranslate}]},
                ]}>
                <Animated.Image
                    style={styles.backgroundImage}
                    source={{
                        uri:
                            'https://www.bigstockphoto.com/images/homepage/module-6.jpg',
                    }}
                />
            </Animated.View>
            <Animated.View style={styles.bar}>
                <Header
                    BodyComponent={null}
                    RightComponent={<HeaderRightComponent/>}
                />
            </Animated.View>
            <View style={{padding: 10}}>
                <Button><Text whiteColor>{i18n.t('main.booking.book_room')}</Text></Button>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
        height: 200,
    },
    fill: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    bar: {
        backgroundColor: 'transparent',
        marginTop: Platform.OS === 'ios' ? 20 : 30,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    scrollViewContent: {
        // iOS uses content inset, which acts like padding.
        paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20,
    },
    reviewBlock: {
        borderRadius: 10,
        backgroundColor: '#fff',
        marginTop: 5,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 10,
        elevation: 12,
    },
    titleReviewBlock: {
        textAlign: 'center',
    },
    titleReviewDescription: {
        textAlign: 'center',
        margin: 10,
    },
    blockReviews: {
        marginTop: 20,
    },
    commonRate: {
        display: 'flex',
        flexDirection: 'row',
    },
    ratePerTen: {
        backgroundColor: BaseColor.primaryColor,
        width: 60,
        height: 60,
        lineHeight: 60,
        borderRadius: 30,
        marginRight: 5,
        textAlign: 'center',
    },
    commonRateRight: {
        justifyContent: 'space-around',
    },
    rowReview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailReview: {
        marginTop: 15,
    },
    reviewItem: {
        marginBottom: 10,
        width: '48%',
    },
    reviewItemFirstLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    serviceItem: {
        alignItems: 'center',
        marginRight: 20,
    },
    iconHelp: {
        marginRight: 5,
        color: BaseColor.bluePrimaryColor,
    },
    reasonBlock: {
        marginLeft: 10,
    },
    reasonItem: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    reasonItemRight: {
        justifyContent: 'space-around',
        marginLeft: 10,
    }
});

HotelDetailScreen.propTypes = {};

export default HotelDetailScreen;
