import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {BaseStyle} from "../../../config/theme";
import Text from "../../../components/Text/Text";
import useApp from "../../../hooks/app/useApp";
import {useNavigation} from "@react-navigation/native";
import appRoutes from "../../../navigations/appRoutes";
import Icon from "../../../components-v2/Icon/Icon";

const renderIconService = (icons) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        iconContent: {
            justifyContent: "center",
            alignItems: "center",
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: colors.backgroundSecondaryColor,
            marginBottom: 10
        }
    });

    return icons.map((icon, i) => {
        return (
            <TouchableOpacity
                key={i}
                style={{alignItems: "center"}}
                activeOpacity={0.9}
                onPress={() => navigation.navigate(icon.route)}
            >
                <View style={styles.iconContent}>
                    <Icon
                        name={icon.icon}
                        size={18}
                        color={colors.primaryColor}
                        solid
                    />
                </View>
                <Text caption1 grayColor>
                    {icon.name}
                </Text>
            </TouchableOpacity>
        );
    });
}

const icons1 = [
    {icon: "calendar-alt", name: "Hotel", route: appRoutes.SEARCH_HOTEL},
    {icon: "map-marker-alt", name: "Tour", route: appRoutes.TOURS},
    {icon: "car-alt", name: "Car", route: ""},
    {icon: "plane", name: "Flight", route: appRoutes.FLIGHT_SEARCH}
];

const icons2 = [
    {icon: "ship", name: "Cruise", route: ''},
    {icon: "bus-alt", name: "Bus", route: ''},
    {icon: "star", name: "Event", route: ''},
    {icon: "ellipsis-h", name: "More", route: ''}
];

const SearchForm = () => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        searchForm: {
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: colors.backgroundSecondaryColor,
            backgroundColor: colors.backgroundPrimaryColor,
            width: "90%",
            shadowColor: "black",
            shadowOffset: {width: 1.5, height: 1.5},
            shadowOpacity: 0.3,
            shadowRadius: 1,
            elevation: 1
        },
        contentServiceIcon: {
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-around"
        },
    })
    return (
        <View style={{alignItems: "center"}}>
            <View
                style={[
                    styles.searchForm,
                    {marginTop: -45}
                ]}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate(appRoutes.SEARCH_HOTEL)}
                    activeOpacity={0.9}
                >
                    <View style={[BaseStyle.textInput, {backgroundColor: colors.backgroundSecondaryColor}]}>
                        <Text body1 grayColor>
                            What're you locking for ?
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.contentServiceIcon}>
                    {renderIconService(icons1)}
                </View>
                <View style={styles.contentServiceIcon}>
                    {renderIconService(icons2)}
                </View>
            </View>
        </View>
    );
}

SearchForm.propTypes = {};

export default SearchForm;
