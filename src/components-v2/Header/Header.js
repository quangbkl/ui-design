import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, StatusBar, StyleSheet} from 'react-native';
import Text from '../../components/Text/Text';

const Header = (props) => {
    const {
        style,
        styleLeft,
        styleCenter,
        styleRight,
        styleRightSecond,
        title,
        subTitle,
        onPressLeft,
        onPressRight,
        onPressRightSecond
    } = props;

    const styles = StyleSheet.create({
        contain: {height: 45, flexDirection: 'row'},
        contentLeft: {
            flex: 1,
            justifyContent: 'center',
            paddingLeft: 20,
            width: 60
        },
        contentCenter: {
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center'
        },
        contentRight: {
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingLeft: 10,
            paddingRight: 20,
            height: '100%'
        },
        contentRightSecond: {
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingLeft: 10,
            paddingRight: 10,
            height: '100%'
        },
        right: {
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end'
        }
    });

    return (
        <View style={[styles.contain, style]}>
            <View style={{flex: 1}}>
                <TouchableOpacity
                    style={[styles.contentLeft, styleLeft]}
                    onPress={onPressLeft}
                >
                    {props.renderLeft()}
                </TouchableOpacity>
            </View>
            <View style={[styles.contentCenter, styleCenter]}>
                <Text headline>{title}</Text>
                {subTitle != '' && (
                    <Text caption2 light>
                        {subTitle}
                    </Text>
                )}
            </View>
            <View style={styles.right}>
                <TouchableOpacity
                    style={[styles.contentRightSecond, styleRightSecond]}
                    onPress={onPressRightSecond}
                >
                    {props.renderRightSecond()}
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.contentRight, styleRight]}
                    onPress={onPressRight}
                >
                    {props.renderRight()}
                </TouchableOpacity>
            </View>
        </View>
    );
};

Header.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleCenter: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleRight: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styleRightSecond: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    renderLeft: PropTypes.func,
    renderRight: PropTypes.func,
    renderRightSecond: PropTypes.func,
    onPressRightSecond: PropTypes.func,
    onPressLeft: PropTypes.func,
    onPressRight: PropTypes.func,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    barStyle: PropTypes.string
};

Header.defaultProps = {
    style: {},
    styleLeft: {},
    styleCenter: {},
    styleRight: {},
    styleRightSecond: {},
    renderLeft: () => {
    },
    renderRight: () => {
    },
    renderRightSecond: () => {
    },
    onPressLeft: () => {
    },
    onPressRight: () => {
    },
    onPressRightSecond: () => {
    },
    title: 'Title',
    subTitle: '',
    barStyle: 'default'
};

export default Header;
