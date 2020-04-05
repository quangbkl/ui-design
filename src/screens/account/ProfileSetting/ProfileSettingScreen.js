import React, { useState } from 'react';
import { BaseColor } from 'config/color';
import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch
} from 'react-native';
import {
    ProfileDetail,
    ProfilePerformance,
    Text,
    CustomIcon,
    Button,
    CustomHeader,
    Touchable
} from "components";

const ProfileSettingScreen = () => {
    const userData = {
        id: "1",
        image: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/80675594_2407151019538149_7255447717231460352_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=f8ELipMK0lkAX_Ea6wb&_nc_ht=scontent-xsp1-1.xx&oh=7911fcd87a1d90d45722adf74d30ee97&oe=5EB06405",
        name: "Phi Xuan Hoan",
        major: "Travel Company",
        email: "phihoan10@gmail.com",
        address: "Ha Noi, Viet Nam",
        point: "9.5",
        id: "@hoanpx",
        about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        performance: [
            { value: "92.1%", title: "Feedback" },
            { value: "99", title: "Items" },
            { value: "10k", title: "Followers" }
        ]
    }

    const [reminders, setReminders] = useState(false);
    const toggleSwitch = () => setReminders(value => !value);

    return (
        <SafeAreaView
            style={{ flex: 1 }}
            forceInset={{ top: "always" }}>
            <CustomHeader
                hasLeft
                title="Profile"
            />
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
                    <ProfilePerformance
                        data={userData.performance}
                        style={styles.performanceContainer}
                    />
                    <View style={{ width: "100%" }}>
                        <Touchable
                            style={styles.profileItem}
                            onPress={() => {
                                navigation.navigate("");
                            }}
                        >
                            <Text body1>Edit Profile</Text>
                            <CustomIcon
                                name="angle-right"
                                size={18}
                                color={BaseColor.primaryColor}
                                style={{ marginLeft: 5 }}
                            />
                        </Touchable>
                        <Touchable
                            style={styles.profileItem}
                            onPress={() => {
                                navigation.navigate("");
                            }}
                        >
                            <Text body1>Change Password</Text>
                            <CustomIcon
                                name="angle-right"
                                size={18}
                                color={BaseColor.primaryColor}
                                style={{ marginLeft: 5 }}
                            />
                        </Touchable>
                        <Touchable
                            style={styles.profileItem}
                            onPress={() => {
                                navigation.navigate("");
                            }}
                        >
                            <Text body1>Language</Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                            >
                                <Text body1 grayColor>
                                    English
                                </Text>
                                <CustomIcon
                                    name="angle-right"
                                    size={18}
                                    color={BaseColor.primaryColor}
                                    style={{ marginLeft: 5 }}
                                />
                            </View>
                        </Touchable>
                        <Touchable
                            style={styles.profileItem}
                            onPress={() => {
                                navigation.navigate("");
                            }}
                        >
                            <Text body1>Currency</Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                            >
                                <Text body1 grayColor>
                                    VND
                                </Text>
                                <CustomIcon
                                    name="angle-right"
                                    size={18}
                                    color={BaseColor.primaryColor}
                                    style={{ marginLeft: 5 }}
                                />
                            </View>
                        </Touchable>
                        <View style={styles.profileItem}>
                            <Text body1>Reminders</Text>
                            <Switch
                                name="angle-right"
                                size={18}
                                onValueChange={toggleSwitch}
                                value={reminders}
                            />
                        </View>
                        <View style={styles.profileItem}>
                            <Text body1>App Version</Text>
                            <Text body1 grayColor>
                                    1.0.4
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ padding: 20 }}>
                <Button>
                    Sign Out
                </Button>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    performanceContainer: {
        backgroundColor: "#E8E8E8",
        marginTop: 20,
        marginBottom: 20
    },
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
