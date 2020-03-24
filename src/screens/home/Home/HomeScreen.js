import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

class HomeScreen extends React.Component {
    render() {
        const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default HomeScreen;
