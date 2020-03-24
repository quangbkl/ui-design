import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../configs/colors';
import appRoutes from '../../navigations/appRoutes';
import Button from '../../components/Button';

class WelcomeItem extends React.Component {

    render() {
        const {item, navigation} = this.props;
        const {title, text} = item;

        return (
            <View style={styles.container}>
                <Text>{title}</Text>
                <Text>{text}</Text>
                <Button
                    title="LOGIN"
                    onPress={() => navigation.navigate(appRoutes.AUTH)}
                    type="light"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color2,
    },
});

export default WelcomeItem;
