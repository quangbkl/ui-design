import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput, AsyncStorage} from 'react-native';
import appRoutes from 'navigations/appRoutes';
import {useNavigation} from '@react-navigation/native';
import useApp from 'hooks/app/useApp';
import {BaseStyle} from 'config/theme';
import Text from 'components/Text/Text';
import Button from 'components-v2/Button/Button';
import {getErrorMessage} from 'helpers/response';
import SignInHeader from "./SignInHeader";
import {validateEmail, validatePassword} from "helpers/common";
import firebase from 'firebase';

const SignInScreen = (props) => {
    const {state: appState, actions: appActions} = useApp();
    const {colors} = appState;
    const {handleSignIn} = appActions;

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [signingIn, setSigningIn] = useState(false);
    const [error, setError] = useState('');

    const handleClickSignIn = async () => {
        setError('');

        const _errorEmail = validateEmail(email);
        const _errorPassword = validatePassword(password);
        setErrorEmail(_errorEmail);
        setErrorPassword(_errorPassword);

        if (_errorEmail || _errorPassword) return false;

        setSigningIn(true);
        try {
            await handleSignIn({email, password});
            navigation.navigate(appRoutes.MAIN);
        } catch (e) {
            const msg = getErrorMessage(e);
            setError(msg);
        } finally {
            setSigningIn(false);
        }
    };


    const styles = StyleSheet.create({
        textInput: {
            height: 46,
            backgroundColor: colors.fieldColor,
            borderRadius: 5,
            marginTop: 10,
            padding: 10,
            width: '100%'
        },
        contain: {
            alignItems: 'center',
            padding: 20,
            width: '100%'
        }
    });

    return (
        <SafeAreaView
            style={BaseStyle.safeAreaView}
            forceInset={{top: 'always'}}
        >
            <SignInHeader/>
            <ScrollView>
                <View style={styles.contain}>
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
                    <View style={{width: '100%'}}>
                        <Button
                            full
                            loading={signingIn}
                            style={{marginTop: 20}}
                            onPress={handleClickSignIn}
                        >
                            Sign In
                        </Button>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(appRoutes.RESET_PASSWORD)}
                    >
                        <Text body1 grayColor style={{marginTop: 25}}>
                            Forgot your password?
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignInScreen;
