import React from 'react';
import {BaseColor} from 'config/color';
import {Text, Header, Button} from 'components';
import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TextInput,
} from 'react-native';

const ChangePasswordScreen = () => {
    const password = '';
    const repassword = '';

    return (
        <SafeAreaView
            style={{flex: 1}}
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
        backgroundColor: BaseColor.fieldColor,
        borderRadius: 5,
        padding: 10,
        width: '100%',
    },
});

export default ChangePasswordScreen;
