import React from 'react';
import Text from "../../../components/Text/Text";
import {FlatList, StyleSheet, View} from "react-native";
import Image from "../../../components-v2/Image/Image";
import useApp from "../../../hooks/app/useApp";
import {useNavigation} from "@react-navigation/native";
import scaleWithPixel from "../../../helpers/scaleWithPixel";
import appRoutes from "../../../navigations/appRoutes";
import HotelItem from "../../../components-v2/HotelItem/HotelItem";

const HotelData = [
    {
        id: "1",
        image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
        name: "Boston Hotel",
        location: "553 Gislason Radial",
        price: "$125",
        available: "Only 1 rooms leaft",
        rate: 4.5,
        rateStatus: "Very Good",
        rateCount: "85 of 100",
        numReviews: 100,
        services: [
            {id: "1", icon: "wifi", name: "Free Wifi"},
            {id: "2", icon: "coffee", name: "Free Coffee"},
            {id: "3", icon: "bath", name: "Free Bath"},
            {id: "4", icon: "car", name: "Free Car"},
            {id: "5", icon: "paw", name: "Free Paw"},
            {id: "6", icon: "futbol", name: "Free Futbol"}
        ]
    },
    {
        id: "2",
        image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
        name: "Brisbane Hotel",
        location: "623 Cathrine Port",
        price: "$199",
        available: "Only 2 rooms leaft",
        rate: 4,
        rateStatus: "Very Good",
        rateCount: "85 of 100",
        numReviews: 99,
        services: [
            {id: "1", icon: "wifi", name: "Free Wifi"},
            {id: "2", icon: "coffee", name: "Free Coffee"},
            {id: "3", icon: "bath", name: "Free Bath"},
            {id: "4", icon: "car", name: "Free Car"},
            {id: "5", icon: "paw", name: "Free Paw"},
            {id: "6", icon: "futbol", name: "Free Futbol"}
        ]
    },
    {
        id: "3",
        image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
        name: "Seattle Hotel",
        location: "303 Natasha Manors",
        price: "$399",
        available: "Only 3 rooms leaft",
        rate: 4,
        rateStatus: "Very Good",
        rateCount: "85 of 100",
        numReviews: 89,
        services: [
            {id: "1", icon: "wifi", name: "Free Wifi"},
            {id: "2", icon: "coffee", name: "Free Coffee"},
            {id: "3", icon: "bath", name: "Free Bath"},
            {id: "4", icon: "car", name: "Free Car"},
            {id: "5", icon: "paw", name: "Free Paw"},
            {id: "6", icon: "futbol", name: "Free Futbol"}
        ]
    },
    {
        id: "4",
        image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
        name: "Chengdu Hotel",
        location: "19 Jennie Route",
        price: "$399",
        available: "Only 4 rooms leaft",
        rate: 4.5,
        rateStatus: "Very Good",
        rateCount: "85 of 100",
        numReviews: 299,
        services: [
            {id: "1", icon: "wifi", name: "Free Wifi"},
            {id: "2", icon: "coffee", name: "Free Coffee"},
            {id: "3", icon: "bath", name: "Free Bath"},
            {id: "4", icon: "car", name: "Free Car"},
            {id: "5", icon: "paw", name: "Free Paw"},
            {id: "6", icon: "futbol", name: "Free Futbol"}
        ]
    },
    {
        id: "5",
        image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
        name: "Adora Hotel",
        location: "43 Gust Locks Apt. 725",
        price: "$499",
        available: "Only 5 rooms leaft",
        rate: 5,
        rateStatus: "Very Good",
        rateCount: "85 of 100",
        numReviews: 399,
        services: [
            {id: "1", icon: "wifi", name: "Free Wifi"},
            {id: "2", icon: "coffee", name: "Free Coffee"},
            {id: "3", icon: "bath", name: "Free Bath"},
            {id: "4", icon: "car", name: "Free Car"},
            {id: "5", icon: "paw", name: "Free Paw"},
            {id: "6", icon: "futbol", name: "Free Futbol"}
        ]
    },
    {
        id: "6",
        image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
        name: "Cindy Hotel",
        location: "4873 Clotilde Isle",
        price: "$299",
        available: "Only 10 rooms leaft",
        rate: 5,
        rateStatus: "Very Good",
        rateCount: "85 of 100",
        numReviews: 400,
        services: [
            {id: "1", icon: "wifi", name: "Free Wifi"},
            {id: "2", icon: "coffee", name: "Free Coffee"},
            {id: "3", icon: "bath", name: "Free Bath"},
            {id: "4", icon: "car", name: "Free Car"},
            {id: "5", icon: "paw", name: "Free Paw"},
            {id: "6", icon: "futbol", name: "Free Futbol"}
        ]
    },
    {
        id: "7",
        image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
        name: "Tangle Hotel",
        location: "4873 Nevada St",
        price: "$299",
        available: "Only 10 rooms leaft",
        rate: 5,
        rateStatus: "Very Good",
        rateCount: "85 of 100",
        numReviews: 400,
        services: [
            {id: "1", icon: "wifi", name: "Free Wifi"},
            {id: "2", icon: "coffee", name: "Free Coffee"},
            {id: "3", icon: "bath", name: "Free Bath"},
            {id: "4", icon: "car", name: "Free Car"},
            {id: "5", icon: "paw", name: "Free Paw"},
            {id: "6", icon: "futbol", name: "Free Futbol"}
        ]
    },
    {
        id: "8",
        image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
        name: "Felix Hotel",
        location: "4873 Clotilde Isle",
        price: "$299",
        available: "Only 10 rooms leaft",
        rate: 5,
        rateStatus: "Very Good",
        rateCount: "85 of 100",
        numReviews: 400,
        services: [
            {id: "1", icon: "wifi", name: "Free Wifi"},
            {id: "2", icon: "coffee", name: "Free Coffee"},
            {id: "3", icon: "bath", name: "Free Bath"},
            {id: "4", icon: "car", name: "Free Car"},
            {id: "5", icon: "paw", name: "Free Paw"},
            {id: "6", icon: "futbol", name: "Free Futbol"}
        ]
    },
    {
        id: "9",
        image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
        name: "Happy Hotel",
        location: "553 Gislason Radial",
        price: "$125",
        available: "Only 1 rooms leaft",
        rate: 4.5,
        rateStatus: "Very Good",
        rateCount: "85 of 100",
        numReviews: 100,
        services: [
            {id: "1", icon: "wifi", name: "Free Wifi"},
            {id: "2", icon: "coffee", name: "Free Coffee"},
            {id: "3", icon: "bath", name: "Free Bath"},
            {id: "4", icon: "car", name: "Free Car"},
            {id: "5", icon: "paw", name: "Free Paw"},
            {id: "6", icon: "futbol", name: "Free Futbol"}
        ]
    },
    {
        id: "10",
        image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
        name: "Lucky Hotel",
        location: "623 Cathrine Port",
        price: "$199",
        available: "Only 2 rooms leaft",
        rate: 4,
        rateStatus: "Very Good",
        rateCount: "85 of 100",
        numReviews: 99,
        services: [
            {id: "1", icon: "wifi", name: "Free Wifi"},
            {id: "2", icon: "coffee", name: "Free Coffee"},
            {id: "3", icon: "bath", name: "Free Bath"},
            {id: "4", icon: "car", name: "Free Car"},
            {id: "5", icon: "paw", name: "Free Paw"},
            {id: "6", icon: "futbol", name: "Free Futbol"}
        ]
    },
    {
        id: "11",
        image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
        name: "JoJo Hotel",
        location: "303 Natasha Manors",
        price: "$399",
        available: "Only 3 rooms leaft",
        rate: 4,
        rateStatus: "Very Good",
        rateCount: "85 of 100",
        numReviews: 89,
        services: [
            {id: "1", icon: "wifi", name: "Free Wifi"},
            {id: "2", icon: "coffee", name: "Free Coffee"},
            {id: "3", icon: "bath", name: "Free Bath"},
            {id: "4", icon: "car", name: "Free Car"},
            {id: "5", icon: "paw", name: "Free Paw"},
            {id: "6", icon: "futbol", name: "Free Futbol"}
        ]
    },
    {
        id: "12",
        image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
        name: "Sunflower Hotel",
        location: "19 Jennie Route",
        price: "$399",
        available: "Only 4 rooms leaft",
        rate: 4.5,
        rateStatus: "Very Good",
        rateCount: "85 of 100",
        numReviews: 299,
        services: [
            {id: "1", icon: "wifi", name: "Free Wifi"},
            {id: "2", icon: "coffee", name: "Free Coffee"},
            {id: "3", icon: "bath", name: "Free Bath"},
            {id: "4", icon: "car", name: "Free Car"},
            {id: "5", icon: "paw", name: "Free Paw"},
            {id: "6", icon: "futbol", name: "Free Futbol"}
        ]
    },
    {
        id: "13",
        image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
        name: "Indianapolis Hotel",
        location: "43 Gust Locks Apt. 725",
        price: "$499",
        available: "Only 5 rooms leaft",
        rate: 5,
        rateStatus: "Very Good",
        rateCount: "85 of 100",
        numReviews: 399,
        services: [
            {id: "1", icon: "wifi", name: "Free Wifi"},
            {id: "2", icon: "coffee", name: "Free Coffee"},
            {id: "3", icon: "bath", name: "Free Bath"},
            {id: "4", icon: "car", name: "Free Car"},
            {id: "5", icon: "paw", name: "Free Paw"},
            {id: "6", icon: "futbol", name: "Free Futbol"}
        ]
    },
    {
        id: "14",
        image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
        name: "San Jose Hotel",
        location: "4873 Clotilde Isle",
        price: "$299",
        available: "Only 10 rooms leaft",
        rate: 5,
        rateStatus: "Very Good",
        rateCount: "85 of 100",
        numReviews: 400,
        services: [
            {id: "1", icon: "wifi", name: "Free Wifi"},
            {id: "2", icon: "coffee", name: "Free Coffee"},
            {id: "3", icon: "bath", name: "Free Bath"},
            {id: "4", icon: "car", name: "Free Car"},
            {id: "5", icon: "paw", name: "Free Paw"},
            {id: "6", icon: "futbol", name: "Free Futbol"}
        ]
    },
    {
        id: "15",
        image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
        name: "Twin Peaks Hotel",
        location: "4873 Clotilde Isle",
        price: "$299",
        available: "Only 10 rooms leaft",
        rate: 5,
        rateStatus: "Very Good",
        rateCount: "85 of 100",
        numReviews: 400,
        services: [
            {id: "1", icon: "wifi", name: "Free Wifi"},
            {id: "2", icon: "coffee", name: "Free Coffee"},
            {id: "3", icon: "bath", name: "Free Bath"},
            {id: "4", icon: "car", name: "Free Car"},
            {id: "5", icon: "paw", name: "Free Paw"},
            {id: "6", icon: "futbol", name: "Free Futbol"}
        ]
    },
    {
        id: "16",
        image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
        name: "Clarion Hotel",
        location: "4873 Clotilde Isle",
        price: "$299",
        available: "Only 10 rooms leaft",
        rate: 5,
        rateStatus: "Very Good",
        rateCount: "85 of 100",
        numReviews: 400,
        services: [
            {id: "1", icon: "wifi", name: "Free Wifi"},
            {id: "2", icon: "coffee", name: "Free Coffee"},
            {id: "3", icon: "bath", name: "Free Bath"},
            {id: "4", icon: "car", name: "Free Car"},
            {id: "5", icon: "paw", name: "Free Paw"},
            {id: "6", icon: "futbol", name: "Free Futbol"}
        ]
    }
];

