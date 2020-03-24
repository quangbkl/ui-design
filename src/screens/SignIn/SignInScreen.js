import React from 'react';
import {View, Text, Button} from 'react-native';
import appRoutes from '../../navigations/appRoutes';

class SignInScreen extends React.Component {
    render() {
        const {navigation} = this.props;

        return (
            <View>
                <Text>Sign In Screen</Text>
                <Button
                    title="HOME"
                    onPress={() => navigation.navigate(appRoutes.MAIN)}
                    type="light"
                />
            </View>
        );
    }
}

export default SignInScreen;
