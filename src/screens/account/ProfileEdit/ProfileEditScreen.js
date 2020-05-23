import React from 'react';
import {BaseColor} from 'config/color';
import {Text, Header, Button} from 'components';
import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    TextInput,
} from 'react-native';

const ProfileEditScreen = () => {
    const userData = {
        id: '1',
        image: 'https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/80675594_2407151019538149_7255447717231460352_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=f8ELipMK0lkAX_Ea6wb&_nc_ht=scontent-xsp1-1.xx&oh=7911fcd87a1d90d45722adf74d30ee97&oe=5EB06405',
        name: 'Phi Xuan Hoan',
        major: 'Travel Company',
        email: 'phihoan10@gmail.com',
        address: 'Ha Noi, Viet Nam',
        point: '9.5',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    };

    const {id, name, email, address, image} = userData;

    return (
        <SafeAreaView
            style={{flex: 1}}
            forceInset={{top: 'always'}}
        >
            <Header title="Edit Profile"/>
            <ScrollView>
                <View style={styles.contain}>
                    <View>
                        <Image
                            source={{
                                uri: image,
                            }}
                            style={styles.thumb}
                        />
                    </View>
                    <View style={styles.contentTitle}>
                        <Text headline semibold>
                            Account
                        </Text>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Input ID"
                        value={id}
                    />
                    <View style={styles.contentTitle}>
                        <Text headline semibold>
                            Name
                        </Text>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Input Name"
                        value={name}
                    />
                    <View style={styles.contentTitle}>
                        <Text headline semibold>
                            Email
                        </Text>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Input Email"
                        value={email}
                    />
                    <View style={styles.contentTitle}>
                        <Text headline semibold>
                            Address
                        </Text>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Input Address"
                        value={address}
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
    thumb: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
});

export default ProfileEditScreen;
