/**
 * Preview image: http://passionui.com/wp-content/uploads/2019/07/2019-07-18_2052-768x445.png
 * */

// let item = {
//     image: "assets/images/hotel-01.jpg",
//     name: "Boston Hotel",
//     location: "553 Gislason Radial",
//     price: "$125",
//     available: "Only 1 rooms leave",
//     rate: 4.5,
//     rateStatus: "Very Good",
//     rateCount: "85 of 100",
//     numReviews: 100,
//     services: [
//         { icon: "wifi", name: "Free Wifi" },
//         { icon: "coffee", name: "Free Coffee" },
//         { icon: "bath", name: "Free Bath" },
//         { icon: "car", name: "Free Car" },
//         { icon: "paw", name: "Free Paw" },
//         { icon: "futbol", name: "Free Futbol" }
//     ]
// }
//
// <HotelItem
//     grid
//     image={item.image}
//     name={item.name}
//     location={item.location}
//     price={item.price}
//     available={item.available}
//     rate={item.rate}
//     rateStatus={item.rateStatus}
//     numReviews={item.numReviews}
//     services={item.services}
//     style={
//         index % 2 ? { marginLeft: 15 } : {}
//     }
//     onPress={() =>
//         navigation.navigate("HotelDetailScreen") // call internal function
//     }
// />


import React from 'react';
import {Text, View} from 'react-native';

const HotelItemBlock = () => {
    return <View><Text>HotelItemBlock</Text></View>;
};

export default HotelItemBlock;
