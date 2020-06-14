import React from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Text from '../../components/Text/Text';
import scaleWithPixel from '../../helpers/scaleWithPixel';
import useApp from '../../hooks/app/useApp';

const PostListItem = (props) => {
    const {style, title, description, date, onPress, image} = props;

    const {state: appState} = useApp();
    const {colors} = appState;

    const styles = StyleSheet.create({
        contain: {flexDirection: 'row', width: scaleWithPixel(300)},
        imageBanner: {
            width: scaleWithPixel(100),
            height: scaleWithPixel(100)
        },
        content: {
            height: scaleWithPixel(100),
            paddingHorizontal: 10,
            backgroundColor: colors.fieldColor,
            justifyContent: 'space-between',
            flex: 1
        },
        contentTitle: {
            paddingTop: 5,
            justifyContent: 'flex-start'
        },
        contentDate: {
            paddingBottom: 5,
            justifyContent: 'flex-end'
        }
    });

    return (
        <TouchableOpacity
            style={[styles.contain, style]}
            onPress={onPress}
            activeOpacity={0.9}
        >
            <Image source={{uri: image}} style={styles.imageBanner}/>
            <View style={styles.content}>
                {title !== '' && (
                    <View style={styles.contentTitle}>
                        <Text headline semibold>
                            {title}
                        </Text>
                    </View>
                )}
                <View style={{flex: 1}}>
                    <Text
                        body2
                        grayColor
                        numberOfLines={5}
                        style={{paddingVertical: 5}}
                    >
                        {description}
                    </Text>
                </View>
                {date !== '' && (
                    <View style={styles.contentDate}>
                        <Text caption1 primaryColor>
                            {date}
                        </Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

PostListItem.propTypes = {
    image: PropTypes.node.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    onPress: PropTypes.func
};

PostListItem.defaultProps = {
    image: '',
    title: '',
    description: '',
    date: '',
    style: {},
    onPress: () => {
    }
};

export default PostListItem;
