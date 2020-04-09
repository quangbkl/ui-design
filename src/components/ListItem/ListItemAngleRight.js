import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import {Left, Right} from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Text from '../Text/Text';
import useApp from 'hooks/app/useApp';

const ListItemAngleRight = ({value, children, ...rest}) => {
    const {state: appState} = useApp();
    const {color} = appState;

    return (
        <ListItem {...rest}>
            <Left>
                {React.Children.map(children, child =>
                    React.cloneElement(child),
                )}
            </Left>
            <Right
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}>
                {!!value && (
                    <Text body1 grayColor style={{marginRight: 5}}>
                        {value}
                    </Text>
                )}
                <FontAwesome5Icon
                    name="angle-right"
                    size={18}
                    color={color.primaryColor}
                />
            </Right>
        </ListItem>
    );
};

ListItemAngleRight.propTypes = {
    ...ListItem.propTypes,
    value: PropTypes.string,
};

export default ListItemAngleRight;
