import React, {useState} from 'react';
import {List} from 'native-base';
import PropTypes from 'prop-types';

const SelectList = props => {
    const {value: initialValue, onChange, children, ...rest} = props;
    const [value, setValue] = useState(initialValue);

    const handleChange = newValue => {
        if (typeof onChange === 'function') {
            onChange(newValue);
        }
        return setValue(newValue);
    };

    return (
        <List {...rest}>
            {React.Children.map(children, child =>
                React.cloneElement(child, {
                    handleChange,
                    selectedValue: initialValue || value,
                }),
            )}
        </List>
    );
};

SelectList.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
};

export default SelectList;
