import React, {useState, useEffect} from 'react';
import {
    RefreshControl,
    View,
    Animated,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import useApp from '../../../hooks/app/useApp';
import {useNavigation} from '@react-navigation/native';
import {BaseStyle} from '../../../config/theme';
import Header from '../../../components-v2/Header/Header';
import Icon from '../../../components-v2/Icon/Icon';
import FilterSort from '../../../components-v2/FilterSort/FilterSort';
import FlightItem from '../../../components-v2/FlightItem/FlightItem';
import appRoutes from '../../../navigations/appRoutes';

const FlightData = [
    {
        id: '1',
        from: {
            name: 'United State',
            value: 'USA',
            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/f83c634bd07d42718b300a413796dc33/airlines-united-states-of-america.png',
            hour: '05:00'
        },
        to: {
            name: 'Singapore',
            value: 'SIN',
            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/e1decefe3ff24aed5616b0eab8910c2a/airlines-singapore.png',
            hour: '18:00'
        },
        totalHour: 13.5,
        brand: 'Emirates Air',
        image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/f10612db015857fc3da8a25c18b6ab14/airlines-emirates.png',
        type: 'Economy',
        price: '$499.99',
        route: 'Non Stop'
    },
    {
        id: '2',
        from: {
            name: 'Singapore',
            value: 'SIN',
            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/e1decefe3ff24aed5616b0eab8910c2a/airlines-singapore.png',
            hour: '06:00'
        },
        to: {
            name: 'United State',
            value: 'USA',
            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/f83c634bd07d42718b300a413796dc33/airlines-united-states-of-america.png',
            hour: '19:00'
        },
        totalHour: 18.5,
        brand: 'Singapore Air',
        image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/e1decefe3ff24aed5616b0eab8910c2a/airlines-singapore.png',
        type: 'Business',
        price: '$599.99',
        route: 'Non Stop'
    },
    {
        id: '3',
        from: {
            name: 'Singapore',
            value: 'SIN',
            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/e1decefe3ff24aed5616b0eab8910c2a/airlines-singapore.png',
            hour: '07:00'
        },
        to: {
            name: 'United State',
            value: 'USA',
            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/f83c634bd07d42718b300a413796dc33/airlines-united-states-of-america.png',
            hour: '20:30'
        },
        totalHour: 18.5,
        brand: 'United State of America',
        image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/f83c634bd07d42718b300a413796dc33/airlines-united-states-of-america.png',
        type: 'Business',
        price: '$599.99',
        route: 'Non Stop'
    },
    {
        id: '4',
        from: {
            name: 'Singapore',
            value: 'SIN',
            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/e1decefe3ff24aed5616b0eab8910c2a/airlines-singapore.png',
            hour: '08:00'
        },
        to: {
            name: 'United State',
            value: 'USA',
            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/f83c634bd07d42718b300a413796dc33/airlines-united-states-of-america.png',
            hour: '21:30'
        },
        totalHour: 18.5,
        brand: 'Singapore Air',
        image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/e1decefe3ff24aed5616b0eab8910c2a/airlines-singapore.png',
        type: 'Business',
        price: '$699.99',
        route: 'Non Stop'
    },
    {
        id: '5',
        from: {
            name: 'Singapore',
            value: 'SIN',
            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/e1decefe3ff24aed5616b0eab8910c2a/airlines-singapore.png',
            hour: '08:00'
        },
        to: {
            name: 'United State',
            value: 'USA',
            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/f83c634bd07d42718b300a413796dc33/airlines-united-states-of-america.png',
            hour: '21:30'
        },
        totalHour: 18.5,
        brand: 'Singapore Air',
        image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/e1decefe3ff24aed5616b0eab8910c2a/airlines-singapore.png',
        type: 'Business',
        price: '$699.99',
        route: 'Non Stop'
    },
    {
        id: '6',
        from: {
            name: 'Singapore',
            value: 'SIN',
            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/e1decefe3ff24aed5616b0eab8910c2a/airlines-singapore.png',
            hour: '08:00'
        },
        to: {
            name: 'United State',
            value: 'USA',
            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/f83c634bd07d42718b300a413796dc33/airlines-united-states-of-america.png',
            hour: '21:30'
        },
        totalHour: 18.5,
        brand: 'Singapore Air',
        image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/e1decefe3ff24aed5616b0eab8910c2a/airlines-singapore.png',
        type: 'Business',
        price: '$699.99',
        route: 'Non Stop'
    }
];

const FlightResultScreen = () => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const navigation = useNavigation();

    const [refreshing, setRefreshing] = useState(false);
    const [flights, setFlights] = useState(FlightData);
    const [scrollAnim, setScrollAnim] = useState(new Animated.Value(0));
    const [offsetAnim, setOffsetAnim] = useState(new Animated.Value(0));
    const [clampedScroll, setClampedScroll] = useState(Animated.diffClamp(
        Animated.add(
            scrollAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp'
            }),
            offsetAnim
        ),
        0,
        40
    ));

    const styles = StyleSheet.create({
        navbar: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 20,
            backgroundColor: colors.whiteColor
        }
    });

    const onChangeSort = () => {
    };

    const onFilter = () => {
        navigation.navigate('FlightFilter');
    };

    const onChangeView = () => {
    };

    const renderContent = () => {
        const navbarTranslate = clampedScroll.interpolate({
            inputRange: [0, 40],
            outputRange: [0, -40],
            extrapolate: 'clamp'
        });

        return (
            <View style={{flex: 1}}>
                <Animated.FlatList
                    contentContainerStyle={{paddingTop: 50}}
                    refreshControl={
                        <RefreshControl
                            colors={[colors.primaryColor]}
                            tintColor={colors.primaryColor}
                            refreshing={refreshing}
                            onRefresh={() => {
                            }}
                        />
                    }
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        y: scrollAnim
                                    }
                                }
                            }
                        ],
                        {useNativeDriver: true}
                    )}
                    data={flights}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item, index}) => (
                        <FlightItem
                            style={{marginBottom: 10, marginHorizontal: 20}}
                            from={item.from}
                            to={item.to}
                            totalHour={item.totalHour}
                            brand={item.brand}
                            image={item.image}
                            type={item.type}
                            price={item.price}
                            route={item.route}
                            onPress={() => navigation.navigate(appRoutes.FLIGHT_SUMMARY)}
                        />
                    )}
                />

                <Animated.View
                    style={[
                        styles.navbar,
                        {transform: [{translateY: navbarTranslate}]}
                    ]}
                >
                    <FilterSort
                        labelCustom="204 results"
                        onChangeSort={onChangeSort}
                        onFilter={onFilter}
                    />
                </Animated.View>
            </View>
        );
    };

    return (
        <SafeAreaView
            style={BaseStyle.safeAreaView}
        >
            <Header
                title="SIN to SYN"
                subTitle="24 Dec 2018, 5 pax, Economy"
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
            {renderContent()}
        </SafeAreaView>
    );
};

export default FlightResultScreen;
