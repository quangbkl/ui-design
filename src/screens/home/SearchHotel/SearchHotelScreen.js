import React, {useState} from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    FlatList,
    Modal,
    TouchableOpacity,
} from "react-native";
import {
    Item,
    DatePicker,
    Picker,
    List,
    ListItem,
    Icon,
    Input,
} from "native-base";
// import Modal from "react-native-modal";
import {Text, Button, CustomIcon} from "components";
import {BaseColor} from "config/color";
import {TextInput} from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";
import Header from "components/Header/Header";
import useApp from "hooks/app/useApp";
import locationSearch from "../../../__mocks__/db/location-search";
import _ from "lodash";
import {v4 as uuidv4} from "react-native-uuid";
import moment from "moment";
import appRoutes from '../../../navigations/appRoutes';

const selectNights = [...Array(31).keys()].map((el) => ({
    label: `${el + 1} đêm`,
    value: el + 1,
}));

const selectGuests = [...Array(32).keys()].map((el) => ({
    label: `${el + 1} khách`,
    value: el + 1,
}));

const selectRooms = [...Array(8).keys()].map((el) => ({
    label: `${el + 1} phòng`,
    value: el + 1,
}));

const SearchHotelScreen = (props) => {
    const [location, setLocation] = useState({
        code: '01',
        name: 'Thành phố Hà Nội',
    })
    const [checkinDate, setCheckinDate] = useState(moment().toDate());
    const [night, setNight] = useState(1);
    const [guest, setGuest] = useState(2);
    const [rooms, setRooms] = useState(1);
    const [visibleSearch, setVisibleSearch] = useState(false);
    const navigation = useNavigation();
    const {state: appState} = useApp();
    const {color} = appState;

    const onSearchHotels = () => {
        navigation.navigate(appRoutes.HOTELS, {
            searchParams: {
                location,
                checkinDate: moment(checkinDate).format("DD-MM-YYYY"),
                night,
                guest,
                rooms,
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
            <Header title="Tìm kiếm phòng"/>
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
                    <Item style={styles.right}>
                        <Picker
                            style={{width: "100%"}}
                            selectedValue={night}
                            onValueChange={setNight}
                            placeholder="Số đêm"
                        >
                            {selectNights.map((el) => (
                                <Picker.Item key={el.value} label={el.label} value={el.value}/>
                            ))}
                        </Picker>
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
                            selectedValue={rooms}
                            onValueChange={setRooms}
                            placeholder="Số phòng"
                        >
                            {selectRooms.map((el) => (
                                <Picker.Item key={el.value} label={el.label} value={el.value}/>
                            ))}
                        </Picker>
                    </Item>
                </View>
                {/* <Modal
          presentationStyle="formSheet"
          onRequestClose={() => setVisibleSearch(false)}
          animationType="slide"
          visible={visibleSearch}
        >
          <View style={[styles.contentModal]}>
            <View
              style={[styles.content, { backgroundColor: color.primaryColor }]}
            >
              <View style={[styles.subContent, { flex: 6 }]}>
                <Icon name="search" style={styles.icon} />
                <Input
                  onChangeText={onSearch}
                  style={[styles.text, { height: 40 }]}
                  placeholder="Nhập thành phố, khách sạn"
                />
              </View>
              <Text
                onPress={() => setVisibleSearch(false)}
                whiteColor
                style={[styles.text, { color: BaseColor.whiteColor, flex: 1 }]}
              >
                Hủy
              </Text>
            </View>
            <ScrollView>
              <List style={{ flex: 1 }}>
                {suggestionLocation.length ? (
                  suggestionLocation.map((el) => (
                    <ListItem
                      key={el.name}
                      style={{ justifyContent: "space-between" }}
                    >
                      <Text style={{ flex: 3 }}>{el.name}</Text>
                      <Text style={{ flex: 1 }} grayColor body2>
                        {el.noOfHotels} khách sạn
                      </Text>
                    </ListItem>
                  ))
                ) : (
                  <Text>Không có</Text>
                )}
              </List>
            </ScrollView>
          </View>
        </Modal> */}
            </ScrollView>
            <View style={{padding: 10}}>
                <Button onPress={onSearchHotels}>
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

export default SearchHotelScreen;
