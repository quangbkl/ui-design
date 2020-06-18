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
import useApp from "../../../hooks/app/useApp";

const userData = {
    id: '@quangbkl',
    image: 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/150x150/edb78704b0c18ce6a06669ba40367d58/biker-helmet.png',
    name: 'Doan Van Quang',
    major: 'Travel Company',
    email: 'quang99dev@gmail.com',
    address: 'Ha Noi, Viet Nam',
    point: '9.5',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
};

const ProfileEditScreen = () => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const {id, name, email, address, image} = userData;

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
            color: colors.textPrimaryColor,
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

    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: colors.backgroundPrimaryColor}}
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

export default ProfileEditScreen;
