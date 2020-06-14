import React from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Text from '../../components/Text/Text';

const ProfileAuthor = (props) => {
    const {
        style,
        image,
        styleLeft,
        styleThumb,
        styleRight,
        onPress,
        name,
        description,
        textRight
    } = props;

    const styles = StyleSheet.create({
        contain: {
            flexDirection: 'row',
            paddingVertical: 10
        },
        contentLeft: {
            flex: 8,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        thumb: {
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 5
        },
        contentRight: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'flex-end'
        }
    });

    return (
        <TouchableOpacity
            style={[styles.contain, style]}
            onPress={onPress}
            activeOpacity={0.9}
        >
            <View style={[styles.contentLeft, styleLeft]}>
                <Image source={{uri: image}} style={[styles.thumb, styleThumb]}/>
                <View>
                    <Text headline semibold numberOfLines={1}>
                        {name}
                    </Text>
                    <Text footnote grayColor numberOfLines={1}>
                        {description}
                    </Text>
                </View>
            </View>
            <View style={[styles.contentRight, styleRight]}>
                <Text caption2 grayColor numberOfLines={1}>
                    {textRight}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

ProfileAuthor.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    image: PropTypes.node.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    textRight: PropTypes.string,
    styleLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleThumb: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleRight: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onPress: PropTypes.func
};

ProfileAuthor.defaultProps = {
    image: '',
    name: '',
    description: '',
    textRight: '',
    styleLeft: {},
    styleThumb: {},
    styleRight: {},
    style: {},
    onPress: () => {
    }
};

export default ProfileAuthor;
