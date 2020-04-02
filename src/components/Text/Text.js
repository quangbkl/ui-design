import React from 'react';
import {Text as ReactText} from 'react-native';
import PropTypes from 'prop-types';
import {Typography} from '../../config/typography';
import {BaseColor} from '../../config/color';

const Text = (props) => {
    const {type, style: propStyle, ...rest} = props;
    const style = Typography[type || 'body1'] || {};

    return (
        <ReactText style={[{color: BaseColor.darkBlueColor}, style, propStyle]} {...rest}/>
    );
};

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
    style: ReactText.propTypes.style,
};

export default Text;
