import React from 'react';
import {View, Text, Button} from 'react-native';

class HotelBlockViewScreen extends React.Component {
    render() {
        const {navigation} = this.props;

        return (
            <View>
                <Text>HotelBlockView Screen</Text>
                <Button title="Back" onPress={() => navigation.goBack()}/>
            </View>
        );
    }
}

export default HotelBlockViewScreen;
