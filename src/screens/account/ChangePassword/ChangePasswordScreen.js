import React from 'react';
import {Text, Header, Button} from 'components';
import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TextInput,
} from 'react-native';
import useApp from "../../../hooks/app/useApp";

const ChangePasswordScreen = () => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const password = '';
    const repassword = '';

    const styles = StyleSheet.create({
        contentTitle: {
            alignItems: 'flex-start',
            width: '100%',
            height: 32,
            justifyContent: 'center',
        },
        contain: {
            alignItems: 'center',
            padding: 20,
            width: '100%',
        },
        textInput: {
            height: 46,
            backgroundColor: colors.backgroundSecondaryColor,
            borderRadius: 5,
            padding: 10,
            width: '100%',
        },
    });

    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: colors.backgroundPrimaryColor}}
            forceInset={{top: 'always'}}
        >
            <Header title="Change Password"/>
            <ScrollView>
                <View style={styles.contain}>
                    <View style={styles.contentTitle}>
                        <Text headline semibold>
                            Password
                        </Text>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Input Password"
                        value={password}
                    />
                    <View style={styles.contentTitle}>
                        <Text headline semibold>
                            Re-Password
                        </Text>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Input Password"
                        value={repassword}
                    />
                </View>
            </ScrollView>
            <View style={{padding: 20}}>
                <Button>Confirm</Button>
            </View>
        </SafeAreaView>
    );
};

export default ChangePasswordScreen;
