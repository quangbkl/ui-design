import React from 'react';
import {StyleSheet} from 'react-native';
import {ListItem as ListItemNativeBase} from 'native-base';

const ListItem = ({style, ...props}) => {
    return (
        <ListItemNativeBase {...props} style={[styles.listItem, style]}/>
    );
};

const styles = StyleSheet.create({
    listItem: {
        marginLeft: 0,
        paddingRight: 0,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1
    }
});

ListItem.propTypes = ListItemNativeBase.propTypes;

export default ListItem;
