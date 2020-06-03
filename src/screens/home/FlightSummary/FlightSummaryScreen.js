import React from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useApp from '../../../hooks/app/useApp';
import {BaseStyle} from '../../../config/theme';
import Header from '../../../components-v2/Header/Header';
import Icon from '../../../components-v2/Icon/Icon';
import FlightPlan from '../../../components-v2/FlightPlan/FlightPlan';
import Text from '../../../components/Text/Text';
import FlightItem from '../../../components-v2/FlightItem/FlightItem';
import Button from '../../../components-v2/Button/Button';
import appRoutes from '../../../navigations/appRoutes';

const FlightSummaryScreen = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        contain: {
            padding: 20,
            width: '100%'
        },
        line: {
            width: '100%',
            height: 1,
            borderWidth: 0.5,
            borderColor: colors.dividerColor,
            borderStyle: 'dashed',
            marginTop: 15
        },
        contentButtonBottom: {
            borderTopColor: colors.textSecondaryColor,
            borderTopWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    });

    return (
        <SafeAreaView
            style={BaseStyle.safeAreaView}
            forceInset={{top: 'always'}}
        >
            <Header
                title="Booking Summary"
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
                <View style={styles.contain}>
                    <FlightPlan
                        round={true}
                        fromCode="SIN"
                        toCode="SYD"
                        from="Singapore"
                        to="Sydney"
                    />
                    <View style={styles.line}/>
                    <Text title3 style={{paddingVertical: 10}}>
                        Thu, 15 Aug 2019
                    </Text>
                    <FlightItem
                        from={{
                            name: 'United State',
                            value: 'USA',
                            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/f83c634bd07d42718b300a413796dc33/airlines-united-states-of-america.png',
                            hour: '05:00'
                        }}
                        to={{
                            name: 'Singapore',
                            value: 'SIN',
                            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/e1decefe3ff24aed5616b0eab8910c2a/airlines-singapore.png',
                            hour: '18:00'
                        }}
                        totalHour={13.5}
                        brand="Singapore Air"
                        image={'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/e1decefe3ff24aed5616b0eab8910c2a/airlines-singapore.png'}
                        type="Economy"
                        price="$499.99"
                        route="Non Stop"
                        onPress={() => navigation.navigate(appRoutes.FLIGHT_TICKET)}
                    />
                    <View style={styles.line}/>
                    <Text title3 style={{paddingVertical: 10}}>
                        Thu, 20 Aug 2019
                    </Text>
                    <FlightItem
                        from={{
                            name: 'United State',
                            value: 'USA',
                            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/f83c634bd07d42718b300a413796dc33/airlines-united-states-of-america.png',
                            hour: '05:00'
                        }}
                        to={{
                            name: 'Singapore',
                            value: 'SIN',
                            image: 'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/f10612db015857fc3da8a25c18b6ab14/airlines-emirates.png',
                            hour: '18:00'
                        }}
                        totalHour={13.5}
                        brand="Emirates Air"
                        image={'https://trello-attachments.s3.amazonaws.com/5de6027309058f7946486b09/5ed47e918d299413cc684875/f10612db015857fc3da8a25c18b6ab14/airlines-emirates.png'}
                        type="Economy"
                        price="$499.99"
                        route="Non Stop"
                        onPress={() => navigation.navigate(appRoutes.FLIGHT_TICKET)}
                    />
                </View>
            </ScrollView>
            <View style={styles.contentButtonBottom}>
                <View>
                    <Text caption1 semibold>
                        Total Price for 5 Person(s)
                    </Text>
                    <Text title3 primaryColor semibold>
                        $399.99
                    </Text>
                    <Text caption1 semibold style={{marginTop: 5}}>
                        All Charged Included
                    </Text>
                </View>
                <Button
                    style={{height: 46}}
                    onPress={() => navigation.navigate(appRoutes.PREVIEW_BOOKING)}
                >
                    Book Now
                </Button>
            </View>
        </SafeAreaView>
    );
};

export default FlightSummaryScreen;
