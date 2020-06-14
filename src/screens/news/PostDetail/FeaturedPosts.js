import React from 'react';
import PostListItem from '../../../components-v2/PostListItem/PostListItem';
import Text from '../../../components/Text/Text';
import appRoutes from '../../../navigations/appRoutes';
import {useNavigation} from '@react-navigation/native';

const FeaturedPosts = () => {
    const navigation = useNavigation();

    const img1 = 'https://trello-attachments.s3.amazonaws.com/5d70db704adc9255de4c8edb/5ee64471abdc5c3a24cac01a/c91d56ebcbaeb9d1bf60c29039467f1e/trip-8.jpg';
    const img2 = 'https://trello-attachments.s3.amazonaws.com/5d70db704adc9255de4c8edb/5ee64471abdc5c3a24cac01a/82596a96d10040f4fe96a18eb19d8271/trip-9.jpg';

    return (
        <>
            <Text
                headline
                semibold
                style={{
                    marginTop: 20
                }}
            >
                Featured Posts
            </Text>
            <PostListItem
                title="See The Unmatched"
                description="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui Donec rutrum congue leo eget malesuada."
                style={{marginTop: 10, width: '100%'}}
                image={img1}
                onPress={() => {
                    navigation.navigate(appRoutes.POSTS);
                }}
            />
            <PostListItem
                description="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui Donec rutrum congue leo eget malesuada."
                title="Top 15 Things Must To Do"
                style={{marginTop: 10, width: '100%'}}
                image={img2}
                onPress={() => {
                    navigation.navigate(appRoutes.POSTS);
                }}
            />
        </>
    );
};

FeaturedPosts.propTypes = {};

export default FeaturedPosts;
