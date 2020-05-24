import React from 'react';
import {useNavigation} from '@react-navigation/native';
import appRoutes from 'navigations/appRoutes';
import HotelItemBlock from './HotelItemBlock';
import HotelItemList from './HotelItemList';
import HotelItemGrid from './HotelItemGrid';
import Touchable from '../Touchable/Touchable';

const HotelItem = ({view, item, onViewHotel, ...rest}) => {
    const navigation = useNavigation();
    const Items = {
        block: HotelItemBlock,
        list: HotelItemList,
        grid: HotelItemGrid,
    };

    const Item = Items[view || 'block'] || Items.block;

    return (
        <Touchable onPress={() => onViewHotel()}>
            <Item item={item} {...rest}/>
        </Touchable>
    );
};

export default HotelItem;
