import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import appRoutes from '../../../navigations/appRoutes';
import {Button, TextInput, Text, Header} from '../../../components';
import {signIn} from '../../../services/authServices';

const SignInScreen = (props) => {
    const {navigation} = props;

    const handleClickSignIn = async () => {
        const data = await signIn({email: 'test1@gmail.com', password: '123456789'});
        console.log(data);
        navigation.navigate(appRoutes.MAIN);
    };

    const forgotYourPassword = () => {
        navigation.navigate(appRoutes.RESET_PASSWORD);
    };

    return (
        <View style={styles.container}>
            <Header title="Sign In" goBack={navigation.goBack}/>
            <View style={styles.content}>
                <TextInput style={styles.inputId} placeholder="ID"/>
                <TextInput style={styles.inputPassword} placeholder="Password"/>
                <Button style={styles.buttonSignIn} onPress={handleClickSignIn}>Sign In</Button>
                <TouchableOpacity style={styles.forgotPassword} onPress={forgotYourPassword}>
                    <Text>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 20,
        paddingTop: 80,
    },
    buttonSignIn: {
        marginTop: 20,
    },
    inputId: {},
    inputPassword: {
        marginTop: 10,
    },
    forgotPassword: {
        alignItems: 'center',
        marginTop: 20,
    },
});

export default SignInScreen;
