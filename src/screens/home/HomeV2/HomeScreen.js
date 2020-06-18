import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View, StyleSheet} from "react-native";
import {BaseStyle} from "config/theme";
import scaleWithPixel from "helpers/scaleWithPixel";
import Text from "components/Text/Text";
import PromosToday from "./PromosToday";
import Icon from "components-v2/Icon/Icon";
import useApp from "hooks/app/useApp";
import {useNavigation} from "@react-navigation/native";
import Tours from "./Tours";
import Promotion from "./Promotion";
import appRoutes from "../../../navigations/appRoutes";
import Banner from "./Banner";
import SearchForm from "./SearchForm";

const HomeScreen = () => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        contentCartPromotion: {
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "flex-start"
        },
        btnPromotion: {
            height: 25,
            borderRadius: 3,
            paddingHorizontal: 10,
            paddingVertical: 5
        },
        contentHiking: {
            marginTop: 20,
            marginLeft: 20,
            marginBottom: 10
        },
        promotionBanner: {
            height: scaleWithPixel(100),
            width: "100%",
            marginTop: 10
        },
        line: {
            height: 1,
            backgroundColor: colors.textSecondaryColor,
            marginTop: 10,
            marginBottom: 20
        },
        promotionItem: {
            borderRadius: 8,
            width: scaleWithPixel(200),
            height: scaleWithPixel(250)
        },
        tourItem: {
            borderRadius: 8,
            width: scaleWithPixel(135),
            height: scaleWithPixel(160)
        }
    });

    return (
        <View style={{flex: 1, backgroundColor: colors.backgroundPrimaryColor}}>
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{top: "always"}}
            >
                <ScrollView scrollEventThrottle={8}>
                    <Banner/>
                    <View>
                        <SearchForm/>
                        <PromosToday/>
                        <Tours/>
                        <Promotion/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

HomeScreen.propTypes = {};

export default HomeScreen;
