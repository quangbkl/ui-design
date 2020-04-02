import React, { useState } from 'react';
import {View} from 'react-native';
import FilterSort from '../../../components/FilterSort/FilterSort';
import CustomHeader from '../../../components/Header/CustomHeader';
import CustomIcon from '../../../components/Icon/CustomIcon';
import HotelItem from '../../../components/HotelItem/HotelItem';

// TODO: Code HotelItem component first

const HotelsScreen = () => {
    const [description, setDescription] = useState("sdfgfd");
    const renderRightHeader = () => <CustomIcon type="search" />;

    return (
        <View>
            <CustomHeader
                hasLeft
                hasRight
                title="Hotels"
                description={description}
                right={renderRightHeader()}
            />
            <FilterSort />
            <HotelItem view="block"/>
            <View style={{marginTop: 20}}/>
            <HotelItem view="list"/>
            <View style={{marginTop: 20}}/>
            <HotelItem view="grid"/>
        </View>
    );
};

export default HotelsScreen;
