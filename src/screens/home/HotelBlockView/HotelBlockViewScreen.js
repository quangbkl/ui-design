import React from 'react';
import {View, Text, Button} from 'react-native';

class HotelBlockViewScreen extends React.Component {
    render() {
        const {navigation} = this.props;

        return (
            <View>
                <Text>HotelBlockView Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default HotelBlockViewScreen;
