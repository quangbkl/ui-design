import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Text from "components/Text/Text";
import Icon from "components-v2/Icon/Icon";
import useApp from "hooks/app/useApp";

const RoomsModal = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const {rooms, handlePlusRooms, handleMinusRooms} = props;

    const [modalVisible, setModalVisible] = useState(false);

    const styles = StyleSheet.create({
        rooms: {
            flex: 4,
            borderRadius: 8,
            backgroundColor: colors.backgroundSecondaryColor,
            padding: 10
        },
        lineRow: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 20
        },
        iconRight: {
            width: 100,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
        bottomModal: {
            justifyContent: "flex-end",
            margin: 0
        },
        contentFilterBottom: {
            width: "100%",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            paddingHorizontal: 20,
            backgroundColor: colors.backgroundSecondaryColor,
        },
        contentSwipeDown: {
            paddingTop: 10,
            alignItems: "center"
        },
        lineSwipeDown: {
            width: 30,
            height: 2.5,
            backgroundColor: colors.dividerColor
        },
        contentActionModalBottom: {
            flexDirection: "row",
            paddingVertical: 10,
            marginBottom: 10,
            justifyContent: "space-between",
            borderBottomColor: colors.textSecondaryColor,
            borderBottomWidth: 1
        }
    })

    return (
        <>
            <Modal
                isVisible={modalVisible}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection={['down']}
                style={styles.bottomModal}
            >
                <View style={styles.contentFilterBottom}>
                    <View style={styles.contentSwipeDown}>
                        <View style={styles.lineSwipeDown}/>
                    </View>
                    <View style={styles.contentActionModalBottom}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                        >
                            <Text body1>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                        >
                            <Text body1 primaryColor>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.lineRow, {marginBottom: 40}]}>
                        <View>
                            <Text body1>Rooms</Text>
                            <Text caption1 grayColor>
                                Rooms
                            </Text>
                        </View>
                        <View style={styles.iconRight}>
                            <TouchableOpacity onPress={handleMinusRooms}>
                                <Icon
                                    name="minus-circle"
                                    size={24}
                                    color={colors.grayColor}
                                />
                            </TouchableOpacity>
                            <Text title1>{rooms}</Text>
                            <TouchableOpacity onPress={handlePlusRooms}>
                                <Icon
                                    name="plus-circle"
                                    size={24}
                                    color={colors.primaryColor}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={styles.rooms}
                onPress={() => setModalVisible(true)}
            >
                <Text caption1 grayColor style={{marginBottom: 5}}>
                    Rooms
                </Text>
                <Text body1 semibold>{rooms} Rooms</Text>
            </TouchableOpacity>
        </>
    );
};

RoomsModal.propTypes = {};

export default RoomsModal;
