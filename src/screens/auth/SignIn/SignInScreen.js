import React from 'react';
import {View, Text} from 'react-native';
import appRoutes from '../../../navigations/appRoutes';
import {Button, Input} from '../../../components';

class SignInScreen extends React.Component {
    render() {
        const {navigation} = this.props;

        const url = 'https://i1.wp.com/www.asphaltandrubber.com/wp-content/uploads/2019/03/2019-BMW-S1000RR-Estoril-press-launch-11-scaled.jpg';

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
    }
}

export default SignInScreen;
