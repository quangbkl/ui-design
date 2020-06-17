import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, TextInput} from 'react-native';
import {BaseStyle} from "config/theme";
import Header from "components-v2/Header/Header";
import Icon from "components-v2/Icon/Icon";
import Button from "components-v2/Button/Button";
import useApp from "hooks/app/useApp";
import {useNavigation} from "@react-navigation/native";
import {validateEmail} from "helpers/common";
import appRoutes from "navigations/appRoutes";
import Text from "../../../components/Text/Text";

const ResetPasswordScreen = () => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [resetting, setResetting] = useState(false);
    const [error, setError] = useState('');

    const handleResetPassword = () => {
        setError('');

        const _errorEmail = validateEmail(email);
        setErrorEmail(_errorEmail);

        if (_errorEmail) return false;

        setResetting(true);
        setTimeout(() => {
            setResetting(false);
            navigation.navigate(appRoutes.SIGN_IN);
        }, 1000);
    }

    return (
        <SafeAreaView
            style={BaseStyle.safeAreaView}
            forceInset={{top: "always"}}
        >
            <Header
                title="Reset Password"
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
            <ScrollView>
                <View
                    style={{
                        alignItems: "center",
                        padding: 20,
                        width: "100%"
                    }}
                >
                    <View style={{width: '100%'}}>
                        <TextInput
                            style={[BaseStyle.textInput, {
                                marginTop: 65,
                                color: !!errorEmail ? colors.errorColor : undefined
                            }]}
                            keyboardType="email-address"
                            onChangeText={setEmail}
                            onFocus={() => setErrorEmail('')}
                            autoCorrect={false}
                            placeholder="Email"
                            placeholderTextColor={
                                !errorEmail
                                    ? colors.grayColor
                                    : colors.errorColor
                            }
                            value={email}
                            selectionColor={colors.primaryColor}
                        />
                        {!!errorEmail && <Text caption1 errorColor>{errorEmail}</Text>}
                    </View>
                    <View style={{width: "100%"}}>
                        <Button
                            full
                            style={{marginTop: 20}}
                            onPress={handleResetPassword}
                            loading={resetting}
                        >
                            Reset Password
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ResetPasswordScreen;
