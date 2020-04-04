import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageSlider from './ImageSlider';
import AuthForm from './AuthForm';
import appRoutes from 'navigations/appRoutes';

const WalkthroughScreen = (props) => {
    const {navigation} = props;

    const goToSignUp = () => {
        return navigation.navigate(appRoutes.SIGN_UP);
    };

    const goToSignIn = () => {
        return navigation.navigate(appRoutes.SIGN_IN);
    };

    const goToMain = () => {
        return navigation.navigate(appRoutes.MAIN);
    };

    return (
        <View style={styles.container}>
            <ImageSlider/>
            <AuthForm goToSignIn={goToSignIn} goToMain={goToMain} goToSignUp={goToSignUp}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default WalkthroughScreen;
