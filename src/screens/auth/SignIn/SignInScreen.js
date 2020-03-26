import React from 'react';
import {View, Text} from 'react-native';
import appRoutes from '../../../navigations/appRoutes';
import {Button, Input} from '../../../components';

const SignInScreen = (props) => {
    const {navigation} = props;

    return (
        <View>
            <Text>Sign In Screen</Text>

            <Input style={{height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="AAAA"/>

            <Button
                title="HOME"
                onPress={() => navigation.navigate(appRoutes.MAIN)}
            />
        </View>
    );
};

export default SignInScreen;
