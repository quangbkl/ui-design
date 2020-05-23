import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {
    Item,
    DatePicker,
    Picker,
    List,
    ListItem,
    Icon,
} from 'native-base';
import Modal from 'react-native-modal';
import {Text, Button, CustomIcon} from 'components';
import {BaseColor} from 'config/color';
import {TextInput} from 'react-native-gesture-handler';
import Header from 'components/Header/Header';

const selectNights = [...Array(31).keys()].map(el => ({
    label: `${el + 1} đêm`,
    value: el + 1,
}));

const selectGuests = [...Array(32).keys()].map(el => ({
    label: `${el + 1} khách`,
    value: el + 1,
}));

const selectRooms = [...Array(8).keys()].map(el => ({
    label: `${el + 1} phòng`,
    value: el + 1,
}));

const SearchHotelScreen = props => {
    const [night, setNight] = useState(1);
    const [guest, setGuest] = useState(2);
    const [rooms, setRooms] = useState(1);
    const [visibleSearch, setVisibleSearch] = useState(false);

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header
                title="Tìm kiếm phòng"
            />
            <ScrollView>
                <Item
                    style={styles.item}
                    onPress={() => setVisibleSearch(true)}>
                    <CustomIcon
                        style={{marginRight: 8}}
                        color={BaseColor.bluePrimaryColor}
                        type="map-marker-alt"
                    />
                    <Text style={{padding: 5}}>Chọn điểm đến</Text>
                </Item>
                <View style={[styles.item, styles.grid]}>
                    <Item style={styles.left}>
                        <CustomIcon
                            color={BaseColor.bluePrimaryColor}
                            type="calendar-alt"
                        />
                        <DatePicker placeHolderText="Ngày nhận phòng" />
                    </Item>
                    <Item style={styles.right}>
                        <Picker
                            style={{width: '100%'}}
                            selectedValue={night}
                            onValueChange={setNight}
                            placeholder="Số đêm">
                            {selectNights.map(el => (
                                <Picker.Item
                                    key={el.value}
                                    label={el.label}
                                    value={el.value}
                                />
                            ))}
                        </Picker>
                    </Item>
                </View>
                <View style={[styles.item, styles.grid]}>
                    <Item style={styles.left}>
                        <Picker
                            style={{width: '100%'}}
                            selectedValue={guest}
                            onValueChange={setGuest}
                            placeholder="Số khách">
                            {selectGuests.map(el => (
                                <Picker.Item
                                    key={el.value}
                                    label={el.label}
                                    value={el.value}
                                />
                            ))}
                        </Picker>
                    </Item>
                    <Item style={styles.right}>
                        <Picker
                            style={{width: '100%'}}
                            selectedValue={rooms}
                            onValueChange={setRooms}
                            placeholder="Số phòng">
                            {selectRooms.map(el => (
                                <Picker.Item
                                    key={el.value}
                                    label={el.label}
                                    value={el.value}
                                />
                            ))}
                        </Picker>
                    </Item>
                </View>
                <Modal
                    isVisible={visibleSearch}
                    onSwipeComplete={() => setVisibleSearch(false)}
                    swipeDirection={['down']}
                    style={{justifyContent: 'flex-end', margin: 0}}>
                    <View style={styles.contentModal}>
                        <View style={styles.content}>
                            <View style={styles.subContent}>
                                <Icon name="search" style={styles.icon} />
                                <TextInput
                                    style={styles.text}
                                    placeholder="Chọn thành phố, khách sạn"
                                />
                            </View>
                            <Text
                                onPress={() => setVisibleSearch(false)}
                                whiteColor
                                style={[
                                    styles.text,
                                    {color: BaseColor.whiteColor},
                                ]}>
                                Hủy
                            </Text>
                        </View>

                        <ScrollView style={{maxHeight: 300}}>
                            <List>
                                <ListItem itemDivider>
                                    <Text bluePrimaryColor>
                                        Tìm kiếm gần đây
                                    </Text>
                                </ListItem>
                                <ListItem
                                    style={{justifyContent: 'space-between'}}>
                                    <Text>Vĩnh Phúc</Text>
                                    <Text grayColor body2>
                                        3000 khách sạn của chị Thúy
                                    </Text>
                                </ListItem>
                                <ListItem
                                    style={{justifyContent: 'space-between'}}>
                                    <Text>Hà Nội</Text>
                                    <Text grayColor body2>
                                        300 khách sạn
                                    </Text>
                                </ListItem>
                                <ListItem
                                    style={{justifyContent: 'space-between'}}>
                                    <Text>Aaron Bennet</Text>
                                    <Text grayColor body2>
                                        300 khách sạn
                                    </Text>
                                </ListItem>
                                <ListItem
                                    style={{justifyContent: 'space-between'}}>
                                    <Text>Vĩnh Phúc</Text>
                                    <Text grayColor body2>
                                        3000 khách sạn của chị Thúy
                                    </Text>
                                </ListItem>
                                <ListItem
                                    style={{justifyContent: 'space-between'}}>
                                    <Text>Hà Nội</Text>
                                    <Text grayColor body2>
                                        300 khách sạn
                                    </Text>
                                </ListItem>
                                <ListItem
                                    style={{justifyContent: 'space-between'}}>
                                    <Text>Aaron Bennet</Text>
                                    <Text grayColor body2>
                                        300 khách sạn
                                    </Text>
                                </ListItem>
                            </List>
                        </ScrollView>
                    </View>
                </Modal>
            </ScrollView>
            <View style={{padding: 10}}>
                <Button>
                    <Text whiteColor>Tìm kiếm</Text>
                </Button>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        backgroundColor: BaseColor.bluePrimaryColor,
        height: 54,
        justifyContent: 'center',
    },
    subContent: {
        flexDirection: 'row',
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: BaseColor.whiteColor,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 4,
        marginRight: 16,
        borderRadius: 8,
        width: 330,
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
        flexDirection: 'row',
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 1,
    },
    inLine: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    contentModal: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    icon: {
        color: BaseColor.grayColor,
        marginLeft: 8,
        marginRight: 8,
        alignSelf: 'center',
        fontSize: 22,
    },
    text: {
        fontSize: 16,
        alignSelf: 'center',
        color: BaseColor.grayColor,
    },
});

export default SearchHotelScreen;
