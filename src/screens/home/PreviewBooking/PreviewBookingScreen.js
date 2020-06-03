import React from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import useApp from '../../../hooks/app/useApp';
import {useNavigation} from '@react-navigation/native';
import {BaseStyle} from '../../../config/theme';
import Header from '../../../components-v2/Header/Header';
import Icon from '../../../components-v2/Icon/Icon';
import Text from '../../../components/Text/Text';
import Button from '../../../components-v2/Button/Button';

const PreviewBookingScreen = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        contentButtonBottom: {
            borderTopColor: colors.textSecondaryColor,
            borderTopWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        blockView: {
            paddingVertical: 10,
            borderBottomColor: colors.textSecondaryColor,
            borderBottomWidth: 1
        }
    });

    return (
        <SafeAreaView
            style={BaseStyle.safeAreaView}
            forceInset={{top: 'always'}}
        >
            <Header
                title="Preview Booking"
                subTitle="Booking Number GAX02"
                renderLeft={() => {
                    return (
                        <Icon
                            name="arrow-left"
                            size={20}
                            color={colors.primaryColor}
                        />
                    );
                }}
                onPressLeft={() => {
                    navigation.goBack();
                }}
            />
            <ScrollView>
                <View style={{paddingHorizontal: 20}}>
                    <View style={styles.blockView}>
                        <Text body2 style={{marginBottom: 10}}>
                            Hotel
                        </Text>
                        <Text body1 semibold>
                            Hilton San Francisco
                        </Text>
                    </View>
                    <View style={styles.blockView}>
                        <View
                            style={{flexDirection: 'row', marginTop: 10}}
                        >
                            <View style={{flex: 1}}>
                                <Text body2>Check-In</Text>
                            </View>
                            <View
                                style={{flex: 1, alignItems: 'flex-end'}}
                            >
                                <Text body2 semibold>
                                    Check-In
                                </Text>
                                <Text caption1 grayColor>
                                    Sun, 14:00
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{flexDirection: 'row', marginTop: 10}}
                        >
                            <View style={{flex: 1}}>
                                <Text body2>Check-Out</Text>
                            </View>
                            <View
                                style={{flex: 1, alignItems: 'flex-end'}}
                            >
                                <Text body2 semibold>
                                    Check-In
                                </Text>
                                <Text caption1 grayColor>
                                    Sun, 14:00
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{flexDirection: 'row', marginTop: 10}}
                        >
                            <View style={{flex: 1}}>
                                <Text body2>Duration</Text>
                            </View>
                            <View
                                style={{flex: 1, alignItems: 'flex-end'}}
                            >
                                <Text body2 semibold>
                                    1 night(s)
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.blockView}>
                        <Text body2 style={{marginBottom: 10}}>
                            Room
                        </Text>
                        <Text body1 semibold style={{marginBottom: 5}}>
                            Standard Twin Room (x1)
                        </Text>
                        <Text body2 style={{marginBottom: 5}}>
                            Lorem ipsum dolor sit amet,sed diam
                        </Text>
                        <Text body2 style={{marginBottom: 5}}>
                            Lorem ipsum dolor sit amet,sed diam
                        </Text>
                        <Text body2 style={{marginBottom: 5}}>
                            Lorem ipsum dolor sit amet,sed diam
                        </Text>
                    </View>
                    <View style={styles.blockView}>
                        <Text body2 style={{marginBottom: 10}}>
                            Contact’s Name
                        </Text>
                        <Text body1 semibold style={{marginBottom: 5}}>
                            Standard Twin Room (x1)
                        </Text>
                        <Text body2 grayColor style={{marginBottom: 5}}>
                            Lorem ipsum dolor sit amet,sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, At vero eos et accusam et justo
                            duo dolores et ea rebum.
                        </Text>
                    </View>
                    <View style={{paddingVertical: 10}}>
                        <Text body2 style={{marginBottom: 10}}>
                            Price Details
                        </Text>
                        <Text body1 semibold style={{marginBottom: 5}}>
                            Standard Twin Room (x1)
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.contentButtonBottom}>
                <View>
                    <Text caption1 semibold>
                        2 Days / 1 Night
                    </Text>
                    <Text title3 primaryColor semibold>
                        $399.99
                    </Text>
                    <Text caption1 semibold style={{marginTop: 5}}>
                        2 Adults / 1 Children
                    </Text>
                </View>
                <Button
                    style={{height: 46}}
                    onPress={() => navigation.navigate('CheckOut')}
                >
                    Continue
                </Button>
            </View>
        </SafeAreaView>
    );
};

export default PreviewBookingScreen;
