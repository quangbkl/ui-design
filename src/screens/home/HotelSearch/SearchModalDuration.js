import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Text from "../../../components/Text/Text";
import Icon from "../../../components-v2/Icon/Icon";
import useApp from "../../../hooks/app/useApp";

const SearchModalDuration = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const {night, modalVisible, closeModal, handlePlusNight, handleMinusNight} = props;

    const styles = StyleSheet.create({
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
            backgroundColor: colors.whiteColor
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
        <Modal
            isVisible={modalVisible === 'duration'}
            onSwipeComplete={closeModal}
            swipeDirection={['down']}
            style={styles.bottomModal}
        >
            <View style={styles.contentFilterBottom}>
                <View style={styles.contentSwipeDown}>
                    <View style={styles.lineSwipeDown}/>
                </View>
                <View style={styles.contentActionModalBottom}>
                    <TouchableOpacity
                        onPress={closeModal}
                    >
                        <Text body1>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={closeModal}
                    >
                        <Text body1 primaryColor>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.lineRow, {marginBottom: 40}]}>
                    <View>
                        <Text body1>Duration</Text>
                        <Text caption1 grayColor>
                            Night
                        </Text>
                    </View>
                    <View style={styles.iconRight}>
                        <TouchableOpacity onPress={handleMinusNight}>
                            <Icon
                                name="minus-circle"
                                size={24}
                                color={colors.grayColor}
                            />
                        </TouchableOpacity>
                        <Text title1>{night}</Text>
                        <TouchableOpacity onPress={handlePlusNight}>
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
    );
};

SearchModalDuration.propTypes = {};

export default SearchModalDuration;
