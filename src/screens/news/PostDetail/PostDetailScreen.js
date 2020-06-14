import React, {useState} from 'react';
import {View, Animated, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import scaleWithPixel from '../../../helpers/scaleWithPixel';
import {BaseStyle} from '../../../config/theme';
import Header from '../../../components-v2/Header/Header';
import Icon from '../../../components-v2/Icon/Icon';
import useApp from '../../../hooks/app/useApp';
import {useNavigation} from '@react-navigation/native';
import ProfileAuthor from '../../../components-v2/ProfileAuthor/ProfileAuthor';
import ProfileGroup from '../../../components-v2/ProfileGroup/ProfileGroup';
import Card from '../../../components-v2/Card/Card';
import PostListItem from '../../../components-v2/PostListItem/PostListItem';
import Text from '../../../components/Text/Text';
import FeaturedPosts from './FeaturedPosts';
import ImageGallery from './ImageGallery';
import UserFollowing from './UserFollowing';
import TopExperiences from './TopExperiences';

const PostDetailScreen = () => {
    const heightHeader = 45;
    const heightImageBanner = scaleWithPixel(250);
    const marginTopBanner = heightImageBanner - heightHeader - 30;

    const {state: appState} = useApp();
    const {colors} = appState;

    const navigation = useNavigation();

    const [deltaY, setDeltaY] = useState(new Animated.Value(0));

    const styles = StyleSheet.create({
        imgBanner: {
            width: '100%',
            height: 250,
            position: 'absolute'
        }
    });

    const roomImage = 'https://trello-attachments.s3.amazonaws.com/5d70db704adc9255de4c8edb/5ee64471abdc5c3a24cac01a/5264b074bab949bf690d26c9099297d7/room-6.jpg';
    const profileImage = 'https://trello-attachments.s3.amazonaws.com/5d70db704adc9255de4c8edb/5ee64471abdc5c3a24cac01a/fa897421d855f4dcd15fad4a9a754d86/profile-2.jpg';

    return (
        <View style={{flex: 1}}>
            <Animated.Image
                source={{uri: roomImage}}
                style={[
                    styles.imgBanner,
                    {
                        height: deltaY.interpolate({
                            inputRange: [
                                0,
                                scaleWithPixel(195),
                                scaleWithPixel(195)
                            ],
                            outputRange: [
                                heightImageBanner,
                                heightHeader,
                                heightHeader
                            ]
                        })
                    }
                ]}
            />
            <SafeAreaView
                style={BaseStyle.safeAreaView}
                forceInset={{top: 'always'}}
            >
                <Header
                    title=""
                    renderLeft={() => {
                        return (
                            <Icon
                                name="arrow-left"
                                size={20}
                                color={colors.whiteColor}
                            />
                        );
                    }}
                    renderRight={() => {
                        return (
                            <Icon
                                name="bookmark"
                                solid
                                size={20}
                                color={colors.whiteColor}
                            />
                        );
                    }}
                    onPressLeft={() => {
                        navigation.goBack();
                    }}
                    onPressRight={() => {
                    }}
                />
                <ScrollView
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {y: deltaY}
                            }
                        }
                    ])}
                    scrollEventThrottle={8}
                >
                    <View
                        style={{
                            paddingHorizontal: 20,
                            marginBottom: 20,
                            marginTop: marginTopBanner
                        }}
                    >
                        <Text
                            headline
                            semibold
                            whiteColor
                            numberOfLines={1}
                        >
                            Ready Fast For Fall Leaf Viewing Trips?
                        </Text>
                        <ProfileAuthor
                            image={profileImage}
                            name="Steve Garrett"
                            description="5 hours ago | 100k views"
                            textRight="Jun 2018"
                            style={{
                                marginTop: 20
                            }}
                        />
                        <Text body2>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Donec rutrum congue leo eget
                            malesuada. Nulla porttitor accumsan tincidunt.
                            Donec rutrum congue leo eget malesuada. Nulla
                            porttitor accumsan tincidunt. Nulla porttitor
                            accumsan tincidunt. Quisque velit nisi, pretium
                            ut lacinia in, elementum id enim. Donec rutrum
                            congue leo eget malesuada. Praesent sapien
                            massa, convallis a pellentesque nec, egestas non
                            nisi. Vestibulum ac diam sit amet quam vehicula
                            elementum sed sit amet dui Donec rutrum congue
                            leo eget malesuada. Vivamus suscipit tortor eget
                            felis porttitor volutpat. Sed porttitor lectus
                            nibh. Nulla quis lorem ut libero malesuada
                            feugiat. Quisque velit nisi, pretium ut lacinia
                            in, elementum id enim.
                        </Text>
                        <UserFollowing/>
                        <TopExperiences/>
                        <FeaturedPosts/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

PostDetailScreen.propTypes = {};

export default PostDetailScreen;
