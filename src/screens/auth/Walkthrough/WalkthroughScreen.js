import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import appRoutes from '../../../navigations/appRoutes';
import scaleWithPixel from 'helpers/scaleWithPixel';
import {BaseStyle} from 'config/theme';
import useApp from 'hooks/app/useApp';
import {useNavigation} from '@react-navigation/native';
import Text from '../../../components/Text/Text';
import Button from 'components-v2/Button/Button';
import firebase from 'firebase';

const WalkthroughScreen = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    const slide = [
        {
            key: '1',
            image: 'https://znews-photo.zadn.vn/w1024/Uploaded/OFH_oazszstq/2018_11_07/p90329147highres.jpg',
            text: 'Picking your travel destinations'
        },
        {
            key: '2',
            image: 'https://dichvuxe.vn/wp-content/uploads/2019/01/bmw-s1000rr-2019-ra-mat-khong-con-mat-le-quen-thuoc-163.jpg',
            text: 'Picking your travel destinations'
        },
        {
            key: '3',
            image: 'https://i1.wp.com/www.asphaltandrubber.com/wp-content/uploads/2019/03/2019-BMW-S1000RR-Estoril-press-launch-11-scaled.jpg',
            text: 'Picking your travel destinations'
        }
    ];

    const styles = StyleSheet.create({
        contain: {
            paddingHorizontal: 20,
            marginVertical: 20
        },
        wrapper: {
            width: '100%',
            height: 350
        },
        contentPage: {
            bottom: 0
        },
        contentActionBottom: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 25
        },
        img: {
            width: scaleWithPixel(200),
            height: scaleWithPixel(200),
            borderRadius: scaleWithPixel(200) / 2
        },
        slide: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        },
        textSlide: {
            marginTop: 30
        }
    });

    const checkUser = async () => {
        console.log("sdfsdf")
        const user = await firebase.auth().currentUser;
        if (user) {
            navigation.navigate(appRoutes.MAIN)
        }
    }

    useEffect(() => {
        checkUser()
    }, [])

    return (
        <SafeAreaView
            style={BaseStyle.safeAreaView}
            forceInset={{top: 'always'}}
        >
            <ScrollView style={styles.contain}>
                <View style={styles.wrapper}>
                    <Swiper
                        dotStyle={{
                            backgroundColor: colors.textSecondaryColor
                        }}
                        activeDotColor={colors.primaryColor}
                        paginationStyle={styles.contentPage}
                        removeClippedSubviews={false}
                    >
                        {slide.map((item, index) => {
                            return (
                                <View style={styles.slide} key={item.key}>
                                    <Image
                                        source={{uri: item.image}}
                                        style={styles.img}
                                    />
                                    <Text body1 style={styles.textSlide}>
                                        {item.text}
                                    </Text>
                                </View>
                            );
                        })}
                    </Swiper>
                </View>
                <View style={{width: '100%'}}>
                    <Button
                        full
                        style={{
                            backgroundColor: colors.navyBlue,
                            marginTop: 20
                        }}
                        onPress={() => navigation.navigate(appRoutes.MAIN)}
                    >
                        Login with Facebook
                    </Button>
                    <Button
                        full
                        style={{marginTop: 20}}
                        loading={loading}
                        onPress={() => navigation.navigate(appRoutes.SIGN_IN)}
                    >
                        Sign In
                    </Button>
                    <View style={styles.contentActionBottom}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(appRoutes.SIGN_UP)}
                        >
                            <Text body1 grayColor>
                                Haven’t registered yet?
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate(appRoutes.MAIN)}
                        >
                            <Text body1 primaryColor>
                                Join Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default WalkthroughScreen;
