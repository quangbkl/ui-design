import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CustomIcon from '../Icon/CustomIcon';
import {BaseColor} from 'config/color';
import Touchable from '../Touchable/Touchable';

const FilterSort = (props) => {
    const {view, onChangeView} = props;
    const mapView = {
        block: 'square-full',
        grid: 'th-large',
        list: 'th-list',
    };
    const handleChangeView = () => {
        // if (view === 'block') {
        //     onChangeView('list');
        // } else if (view === 'list') {
        //     onChangeView('grid');
        // } else {
        //     onChangeView('block');
        // }
    };

    return (
        <View style={[styles.container, styles.flex]}>
            <Touchable style={styles.flex}>
                <CustomIcon style={styles.icon} type="sort-amount-up"/>
                <Text style={styles.text}>{' '}Hightest Rating</Text>
            </Touchable>
            <View style={styles.flex}>
                <CustomIcon style={styles.icon} type={mapView[view]} onPress={handleChangeView}/>
                <Text style={styles.text}>{'  |  '}</Text>
                <Touchable style={styles.flex}>
                    <CustomIcon style={styles.icon} type="filter"/>
                    <Text style={styles.text}>{' '}Filter</Text>
                </Touchable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        backgroundColor: BaseColor.fieldColor,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
    },
    text: {
        color: BaseColor.grayColor,
        lineHeight: 17,
        fontSize: 16,
    },
    icon: {
        color: BaseColor.grayColor,
        fontSize: 14,
    },
});

export default FilterSort;

