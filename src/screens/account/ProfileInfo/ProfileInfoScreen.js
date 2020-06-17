import React from 'react';
import {BaseColor} from 'config/color';
import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet
} from 'react-native';
import {
    ProfileDetail,
    ProfilePerformance,
    Text,
    CustomIcon,
    Button,
    Header,
    Touchable,
    ListItemAngleRight
} from 'components';
import appRoutes from 'navigations/appRoutes';

const ProfileInfoScreen = (props) => {
    const {navigation} = props;
    const userData = {
        id: '@quangbkl',
        image: 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/150x150/edb78704b0c18ce6a06669ba40367d58/biker-helmet.png',
        name: 'Doan Van Quang',
        major: 'Travel Company',
        email: 'quang99dev@gmail.com',
        address: 'Ha Noi, Viet Nam',
        point: '9.5',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        performance: [
            {value: '92.1%', title: 'Feedback'},
            {value: '99', title: 'Items'},
            {value: '10k', title: 'Followers'}
        ]
    };

    const handleNavigate = (route) => () => {
        return navigation.navigate(route);
    };

    return (
        <SafeAreaView
            style={{flex: 1}}
            forceInset={{top: 'always'}}>
            <Header title="Profile"/>
            <ScrollView>
                <View style={styles.contain}>
                    <ProfileDetail
                        image={userData.image}
                        textFirst={userData.name}
                        point={userData.point}
                        textSecond={userData.address}
                        textThird={userData.id}
                        onPress={handleNavigate('')}
                    />
                    <ProfilePerformance
                        data={userData.performance}
                        style={styles.performanceContainer}
                    />
                    <View style={{width: '100%'}}>
                        <ListItemAngleRight onPress={handleNavigate(appRoutes.PROFILE_EDIT)}>
                            <Text>Edit Profile</Text>
                        </ListItemAngleRight>
                        <ListItemAngleRight onPress={handleNavigate(appRoutes.CHANGE_PASSWORD)}>
                            <Text>Change Password</Text>
                        </ListItemAngleRight>
                        <ListItemAngleRight onPress={handleNavigate(appRoutes.PROFILE_CURRENCY)} value="VND">
                            <Text>Currency</Text>
                        </ListItemAngleRight>
                        <ListItemAngleRight onPress={handleNavigate('')}>
                            <Text>My Cart</Text>
                        </ListItemAngleRight>
                        <ListItemAngleRight onPress={handleNavigate(appRoutes.PROFILE_SETTING)}>
                            <Text>Settings</Text>
                        </ListItemAngleRight>
                    </View>
                </View>
            </ScrollView>

            <View style={{padding: 20}}>
                <Button>
                    Sign Out
                </Button>
            </View>
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
    }
});

export default ProfileInfoScreen;