const banner = 'https://images.unsplash.com/photo-1512106374988-c95f566d39ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80';

const Promotion = () => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        promotionBanner: {
            height: scaleWithPixel(100),
            width: "100%",
            marginTop: 10
        },
        line: {
            height: 1,
            backgroundColor: colors.textSecondaryColor,
            marginTop: 10,
            marginBottom: 20
        }
    });

    return (
        <View
            style={{
                padding: 20
            }}
        >
            <Text title3 semibold>
                Promotion
            </Text>
            <Text body2 grayColor>
                What’s the Worst That Could Happen
            </Text>
            <Image
                source={{uri: banner}}
                style={styles.promotionBanner}
            />
            <View style={styles.line}/>
            <FlatList
                columnWrapperStyle={{marginBottom: 20}}
                numColumns={2}
                data={HotelData}
                keyExtractor={(item, index) => item.id}
                renderItem={({item, index}) => (
                    <HotelItem
                        grid
                        image={item.image}
                        name={item.name}
                        location={item.location}
                        price={item.price}
                        available={item.available}
                        rate={item.rate}
                        rateStatus={item.rateStatus}
                        numReviews={item.numReviews}
                        services={item.services}
                        style={
                            index % 2 ? {marginLeft: 15} : {}
                        }
                        // onPress={() => navigation.navigate(appRoutes.HOTEL_DETAIL)}
                    />
                )}
            />
        </View>
    );
}

Promotion.propTypes = {};

export default Promotion;
