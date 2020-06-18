import React from 'react';
import PropTypes from 'prop-types';
import HotelItemBlock from "./HotelItemBlock";
import HotelItemGrid from "./HotelItemGrid";
import HotelItemList from "./HotelItemList";

const HotelItem = (props) => {
    const {block, grid} = props;
    if (block) return <HotelItemBlock {...props}/>
    if (grid) return <HotelItemGrid {...props}/>
    return <HotelItemList {...props}/>
};

HotelItem.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    image: PropTypes.node.isRequired,
    list: PropTypes.bool,
    block: PropTypes.bool,
    grid: PropTypes.bool,
    name: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.string,
    available: PropTypes.string,
    rate: PropTypes.number,
    rateCount: PropTypes.string,
    rateStatus: PropTypes.string,
    numReviews: PropTypes.number,
    services: PropTypes.array,
    onPress: PropTypes.func,
    onPressTag: PropTypes.func
};

HotelItem.defaultProps = {
    style: {},
    image: "",
    list: true,
    block: false,
    grid: false,
    name: "",
    location: "",
    price: "",
    available: "",
    rate: 0,
    rateCount: "",
    rateStatus: "",
    numReviews: 0,
    services: [],
    onPress: () => {
    },
    onPressTag: () => {
    }
};

export default HotelItem;
