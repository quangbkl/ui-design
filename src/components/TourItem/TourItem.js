import React from 'react';
import {useNavigation} from '@react-navigation/native';
import appRoutes from 'navigations/appRoutes';
import TourItemBlock from './TourItemBlock';
import TourItemList from './TourItemList';
import TourItemGrid from './TourItemGrid';
import Touchable from '../Touchable/Touchable';

const TourItem = ({view, item, ...rest}) => {
    const navigation = useNavigation();
    const Items = {
        block: TourItemBlock,
        list: TourItemList,
        grid: TourItemGrid,
    };

    const Item = Items[view || 'block'] || Items.block;

    return (
        <Touchable onPress={() => navigation.navigate(appRoutes.TOUR_DETAIL, {tourId: item.id})}>
            <Item item={item} {...rest} />
        </Touchable>
    );
};

export default TourItem;
