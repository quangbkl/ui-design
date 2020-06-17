import React from 'react';
import Icon from "components-v2/Icon/Icon";
import Header from "components-v2/Header/Header";
import useApp from "hooks/app/useApp";
import {useNavigation} from "@react-navigation/native";

const SignInHeader=()=> {
    const {state: appState} = useApp();
    const {colors} = appState;

    const navigation = useNavigation();

    return (
        <Header
            title="Sign In"
            renderLeft={() => {
                return (
                    <Icon
                        name="arrow-left"
                        size={20}
                        color={colors.primaryColor}
                    />
                );
            }}
            onPressLeft={() => {
                navigation.goBack();
            }}
        />
    );
}

SignInHeader.propTypes = {};

export default SignInHeader;
