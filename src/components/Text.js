import React from 'react';
import {Text as ReactText, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import {Typography} from '../config/typography';
import {BaseColor} from '../config/color';

class Text extends React.Component {
    render() {
        const {type, style: propStyle, ...rest} = this.props;
        const style = Typography[type || 'title3'] || {};

        return (
            <ReactText style={[{color: BaseColor.darkBlueColor}, style, propStyle]} {...rest}/>
        );
    }
}

Text.propTypes = {
    type: PropTypes.oneOf([
        'header',
        'title1',
        'title2',
        'title3',
        'headline',
        'body1',
        'body2',
        'callout',
        'subhead',
        'footnote',
        'caption1',
        'caption2',
        'overline',
    ]),
    style: ViewPropTypes.style,
};

export default Text;
