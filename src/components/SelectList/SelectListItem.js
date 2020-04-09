import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';

const SelectListItem = props => {
    const {handleChange, value, ...rest} = props;

    const handlePress = () => {
        if (typeof handleChange === 'function') {
            handleChange(value);
        }
    };

    return <ListItem onPress={handlePress} {...rest} />;
};

SelectListItem.propTypes = {
    handleChange: PropTypes.func,
    value: PropTypes.string.isRequired,
};

export default SelectListItem;
