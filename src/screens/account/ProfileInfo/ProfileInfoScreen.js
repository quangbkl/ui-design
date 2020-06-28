import React, { useEffect, useState } from "react";
import { BaseColor } from "config/color";
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Alert,
  AsyncStorage,
} from "react-native";
import {
  ProfileDetail,
  ProfilePerformance,
  Text,
  CustomIcon,
  Button,
  Header,
  Touchable,
  ListItemAngleRight,
} from "components";
import appRoutes from "navigations/appRoutes";
import useApp from "../../../hooks/app/useApp";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import handleSignIn from "../../../hooks/app/actions/handleSignIn";

const ProfileInfoScreen = (props) => {
  const { state: appState } = useApp();
  const { colors } = appState;
  const navigation = useNavigation();
  const [user, setUser] = useState();

  const userData = {
    id: "@quangbkl",
    image:
      "https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/150x150/edb78704b0c18ce6a06669ba40367d58/biker-helmet.png",
    name: "Doan Van Quang",
    major: "Travel Company",
    email: "quang99dev@gmail.com",
    address: "Ha Noi, Viet Nam",
    point: "9.5",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    performance: [
      { value: "92.1%", title: "Feedback" },
      { value: "99", title: "Items" },
      { value: "10k", title: "Followers" },
    ],
  };

  const handleNavigate = (route) => () => {
    return navigation.navigate(route);
  };

  const styles = StyleSheet.create({
    performanceContainer: {
      backgroundColor: colors.backgroundSecondaryColor,
      marginTop: 20,
      marginBottom: 20,
    },
    contentTitle: {
      alignItems: "flex-start",
      width: "100%",
      height: 32,
      justifyContent: "center",
    },
    contain: {
      alignItems: "center",
      padding: 20,
      width: "100%",
    },
  });

  const handleLogout = () => {
    Alert.alert(
      "Xác nhận",
      "Chắc chắn muốn đăng xuất?",
      [
        {
          text: "Hủy",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                setUser(null);
                AsyncStorage.removeItem("userLoginId");
                navigation.navigate(appRoutes.HOME);
              });
          },
        },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    navigation.addListener("focus", async () => {
      try {
        const userF = await firebase.auth().currentUser;
        setUser(userF);
      } catch {
        //
      }
    });
  }, [navigation]);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.backgroundPrimaryColor }}
      forceInset={{ top: "always" }}
    >
      <Header title="Settings" />
      {user ? (
        <>
          <ScrollView>
            <View style={styles.contain}>
              <ProfileDetail
                image={user.photoURL}
                textFirst={user.displayName}
                point={9.5}
                // textSecond={userData.address}
                textThird={user.email}
                onPress={handleNavigate(appRoutes.PROFILE_EDIT)}
              />
              <ProfilePerformance
                data={userData.performance}
                style={styles.performanceContainer}
              />
              <View style={{ width: "100%" }}>
                <ListItemAngleRight
                  onPress={handleNavigate(appRoutes.PROFILE_EDIT)}
                >
                  <Text>Edit Profile</Text>
                </ListItemAngleRight>
                <ListItemAngleRight
                  onPress={handleNavigate(appRoutes.CHANGE_PASSWORD)}
                >
                  <Text>Change Password</Text>
                </ListItemAngleRight>
                <ListItemAngleRight value="VND">
                  <Text>Currency</Text>
                </ListItemAngleRight>
                <ListItemAngleRight>
                  <Text>My Cart</Text>
                </ListItemAngleRight>
                <ListItemAngleRight
                  onPress={handleNavigate(appRoutes.PROFILE_SETTING)}
                >
                  <Text>Settings</Text>
                </ListItemAngleRight>
              </View>
            </View>
          </ScrollView>
          <View style={{ padding: 20 }}>
            <Button onPress={handleLogout}>Sign Out</Button>
          </View>
        </>
      ) : (
        <>
          <ScrollView>
            <View style={styles.contain}>
              <View style={{ width: "100%" }}>
                <ListItemAngleRight
                  onPress={handleNavigate(appRoutes.CHANGE_PASSWORD)}
                >
                  <Text>Change Password</Text>
                </ListItemAngleRight>
                <ListItemAngleRight value="VND">
                  <Text>Currency</Text>
                </ListItemAngleRight>
                <ListItemAngleRight>
                  <Text>My Cart</Text>
                </ListItemAngleRight>
                <ListItemAngleRight
                  onPress={handleNavigate(appRoutes.PROFILE_SETTING)}
                >
                  <Text>Settings</Text>
                </ListItemAngleRight>
              </View>
            </View>
          </ScrollView>
          <View style={{ padding: 20 }}>
            <Button onPress={handleNavigate(appRoutes.WALKTHROUGH)}>
              Sign In
            </Button>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default ProfileInfoScreen;
