import React from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import useApp from '../../../hooks/app/useApp';
import {useNavigation} from '@react-navigation/native';
import {BaseStyle} from '../../../config/theme';
import Header from '../../../components-v2/Header/Header';
import Icon from '../../../components-v2/Icon/Icon';
import Tag from '../../../components-v2/Tag/Tag';
import FlightPlan from '../../../components-v2/FlightPlan/FlightPlan';
import Text from '../../../components/Text/Text';

const FlightTicketScreen = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        contain: {
            padding: 20,
            width: '100%'
        },
        classContent: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 15
        },
        line: {
            width: '100%',
            height: 1,
            borderWidth: 0.5,
            borderColor: colors.dividerColor,
            borderStyle: 'dashed',
            marginVertical: 20
        },
        code: {
            width: '100%',
            backgroundColor: colors.textPrimaryColor,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });

    return (
        <SafeAreaView
            style={[BaseStyle.safeAreaView, {backgroundColor: colors.backgroundPrimaryColor}]}
            forceInset={{top: 'always'}}
        >
            <Header
                title="Ticket"
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
                    <View style={styles.classContent}>
                        <Tag outline={true} round>
                            Economic Class
                        </Tag>
                    </View>
                    <FlightPlan
                        round={false}
                        fromCode="SIN"
                        toCode="SYD"
                        from="Singapore"
                        to="Sydney"
                    />
                    <View style={styles.line}/>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <Text caption1 light>
                                Passenger
                            </Text>
                            <Text headline style={{marginTop: 5}}>
                                Steve Garrett
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text caption1 light>
                                Date
                            </Text>
                            <Text headline style={{marginTop: 5}}>
                                Thu, 15 Aug 09
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 25}}>
                        <View style={{flex: 1}}>
                            <Text caption1 light>
                                Flight
                            </Text>
                            <Text headline style={{marginTop: 5}}>
                                SIN1009
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text caption1 light>
                                Gate
                            </Text>
                            <Text headline style={{marginTop: 5}}>
                                22A
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 25}}>
                        <View style={{flex: 1}}>
                            <Text caption1 light>
                                Class
                            </Text>
                            <Text headline style={{marginTop: 5}}>
                                Economic Class
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text caption1 light>
                                Seat
                            </Text>
                            <Text headline style={{marginTop: 5}}>
                                21D
                            </Text>
                        </View>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.code}>
                        <Text header style={{color: colors.backgroundPrimaryColor}}>
                            CLMVBG
                        </Text>
                    </View>
                    <Text
                        caption1
                        light
                        style={{textAlign: 'center', marginTop: 15}}
                    >
                        0944 0923 1238 9801
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FlightTicketScreen;
