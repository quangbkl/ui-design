import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import CustomIcon from '../Icon/CustomIcon';
import { BaseColor } from '../../config/color';

const FilterSort = () => {
    return (
        <View style={[styles.container, styles.flex]}>
            <TouchableOpacity style={styles.flex}>
                <CustomIcon style={styles.icon} type="sort-amount-up" />
                <Text style={styles.text}>{' '}Hightest Rating</Text>
            </TouchableOpacity>
            <View style={styles.flex}>
                <CustomIcon style={styles.icon} type="square-full" />
                <Text style={styles.text}>{'  |  '}</Text>
                <TouchableOpacity style={styles.flex}>
                    <CustomIcon style={styles.icon} type="filter" />
                    <Text style={styles.text}>{' '}Filter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        paddingTop: 10,
        paddingRight: 15,
        paddingBottom: 10,
        paddingLeft: 15,
    },
    text: {
        color: BaseColor.grayColor,
        lineHeight: 17,
        fontSize: 16,
    },
    icon: {
        color: BaseColor.grayColor,
        fontSize: 14,
    }
});

export default FilterSort;

