import React from 'react';
import {View} from 'react-native';
import FilterSort from '../../../components/FilterSort/FilterSort';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../../../components/Header/Header';
import HotelItem from '../../../components/HotelItem/HotelItem';

// TODO: Code HotelItem component first

const Search = () => <FontAwesome5Icon name="search"/>;

const HotelsScreen = (props) => {
    const {navigation} = props;

    return (
        <View>
            <Header
                title="Hotels"
                description="24 Dec 2018, 2 Nights, 1 Room"
                right={<Search/>}
                goBack={navigation.goBack}
            />
            <FilterSort/>
            <HotelItem view="block"/>
            <View style={{marginTop: 20}}/>
            <HotelItem view="list"/>
            <View style={{marginTop: 20}}/>
            <HotelItem view="grid"/>
        </View>
    );
};

export default HotelsScreen;
