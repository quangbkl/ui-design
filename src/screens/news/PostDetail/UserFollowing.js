import React from 'react';
import Text from '../../../components/Text/Text';
import ProfileGroup from '../../../components-v2/ProfileGroup/ProfileGroup';

const UserFollowing = () => {
    const profileImages = [
        'https://trello-attachments.s3.amazonaws.com/5d70db704adc9255de4c8edb/5ee64471abdc5c3a24cac01a/657d7d1ddafe4038f87824a5602ef6c1/profile-1.jpg',
        'https://trello-attachments.s3.amazonaws.com/5d70db704adc9255de4c8edb/5ee64471abdc5c3a24cac01a/df5bda7640235d69e6429a782f84105f/profile-3.jpg',
        'https://trello-attachments.s3.amazonaws.com/5d70db704adc9255de4c8edb/5ee64471abdc5c3a24cac01a/f77bdc3ac2b47ffef1a8c446470163c5/profile-4.jpg'
    ];

    return (
        <>
            <Text
                headline
                semibold
                style={{
                    marginTop: 20
                }}
            >
                User Following
            </Text>
            <ProfileGroup
                name="Steve, Lincoln, Harry"
                detail="and 15 people like this"
                users={profileImages.map(item => ({image: item}))}
            />
        </>
    );
};

UserFollowing.propTypes = {};

export default UserFollowing;
