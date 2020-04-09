/**
 * Preview image: http://passionui.com/wp-content/uploads/2019/07/2019-07-21_1623-574x1024.png
 * */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import moment from 'moment';
import {BaseColor} from 'config/color';
import {normalizeNumber} from 'helpers/number';

const ProfileAuthor = props => {
    const {name, view, publishDate, image, showDate} = props;
    const fromNowDate = date => {
        const text = moment(date).fromNow();
        return text;
    };
    const formatLL = date => {
        const text = moment(date).format('LL');
        return text;
    };

    return (
        <View style={styles.headerContainer}>
            <View style={styles.leftBlock}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: image,
                    }}
                />
                <View style={styles.detail}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.extraUser}>
                        {fromNowDate(publishDate)}
                        {' | '}
                        {`${normalizeNumber(view)} views`}
                    </Text>
                </View>
            </View>
            {showDate && publishDate ? (
                <Text style={styles.rightBlock}>{formatLL(publishDate)}</Text>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
    },
    leftBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rightBlock: {
        textAlignVertical: 'center',
        marginRight: 10,
        color: BaseColor.grayColor,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    detail: {
        paddingLeft: 5,
    },
    name: {
        fontSize: 16,
    },
    extraUser: {
        fontSize: 14,
        color: BaseColor.grayColor,
    },
});

ProfileAuthor.defaultProps = {
    showDate: true,
};

export default ProfileAuthor;
