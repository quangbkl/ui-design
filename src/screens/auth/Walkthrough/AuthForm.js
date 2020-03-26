import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '../../../components';
import {Text} from '../../../components';
import {BaseColor} from '../../../config/color';

class AuthForm extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <Button style={{backgroundColor: '#3B5998'}}>Login with Facebook</Button>
                <Button style={{marginTop: 20}}>Sign In</Button>
                <View style={styles.joinNow}>
                    <Text>Haven't registered yet?</Text>
                    <Text style={styles.joinNowText}>Join Now</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 50,
    },
    joinNow: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    joinNowText: {
        color: BaseColor.primaryColor,
    },
});

export default AuthForm;
