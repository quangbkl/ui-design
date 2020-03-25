import React from 'react';
import {View, Text, Button} from 'react-native';
import appRoutes from '../../../navigations/appRoutes';

class HomeScreen extends React.Component {
    render() {
        const {navigation} = this.props;

        return (
            <View>
                <Text>Home Screen</Text>
                <Button
                    title="Hotel Block View"
                    onPress={() => navigation.navigate(appRoutes.HOTEL_BLOCK_VIEW)}
                />
            </View>
        );
    }
}

export default HomeScreen;
