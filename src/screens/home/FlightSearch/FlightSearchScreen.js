import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BaseStyle} from '../../../config/theme';
import Header from '../../../components-v2/Header/Header';
import Icon from '../../../components-v2/Icon/Icon';
import useApp from '../../../hooks/app/useApp';
import Button from '../../../components-v2/Button/Button';
import Tag from '../../../components-v2/Tag/Tag';
import FlightPlan from '../../../components-v2/FlightPlan/FlightPlan';
import BookingTime from '../../../components-v2/BookingTime/BookingTime';
import FormOption from '../../../components-v2/FormOption/FormOption';
import QuantityPicker from '../../../components-v2/QuantityPicker/QuantityPicker';
import appRoutes from '../../../navigations/appRoutes';

const FlightSearchScreen = () => {
    const [round, setRound] = useState(true);
    const [loading, setLoading] = useState(false);
    const [from, setFrom] = useState({
        id: '2',
        name: 'Singapore',
        value: 'SIN',
        image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/e1decefe3ff24aed5616b0eab8910c2a/airlines-singapore.png'
    });
    const [to, setTo] = useState({
        to: {
            id: '3',
            name: 'Sydney',
            value: 'SYN',
            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/f10612db015857fc3da8a25c18b6ab14/airlines-emirates.png'
        }
    });

    const navigation = useNavigation();

    const {state: appState} = useApp();
    const {colors} = appState;

    const styles = StyleSheet.create({
        contain: {
            paddingHorizontal: 20,
            paddingTop: 10,
            marginBottom: 10,
            width: '100%'
        },
        flightType: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        contentRow: {flexDirection: 'row', marginTop: 20},
        centerView: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        colCenter: {flex: 1, alignItems: 'center'}
    });

    const onSetFlightType = setRound;

    const onSelectFlight = (type) => {
        switch (type) {
            case 'to':
                navigation.navigate(appRoutes.SELECT_FLIGHT, {
                    selected: to,
                    onChangeAir: setTo
                });
                break;
            case 'from':
                navigation.navigate(appRoutes.SELECT_FLIGHT, {
                    selected: from,
                    onChangeAir: setFrom
                });
                break;
            default:
                break;
        }
    };


    return (
        <SafeAreaView
            style={[BaseStyle.safeAreaView, {backgroundColor: colors.backgroundPrimaryColor}]}
            forceInset={{top: 'always'}}
        >
            <Header
                title="Search Flight"
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

            <ScrollView style={styles.contain}>
                <View style={styles.flightType}>
                    <Tag
                        outline={!round}
                        round
                        onPress={() => onSetFlightType(true)}
                        style={{marginRight: 20}}
                    >
                        Round Trip
                    </Tag>
                    <Tag
                        outline={round}
                        round
                        onPress={() => onSetFlightType(false)}
                    >
                        One Way
                    </Tag>
                </View>

                <FlightPlan
                    round={round}
                    fromCode={from.value}
                    toCode={to.value}
                    from={from.name}
                    to={to.name}
                    style={{marginTop: 20}}
                    onPressFrom={() => onSelectFlight('from')}
                    onPressTo={() => onSelectFlight('to')}
                />

                <BookingTime style={{marginTop: 20}}/>
                <FormOption style={{marginTop: 20}}/>

                <View style={{marginTop: 20, flexDirection: 'row'}}>
                    <QuantityPicker
                        label="Adults"
                        detail=">= 12 years"
                        value={1}
                    />
                    <QuantityPicker
                        label="Childrens"
                        detail="2 - 12 years"
                        value={1}
                        style={{marginHorizontal: 15}}
                    />
                    <QuantityPicker
                        label="Infants"
                        detail="<= 2 years"
                        value={1}
                    />
                </View>
            </ScrollView>

            <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
                <Button
                    loading={loading}
                    full
                    onPress={() => {
                        setLoading(true);
                        setTimeout(() => {
                            navigation.navigate(appRoutes.FLIGHT_RESULT);
                            setLoading(false);
                        }, 500);
                    }}
                >
                    Search
                </Button>
            </View>
        </SafeAreaView>
    );
};

FlightSearchScreen.propTypes = {};

export default FlightSearchScreen;
