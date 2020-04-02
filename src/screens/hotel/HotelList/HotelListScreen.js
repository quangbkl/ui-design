import React, { useState } from 'react';
import {View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../components/CustomHeader';
import CustomIcon from '../../../components/CustomIcon';
import FilterBlock from '../../../components/FilterBlock';

const HotelListScreen = () => {
    const navigation = useNavigation();
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
            <FilterBlock />
            <Text>Hotel List Screen</Text>
        </View>
    );
};

export default HotelListScreen;
