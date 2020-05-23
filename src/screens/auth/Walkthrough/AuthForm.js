import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {BaseColor} from 'config/color';
import {Button, Text, TextButton, Touchable} from 'components';
import {Button as ButtonNB} from 'native-base';

const AuthForm = (props) => {
    const {goToSignIn, goToMain, goToSignUp} = props;

    return (
        <View style={styles.main}>
            <Button style={{backgroundColor: '#3B5998'}}>Login with Facebook</Button>
            <Button style={{marginTop: 20}} onPress={goToSignIn}>Sign In</Button>
            <View style={styles.joinNow}>
                <Touchable onPress={goToSignUp}>
                    <Text>Haven't registered yet?</Text>
                </Touchable>
                <TextButton onPress={goToMain}>Join Now</TextButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 50
    },
    joinNow: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    joinNowText: {
        color: BaseColor.primaryColor
    }
});

AuthForm.propTypes = {
    goToSignUp: PropTypes.func.isRequired,
    goToSignIn: PropTypes.func.isRequired,
    goToMain: PropTypes.func.isRequired
};

export default AuthForm;
