import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {BaseColor} from 'config/color';
import CustomIcon from '../Icon/CustomIcon';
import Text from '../Text/Text';
import Touchable from '../Touchable/Touchable';

const ProfileDetail = props => {
    const {
        style,
        image,
        styleLeft,
        styleThumb,
        styleRight,
        onPress,
        textFirst,
        point,
        textSecond,
        textThird,
        icon,
    } = props;

    return (
        <Touchable
            style={[styles.contain, style]}
            onPress={onPress}
            activeOpacity={0.9}>
            <View style={[styles.contentLeft, styleLeft]}>
                <View>
                    <Image
                        source={{
                            uri: image,
                        }}
                        style={[styles.thumb, styleThumb]}
                    />
                    <View style={styles.point}>
                        <Text overline whiteColor semibold>
                            {point}
                        </Text>
                    </View>
                </View>
                <View>
                    <Text headline semibold numberOfLines={1}>
                        {textFirst}
                    </Text>
                    <Text
                        body2
                        style={{
                            marginTop: 3,
                            paddingRight: 10,
                        }}
                        numberOfLines={1}>
                        {textSecond}
                    </Text>
                    <Text footnote grayColor numberOfLines={1}>
                        {textThird}
                    </Text>
                </View>
            </View>
            {icon && (
                <View style={[styles.contentRight, styleRight]}>
                    <CustomIcon
                        name="angle-right"
                        size={18}
                        color={BaseColor.grayColor}
                    />
                </View>
            )}
        </Touchable>
    );
};

const styles = StyleSheet.create({
    contain: {flexDirection: 'row'},
    contentLeft: {
        flex: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    thumb: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    contentRight: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    point: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: BaseColor.lightPrimaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 9,
        bottom: 0,
    },
});

ProfileDetail.defaultProps = {
    icon: true,
};

export default ProfileDetail;
