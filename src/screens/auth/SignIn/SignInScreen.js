import React, {useState} from 'react';
import validator from 'validator';
import {View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput} from 'react-native';
import appRoutes from 'navigations/appRoutes';
import {useNavigation} from '@react-navigation/native';
import useApp from 'hooks/app/useApp';
import {BaseStyle} from '../../../config/theme';
import Header from '../../../components-v2/Header/Header';
import Icon from '../../../components-v2/Icon/Icon';
import Text from '../../../components/Text/Text';
import Button from '../../../components-v2/Button/Button';
import {getErrorMessage} from '../../../helpers/response';

const SignInScreen = (props) => {
    const {state: appState, actions: appActions} = useApp();
    const {colors} = appState;
    const {handleSignIn} = appActions;

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successEmail, setSuccessEmail] = useState(true);
    const [successPassword, setSuccessPassword] = useState(true);
    const [signingIn, setSigningIn] = useState(false);
    const [error, setError] = useState('');

    const handleClickSignIn = async () => {
        setError('');

        if (!validator.isEmail(email) && !password) {
            setSuccessEmail(false);
            setSuccessPassword(false);
            return false;
        } else if (!validator.isEmail(email)) {
            setSuccessEmail(false);
            return false;
        } else if (!password) {
            setSuccessPassword(false);
            return false;
        }

        setSigningIn(true);

        try {
            await handleSignIn({email, password});
            navigation.navigate(appRoutes.MAIN);
        } catch (e) {
            const msg = getErrorMessage(e);
            setError(msg);
        }
        setSigningIn(false);
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
            <ScrollView>
                <View style={styles.contain}>
                    <TextInput
                        style={[BaseStyle.textInput, {
                            marginTop: 65,
                            color: !successEmail ? colors.primaryColor : undefined
                        }]}
                        keyboardType="email-address"
                        onChangeText={setEmail}
                        onFocus={() => setSuccessEmail(true)}
                        autoCorrect={false}
                        placeholder="Email"
                        placeholderTextColor={
                            successEmail
                                ? colors.grayColor
                                : colors.primaryColor
                        }
                        value={email}
                        selectionColor={colors.primaryColor}
                    />
                    <TextInput
                        style={[BaseStyle.textInput, {marginTop: 10}]}
                        onChangeText={setPassword}
                        onFocus={() => setSuccessPassword(true)}
                        autoCorrect={false}
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor={
                            successPassword
                                ? colors.grayColor
                                : colors.primaryColor
                        }
                        value={password}
                        selectionColor={colors.primaryColor}
                    />
                    {!!error && <Text subhead primaryColor style={{marginTop: 10}}>{error}</Text>}
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
