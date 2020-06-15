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
                            A hotel is an establishment that provides paid lodging on a short-term basis. Facilities
                            provided inside a hotel room may range from a modest-quality mattress in a small room to
                            large suites with bigger, higher-quality beds, a dresser, a refrigerator and other kitchen
                            facilities, upholstered chairs, a flat screen television, and en-suite bathrooms. Small,
                            lower-priced hotels may offer only the most basic guest services and facilities. Larger,
                            higher-priced hotels may provide additional guest facilities such as a swimming pool,
                            business centre (with computers, printers, and other office equipment), childcare,
                            conference and event facilities, tennis or basketball courts, gymnasium, restaurants, day
                            spa, and social function services.
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
