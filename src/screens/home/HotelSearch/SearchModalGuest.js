import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import useApp from "../../../hooks/app/useApp";
import Text from "../../../components/Text/Text";
import Icon from "../../../components-v2/Icon/Icon";

const SearchModalGuest = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const {
        adult,
        children,
        modalVisible,
        closeModal,
        handlePlusAdult,
        handleMinusAdult,
        handlePlusChildren,
        handleMinusChildren
    } = props;

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
        <Modal
            isVisible={modalVisible === 'guest'}
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
                <View style={styles.lineRow}>
                    <View>
                        <Text body1>Adults</Text>
                        <Text caption1 grayColor>
                            16+ years
                        </Text>
                    </View>
                    <View style={styles.iconRight}>
                        <TouchableOpacity onPress={handleMinusAdult}>
                            <Icon
                                name="minus-circle"
                                size={24}
                                color={colors.grayColor}
                            />
                        </TouchableOpacity>
                        <Text title1>{adult}</Text>
                        <TouchableOpacity onPress={handlePlusAdult}>
                            <Icon
                                name="plus-circle"
                                size={24}
                                color={colors.primaryColor}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.lineRow}>
                    <View>
                        <Text body1>Children</Text>
                        <Text caption1 grayColor>
                            2-11 years
                        </Text>
                    </View>
                    <View style={styles.iconRight}>
                        <TouchableOpacity onPress={handleMinusChildren}>
                            <Icon
                                name="minus-circle"
                                size={24}
                                color={colors.grayColor}
                            />
                        </TouchableOpacity>
                        <Text title1>{children}</Text>
                        <TouchableOpacity onPress={handlePlusChildren}>
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
}

SearchModalGuest.propTypes = {};

export default SearchModalGuest;
