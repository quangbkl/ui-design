import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Text, Left, Right} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ListItem} from 'components';
import useApp from 'hooks/app/useApp';

const ThemeListItem = (props) => {
    const {state: appState} = useApp();
    const {color: baseColor} = appState;

    const {name, color, checked, ...rest} = props;

    return (
        <ListItem {...rest}>
            <Left style={{alignItems: 'center'}}>
                <View style={{width: 15, height: 15, backgroundColor: color}}/>
                <Text style={{marginLeft: 10}}>{name}</Text>
            </Left>
            {checked && <Right><FontAwesome5 name="check" size={18} color={baseColor.primaryColor}/></Right>}
        </ListItem>
    );
};

ThemeListItem.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    checked: PropTypes.bool
};

ThemeListItem.defaultProps = {
    checked: false
};

export default ThemeListItem;

