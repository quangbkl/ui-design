import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import {BaseStyle} from "../../../config/theme";
import Header from "../../../components-v2/Header/Header";
import Icon from "../../../components-v2/Icon/Icon";
import BookingTime from "../../../components-v2/BookingTime/BookingTime";
import Text from "../../../components/Text/Text";
import Button from "../../../components-v2/Button/Button";
import useApp from "../../../hooks/app/useApp";
import {useNavigation} from "@react-navigation/native";
import HotelSearchModal from "./HotelSearchModal";
import appRoutes from "../../../navigations/appRoutes";
import moment from "moment";

const HotelSearchScreen = () => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const navigation = useNavigation();

    const [markedDates, setMarkedDates] = useState({});
    const [checkinTime, setCheckinTime] = useState('');
    const [checkoutTime, setCheckoutTime] = useState('');
    const [keyword, setKeyword] = useState('');
    const [adult, setAdult] = useState(1);
    const [children, setChildren] = useState(1);
    const [night, setNight] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [rooms, setRooms] = useState(1);
    const [location, setLocation] = useState({
        type: 'hotel',
        name: 'Hà Nội'
    })

    const onSearchHotels = () => {
        navigation.navigate(appRoutes.HOTELS, {
            searchParams: {
                location,
                checkinDate: moment(checkinTime).format("DD-MM-YYYY"),
                night,
                adult,
                children,
                rooms,
            }
        })
    }

    const handlePlusAdult = () => setAdult(adult + 1);
    const handleMinusAdult = () => setAdult(adult - 1 > 0 ? adult - 1 : 0);
    const handlePlusChildren = () => setChildren(children + 1);
    const handleMinusChildren = () => setChildren(children - 1 > 0 ? children - 1 : 0);
    const handlePlusNight = () => setNight(night + 1);
    const handleMinusNight = () => setNight(night - 1 > 0 ? night - 1 : 0);

    const styles = StyleSheet.create({
        contentPickDate: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
            borderRadius: 8,
            backgroundColor: colors.fieldColor,
            padding: 10
        },
        itemPick: {
            flex: 1,
            justifyContent: "center"
        },
        linePick: {
            width: 1,
            backgroundColor: colors.dividerColor,
            marginRight: 10
        },
        total: {
            flex: 6,
            borderRadius: 8,
            backgroundColor: colors.fieldColor,
            padding: 10,
            marginRight: 15
        },
        duration: {
            flex: 4,
            borderRadius: 8,
            backgroundColor: colors.fieldColor,
            padding: 10
        },
        contentQuest: {
            marginTop: 15,
            flexDirection: "row",
            marginBottom: 15
        },
        contentModal: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        },
        contentCalendar: {
            borderRadius: 8,
            width: "100%",
            backgroundColor: "white"
        },
        contentActionCalendar: {
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 15
        }
    });

    return (
        <SafeAreaView
            style={BaseStyle.safeAreaView}
            forceInset={{top: "always"}}
        >
            <HotelSearchModal
                modalVisible={modalVisible}
                adult={adult}
                children={children}
                night={night}
                closeModal={() => setModalVisible(false)}
                handlePlusAdult={handlePlusAdult}
                handleMinusAdult={handleMinusAdult}
                handlePlusChildren={handlePlusChildren}
                handleMinusChildren={handleMinusChildren}
                handlePlusNight={handlePlusNight}
                handleMinusNight={handleMinusNight}
            />
            <Header
                title="Search"
                renderLeft={() => {
                    return (
                        <Icon
                            name="times"
                            size={20}
                            color={colors.primaryColor}
                        />
                    );
                }}
                onPressLeft={() => {
                    navigation.goBack();
                }}
            />
            <ScrollView style={{padding: 20, flex: 1}}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: colors.fieldColor,
                        borderRadius: 5,
                        paddingHorizontal: 10
                    }}
                >
                    <Icon
                        name="map-marker-alt"
                        size={14}
                        color={colors.grayColor}
                    />
                    <TextInput
                        style={[BaseStyle.textInput]}
                        onChangeText={setKeyword}
                        autoCorrect={false}
                        placeholder="What're you looking for ?"
                        placeholderTextColor={colors.grayColor}
                        value={keyword}
                        selectionColor={colors.primaryColor}
                    />
                </View>
                <BookingTime style={{marginTop: 15}}/>
                <View style={styles.contentQuest}>
                    <TouchableOpacity
                        style={styles.total}
                        onPress={() => setModalVisible('guest')}
                    >
                        <Text
                            caption1
                            grayColor
                            style={{marginBottom: 5}}
                        >
                            Total Guest(s)
                        </Text>
                        <Text body1 semibold>{adult} Adults, {children} Children</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.duration}
                        onPress={() => setModalVisible('duration')}
                    >
                        <Text
                            caption1
                            grayColor
                            style={{marginBottom: 5}}
                        >
                            Duration
                        </Text>
                        <Text body1 semibold>{night} Night</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={{paddingHorizontal: 20, marginBottom: 20}}>
                <Button
                    full
                    onPress={() => {
                        setLoading(true);
                        setTimeout(onSearchHotels, 1000);
                    }}
                    loading={loading}
                >
                    Apply
                </Button>
            </View>
        </SafeAreaView>
    );
};

HotelSearchScreen.propTypes = {};

export default HotelSearchScreen;
