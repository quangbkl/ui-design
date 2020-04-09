import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Text} from 'native-base';
import {SelectListItemCheck} from 'components';

const ThemeListItem = props => {
    const {name, color, ...rest} = props;

    return (
        <SelectListItemCheck leftStyle={{alignItems: 'center'}} {...rest}>
            <View style={{width: 15, height: 15, backgroundColor: color}} />
            <Text style={{marginLeft: 10}}>{name}</Text>
        </SelectListItemCheck>
    );
};

ThemeListItem.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default ThemeListItem;
