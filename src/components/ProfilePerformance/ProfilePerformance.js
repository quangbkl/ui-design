import React from 'react';
import {View, StyleSheet} from "react-native";
import Text from "../Text/Text";
import useApp from "../../hooks/app/useApp";

const ProfilePerformance = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const {
        style,
        contentLeft,
        contentCenter,
        contentRight,
        data,
        type,
        flexDirection
    } = props;

    const styles = StyleSheet.create({
        contain: {
            height: 60,
            flexDirection: "row",
            backgroundColor: colors.backgroundSecondaryColor,
            paddingLeft: 20,
            paddingRight: 20
        },
        contentLeft: {
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center"
        },
        contentCenter: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        },
        contentRight: {
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "center"
        },
        itemInfor: {
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center"
        }
    });

    const renderValue = (type, value) => {
        switch (type) {
            case "primary":
                return (
                    <Text title3 semibold primaryColor>
                        {value}
                    </Text>
                );
            case "small":
                return (
                    <Text body1 semibold>
                        {value}
                    </Text>
                );
            default:
                return (
                    <Text headline semibold>
                        {value}
                    </Text>
                );
        }
    }

    const renderTitle = (type, value) => {
        switch (type) {
            case "primary":
                return (
                    <Text body2 grayColor>
                        {value}
                    </Text>
                );
            case "small":
                return (
                    <Text caption1 grayColor>
                        {value}
                    </Text>
                );
            default:
                return (
                    <Text body2 grayColor>
                        {value}
                    </Text>
                );
        }
    }

    switch (flexDirection) {
        case "row":
            return (
                <View style={[styles.contain, style]}>
                    {data.map((item, index) => {
                        if (index === 0) {
                            return (
                                <View
                                    style={[
                                        styles.contentLeft,
                                        contentLeft
                                    ]}
                                    key={index}
                                >
                                    {renderValue(type, item.value)}
                                    {renderTitle(type, item.title)}
                                </View>
                            );
                        } else if (index === data.length - 1) {
                            return (
                                <View
                                    style={[
                                        styles.contentRight,
                                        contentRight
                                    ]}
                                    key={index}
                                >
                                    {renderValue(type, item.value)}
                                    {renderTitle(type, item.title)}
                                </View>
                            );
                        } else {
                            return (
                                <View
                                    style={[
                                        styles.contentCenter,
                                        contentCenter
                                    ]}
                                    key={index}
                                >
                                    {renderValue(type, item.value)}
                                    {renderTitle(type, item.title)}
                                </View>
                            );
                        }
                    })}
                </View>
            );
        case "column":
            return (
                <View
                    style={[
                        {justifyContent: "space-between", flex: 1},
                        style
                    ]}
                >
                    {data.map((item, index) => (
                        <View style={styles.itemInfor} key={index}>
                            {renderTitle(type, item.title)}
                            {renderValue(type, item.value)}
                        </View>
                    ))}
                </View>
            );
    }
};

ProfilePerformance.defaultProps = {
    flexDirection: "row",
    type: "medium"
};

export default ProfilePerformance;

