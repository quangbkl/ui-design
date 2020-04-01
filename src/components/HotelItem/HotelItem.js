import React from 'react';
import HotelItemBlock from './HotelItemBlock';
import HotelItemList from './HotelItemList';
import HotelItemGrid from './HotelItemGrid';

const HotelItem = ({view, ...rest}) => {
    const Items = {
        block: HotelItemBlock,
        list: HotelItemList,
        grid: HotelItemGrid,
    };

    const Item = Items[view || 'block'] || Items.block;

    return <Item {...rest}/>;
};

export default HotelItem;
