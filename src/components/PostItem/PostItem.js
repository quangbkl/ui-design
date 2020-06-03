import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import ProfileAuthor from '../ProfileAuthor/ProfileAuthor';
import Touchable from '../Touchable/Touchable';

const PostItem = (props) => {
    const {onPress, item} = props;
    const {title, description, image, view, publishDate, author} = item;
    return (
        <Touchable onPress={onPress}>
            <ProfileAuthor
                name={author.name}
                image={author.image}
                view={view}
                publishDate={publishDate}
            />
            <View style={styles.imageContainer}>
                <Image
                    style={styles.largeImage}
                    source={{
                        uri: image,
                    }}
                />
                <FontAwesome5Icon style={styles.iconAddToFavorite} name="bookmark"/>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{description}</Text>
            </View>
        </Touchable>
    );
};
const styles = StyleSheet.create({
    imageContainer: {
        marginTop: 10,
    },
    largeImage: {
        width: '100%',
        height: 200,
    },
    iconAddToFavorite: {
        color: '#fff',
        fontSize: 20,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    contentContainer: {
        marginTop: 10,
        marginLeft: 10,
    },
    title: {
        fontSize: 16,
    },
    content: {
        fontSize: 14,
    },
});

export default PostItem;

