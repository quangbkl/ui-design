import React, {useState} from 'react';
import {BaseColor} from 'config/color';
import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch
} from 'react-native';
import {
    Text,
    CustomIcon,
    Header,
    Touchable
} from 'components';
import appRoutes from 'navigations/appRoutes';

const ProfileSettingScreen = (props) => {
    const {navigation} = props;
    const [reminders, setReminders] = useState(false);
    const toggleSwitch = () => setReminders(value => !value);
    return (
        <SafeAreaView
            style={{flex: 1}}
            forceInset={{top: 'always'}}>
            <Header title="Settings"/>
            <ScrollView>
                <View style={styles.contain}>
                    <View style={{width: '100%'}}>
                        <Touchable
                            style={styles.profileItem}
                            onPress={() => {
                                navigation.navigate(appRoutes.PROFILE_LANGUAGE);
                            }}
                        >
                            <Text body1>Language</Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                            >
                                <Text body1 grayColor>
                                    English
                                </Text>
                                <CustomIcon
                                    name="angle-right"
                                    size={18}
                                    color={BaseColor.primaryColor}
                                    style={{marginLeft: 5}}
                                />
                            </View>
                        </Touchable>
                        <Touchable
                            style={styles.profileItem}
                            onPress={() => {
                                navigation.navigate('');
                            }}
                        >
                            <Text body1>Font</Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                            >
                                <Text body1 grayColor>
                                    Ruleway
                                </Text>
                                <CustomIcon
                                    name="angle-right"
                                    size={18}
                                    color={BaseColor.primaryColor}
                                    style={{marginLeft: 5}}
                                />
                            </View>
                        </Touchable>
                        <Touchable
                            style={styles.profileItem}
                            onPress={() => {
                                navigation.navigate(appRoutes.PROFILE_THEME);
                            }}
                        >
                            <Text body1>Theme</Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                            >
                                <Text body1 grayColor>
                                    orange
                                </Text>
                                <CustomIcon
                                    name="angle-right"
                                    size={18}
                                    color={BaseColor.primaryColor}
                                    style={{marginLeft: 5}}
                                />
                            </View>
                        </Touchable>
                        <Touchable
                            style={styles.profileItem}
                            onPress={() => {
                                navigation.navigate('');
                            }}
                        >
                            <Text body1>Dark theme</Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                            >
                                <Text body1 grayColor>
                                    Dynamic System
                                </Text>
                                <CustomIcon
                                    name="angle-right"
                                    size={18}
                                    color={BaseColor.primaryColor}
                                    style={{marginLeft: 5}}
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

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    performanceContainer: {
        backgroundColor: '#E8E8E8',
        marginTop: 20,
        marginBottom: 20
    },
    contentTitle: {
        alignItems: 'flex-start',
        width: '100%',
        height: 32,
        justifyContent: 'center'
    },
    contain: {
        alignItems: 'center',
        padding: 20,
        width: '100%'
    },
    profileItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: BaseColor.textSecondaryColor,
        borderBottomWidth: 1,
        paddingBottom: 20,
        paddingTop: 20
    }
});

export default ProfileSettingScreen;
