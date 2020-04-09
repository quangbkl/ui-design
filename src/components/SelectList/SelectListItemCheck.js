import React from 'react';
import useApp from 'hooks/app/useApp';
import {Left, Right} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SelectListItem from './SelectListItem';

const SelectListItemCheck = props => {
    const {state: appState} = useApp();
    const {color} = appState;
    const {children, value, selectedValue, leftStyle, ...rest} = props;
    const checked = value === selectedValue;

    return (
        <SelectListItem value={value} {...rest}>
            <Left style={leftStyle}>
                {React.Children.map(children, child =>
                    React.cloneElement(child),
                )}
            </Left>
            {checked && (
                <Right>
                    <FontAwesome5
                        name="check"
                        size={18}
                        color={color.primaryColor}
                    />
                </Right>
            )}
        </SelectListItem>
    );
};

export default SelectListItemCheck;
