import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as ReactButton} from 'react-native-elements';
import colors from '../configs/colors';
import {white} from 'color-name';

class Button extends React.Component {
    render() {
        const {type, ...rest} = this.props;
        const style = styles[type || 'primary'] || styles.primary;

        console.log(style);

        return (
            <ReactButton {...rest} containerStyle={style}/>
        );
    }
}

const styles = StyleSheet.create({
    primary: {
        backgroundColor: colors.color2,
        color: 'white',
    },
    light: {
        backgroundColor: 'white',
        color: colors.color2,
    },
});

export default Button;
