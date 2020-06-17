import React, {useState} from 'react';
import {View, StyleSheet, TextInput, ScrollView, SafeAreaView} from 'react-native';
import useApp from "hooks/app/useApp";
import {useNavigation} from "@react-navigation/native";
import {BaseStyle} from "config/theme";
import Header from "components-v2/Header/Header";
import Icon from "components-v2/Icon/Icon";
import {validateEmail, validatePassword} from "helpers/common";
import appRoutes from "navigations/appRoutes";
import Button from "components-v2/Button/Button";
import Text from "../../../components/Text/Text";
import {validateFullName} from "../../../helpers/common";

const SignUpScreen = () => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorFullName, setErrorFullName] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [signingUp, setSigningUp] = useState(false);
    const [error, setError] = useState('');

    const handleClickSignUp = async () => {
        setError('');

        const _errorEmail = validateEmail(email);
        const _errorPassword = validatePassword(password);
        const _errorFullName = validateFullName(fullName);
        setErrorEmail(_errorEmail);
        setErrorPassword(_errorPassword);
        setErrorFullName(_errorFullName);

        if (_errorEmail || _errorPassword || _errorFullName) return false;

        setSigningUp(true);
        setTimeout(() => {
            setSigningUp(false);
            navigation.navigate(appRoutes.SIGN_IN);
        }, 1000);
    }

    const styles = StyleSheet.create({
        contain: {
            alignItems: "center",
            padding: 20,
            width: "100%"
        },
        textInput: {
            height: 46,
            backgroundColor: colors.fieldColor,
            borderRadius: 5,
            marginTop: 10,
            padding: 10,
            width: "100%"
        }
    });

    return (
        <SafeAreaView
            style={BaseStyle.safeAreaView}
            forceInset={{top: "always"}}
        >
            <Header
                title="Sign Up"
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
                <View style={styles.contain}>
                    <View style={{width: '100%'}}>
                        <TextInput
                            style={[BaseStyle.textInput, {
                                marginTop: 65,
                                color: !!errorFullName ? colors.errorColor : undefined
                            }]}
                            onChangeText={setFullName}
                            onFocus={() => setErrorFullName('')}
                            autoCorrect={false}
                            placeholder="Name"
                            placeholderTextColor={
                                !errorFullName
                                    ? colors.grayColor
                                    : colors.errorColor
                            }
                            value={fullName}
                            selectionColor={colors.primaryColor}
                        />
                        {!!errorFullName && <Text caption1 errorColor>{errorFullName}</Text>}
                    </View>
                    <View style={{width: '100%'}}>
                        <TextInput
                            style={[BaseStyle.textInput, {
                                marginTop: 10,
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
                    <View style={{width: '100%'}}>
                        <TextInput
                            style={[BaseStyle.textInput, {marginTop: 10}]}
                            onChangeText={setPassword}
                            onFocus={() => setErrorPassword('')}
                            autoCorrect={false}
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor={
                                !errorPassword
                                    ? colors.grayColor
                                    : colors.errorColor
                            }
                            value={password}
                            selectionColor={colors.primaryColor}
                        />
                        {!!errorPassword && <Text caption1 errorColor>{errorPassword}</Text>}
                    </View>
                    {!!error && <Text subhead errorColor style={{marginTop: 10}}>{error}</Text>}
                    <View style={{width: "100%"}}>
                        <Button
                            full
                            style={{marginTop: 20}}
                            loading={signingUp}
                            onPress={handleClickSignUp}
                        >
                            Sign Up
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUpScreen;
