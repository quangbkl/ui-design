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
    Header,
    ListItemAngleRight, ListItem
} from 'components';
import appRoutes from 'navigations/appRoutes';
import {Left, Right} from 'native-base';
import ThemeModeSetting from './ThemeModeSetting';

const ProfileSettingScreen = (props) => {
    const {navigation} = props;
    const [reminders, setReminders] = useState(false);

    const toggleSwitch = () => setReminders(value => !value);

    const handleNavigate = (route) => () => {
        return navigation.navigate(route);
    };

    return (
        <SafeAreaView
            style={{flex: 1}}
            forceInset={{top: 'always'}}>
            <Header title="Settings"/>
            <ScrollView>
                <View style={styles.contain}>
                    <View style={{width: '100%'}}>
                        <ListItemAngleRight onPress={handleNavigate(appRoutes.PROFILE_LANGUAGE)} value="English">
                            <Text>Language</Text>
                        </ListItemAngleRight>
                        <ListItemAngleRight onPress={handleNavigate('')} value="Ruleway">
                            <Text>Font</Text>
                        </ListItemAngleRight>
                        <ListItemAngleRight onPress={handleNavigate('')} value="orange">
                            <Text>Theme</Text>
                        </ListItemAngleRight>
                        <ListItemAngleRight onPress={handleNavigate('')} value="Ruleway">
                            <Text>Font</Text>
                        </ListItemAngleRight>

                        <ThemeModeSetting/>

                        <ListItem>
                            <Left>
                                <Text body1>Reminders</Text>
                            </Left>
                            <Right>
                                <Switch
                                    size={18}
                                    onValueChange={toggleSwitch}
                                    value={reminders}
                                />
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text body1>App Version</Text>
                            </Left>
                            <Right>
                                <Text body1 grayColor>1.0.4</Text>
                            </Right>
                        </ListItem>
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
