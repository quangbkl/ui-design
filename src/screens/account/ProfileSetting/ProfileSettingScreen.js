import React from 'react';
import {
    View, 
    SafeAreaView, 
    ScrollView, 
    StyleSheet
} from 'react-native';
import { ProfileDetail } from "components";
import {BaseColor} from 'config/color';

const userData = {
    id: "1",
    image: "https://kprofiles.info/wp-content/uploads/2019/07/profile-Ten-1.jpg",
    name: "Steve Garrett",
    major: "Travel Agency",
    email: "lewis.victor@milford.tv",
    address: "Singapore, Golden Mile",
    point: "9.5",
    id: "@steve.garrett",
    about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    performance: [
        { value: "97.01%", title: "Feedback" },
        { value: "999", title: "Items" },
        { value: "120k", title: "Followers" }
    ]
}

const ProfileSettingScreen = () => {
    return (
        <SafeAreaView
            style={{flex: 1}}
            forceInset={{ top: "always" }}>
            <ScrollView>
                <View style={styles.contain}>
                <ProfileDetail
                    image={userData.image}
                    textFirst={userData.name}
                    point={userData.point}
                    textSecond={userData.address}
                    textThird={userData.id}
                    onPress={() =>
                        navigation.navigate("")
                    }
                />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    contentTitle: {
        alignItems: "flex-start",
        width: "100%",
        height: 32,
        justifyContent: "center"
    },
    contain: {
        alignItems: "center",
        padding: 20,
        width: "100%"
    },
    textInput: {
        height: 56,
        backgroundColor: BaseColor.fieldColor,
        borderRadius: 5,
        padding: 10,
        width: "100%"
    },
    profileItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: BaseColor.textSecondaryColor,
        borderBottomWidth: 1,
        paddingBottom: 20,
        paddingTop: 20
    }
});

export default ProfileSettingScreen;
