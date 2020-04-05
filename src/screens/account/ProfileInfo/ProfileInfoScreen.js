import React from 'react';
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
import appRoutes from '../../../navigations/appRoutes';

const ProfileInfoScreen = (props) => {
    const {navigation} = props;
    const userData = {
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
                                navigation.navigate(appRoutes.PROFILE_EDIT);
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
                                navigation.navigate(appRoutes.CHANGE_PASSWORD);
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
                        <Touchable
                            style={styles.profileItem}
                            onPress={() => {
                                navigation.navigate("");
                            }}
                        >
                            <Text body1>My Cart</Text>
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
                                navigation.navigate(appRoutes.PROFILE_SETTING);
                            }}
                        >
                            <Text body1>Settings</Text>
                            <CustomIcon
                                name="angle-right"
                                size={18}
                                color={BaseColor.primaryColor}
                                style={{ marginLeft: 5 }}
                            />
                        </Touchable>
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

export default ProfileInfoScreen;
