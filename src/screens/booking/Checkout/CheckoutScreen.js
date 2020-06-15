import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Container} from 'native-base';
import Header from 'components/Header/Header';
import Text from 'components/Text/Text';
import {Button, TextInput} from 'components';
import appRoutes from 'navigations/appRoutes';
import {useNavigation} from '@react-navigation/native';
import useApp from 'hooks/app/useApp';

const CheckoutScreen = () => {
    const navigation = useNavigation();
    const {state: appState} = useApp();
    const {i18n} = appState;
    const {color} = appState;
    return (
        <Container>
            <Header title="Check Out" RightComponent={<Text style={{color: color.primaryColor}}>Reset</Text>}/>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={{marginBottom: 10}} headline>Billing Information</Text>
                        <TextInput style={{height: 40, marginBottom: 10}} placeholder={'Street address'}/>
                        <TextInput style={{height: 40, marginBottom: 10}} placeholder={'City'}/>
                        <View
                            style={{
                                flex: 2,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <TextInput style={{flex: 35, height: 40}} placeholder={'Post Code'}/>
                            <Text style={{flex: 5, height: 40}}></Text>
                            <TextInput style={{flex: 65, height: 40}} placeholder={'Country'}/>
                        </View>
                    </View>
                    <View style={{marginTop: 15}}>
                        <Text style={{marginBottom: 10}} headline>Contact Details</Text>
                        <TextInput style={{height: 40, marginBottom: 10}} placeholder={'Contact\'s Name'}/>
                        <TextInput style={{height: 40, marginBottom: 10}} placeholder={'Email'}/>
                        <View
                            style={{
                                flex: 2,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <TextInput style={{flex: 35, height: 40}} placeholder={'Code'}/>
                            <Text style={{flex: 5, height: 40}}></Text>
                            <TextInput style={{flex: 65, height: 40}} placeholder={'Phone Number'}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Button
                style={styles.checkoutButton}
                children={'Check Out'}
                onPress={() => navigation.navigate(appRoutes.PAYMENT_METHODS)}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15
    },
    checkoutButton: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    }

});
export default CheckoutScreen;
