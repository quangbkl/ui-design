import React, {useState} from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    ScrollView,
} from "react-native";
import {
    Item,
    DatePicker,
    Picker,
} from "native-base";
import {Text, Button, CustomIcon} from "components";
import {BaseColor} from "config/color";

import {useNavigation} from "@react-navigation/native";
import Header from "components/Header/Header";
import useApp from "hooks/app/useApp";
import moment from "moment";
import appRoutes from 'navigations/appRoutes';

const selectDays = [...Array(31).keys()].map((el) => ({
    label: `${el + 1} ngày`,
    value: el + 1,
}));

const selectGuests = [...Array(32).keys()].map((el) => ({
    label: `${el + 1} khách`,
    value: el + 1,
}));


const SearchTourScreen = (props) => {
    const [location, setLocation] = useState({
        code: '48',
        name: 'Thành phố Đà Nẵng',
    });
    const [checkinDate, setCheckinDate] = useState(moment().toDate());
    const [day, setDay] = useState(3);
    const [guest, setGuest] = useState(3);
    const navigation = useNavigation();
    const {state: appState} = useApp();
    const {color} = appState;

    const onSearchTours = () => {
        navigation.navigate(appRoutes.TOURS, {
            searchParams: {
                location,
                checkinDate: moment(checkinDate).format("DD-MM-YYYY"),
	            day,
                guest,
            }
        })
    }

    const onSelectLocation = () => {
        navigation.navigate(appRoutes.SELECT_PROVINCE, {
            selected: location,
            onChangeLocation: setLocation,
        });
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title="Tìm kiếm Tour"/>
            <ScrollView>
                <Item style={styles.item} onPress={onSelectLocation}>
                    <CustomIcon
                        style={{marginRight: 8, marginLeft: 6}}
                        color={color.primaryColor}
                        type="map-marker-alt"
                    />
                    <Text style={{padding: 5}}>{location ? location.name : 'Chọn điểm đến'}</Text>
                </Item>
                <View style={[styles.item, styles.grid]}>
                    <Item style={styles.left}>
                        <CustomIcon
                            style={{marginLeft: 5}}
                            color={color.primaryColor}
                            type="calendar-alt"
                        />
                        <DatePicker
                            defaultDate={checkinDate}
                            onDateChange={setCheckinDate}
                        />
                    </Item>
                    
                </View>
                <View style={[styles.item, styles.grid]}>
                    <Item style={styles.left}>
                        <Picker
                            style={{width: "100%", marginLeft: 15}}
                            selectedValue={guest}
                            onValueChange={setGuest}
                            placeholder="Số khách"
                        >
                            {selectGuests.map((el) => (
                                <Picker.Item key={el.value} label={el.label} value={el.value}/>
                            ))}
                        </Picker>
                    </Item>
	                <Item style={styles.right}>
		                <Picker
			                style={{width: "100%"}}
			                selectedValue={day}
			                onValueChange={setDay}
			                placeholder="Số đêm"
		                >
			                {selectDays.map((el) => (
				                <Picker.Item key={el.value} label={el.label} value={el.value}/>
			                ))}
		                </Picker>
	                </Item>
                </View>
            </ScrollView>
            <View style={{padding: 10}}>
                <Button onPress={onSearchTours}>
                    <Text whiteColor>Tìm kiếm</Text>
                </Button>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
        height: 60,
        justifyContent: "center",
    },
    subContent: {
        flexDirection: "row",
        alignContent: "center",
        alignSelf: "center",
        backgroundColor: BaseColor.whiteColor,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 4,
        marginRight: 16,
        borderRadius: 8,
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    item: {
        marginLeft: 10,
        marginRight: 10,
        margin: 10,
    },
    grid: {
        flex: 1,
        flexDirection: "row",
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 1,
    },
    inLine: {
        flexDirection: "row",
        justifyContent: "center",
    },
    contentModal: {
        backgroundColor: "white",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
        flex: 1,
    },
    icon: {
        color: BaseColor.grayColor,
        marginLeft: 8,
        marginRight: 8,
        alignSelf: "center",
        fontSize: 22,
    },
    text: {
        fontSize: 16,
        alignSelf: "center",
        color: BaseColor.grayColor,
    },
});

export default SearchTourScreen;
