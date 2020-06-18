import React from 'react';
import {View, StyleSheet, FlatList} from "react-native";
import Text from "../../../components/Text/Text";
import useApp from "../../../hooks/app/useApp";
import {useNavigation} from "@react-navigation/native";
import scaleWithPixel from "../../../helpers/scaleWithPixel";
import Card from "../../../components-v2/Card/Card";

const TourData = [
    {
        id: "1",
        image: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80',
        name: "Tour in London",
        location: "Euro",
        travelTime: "8 Days 7 Nights",
        startTime: "July 19th 2019",
        price: "$1500,99",
        rate: 4,
        rateCount: "85 of 100",
        numReviews: 100,
        author: {
            image: 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/150x150/edb78704b0c18ce6a06669ba40367d58/biker-helmet.png',
            point: "9.5",
            name: "by Steve Garrett"
        },
        services: [
            {icon: "history", name: "8 Days 1 Night"},
            {icon: "medkit", name: "Insurrance Included"},
            {icon: "user", name: "10 slots available"},
            {icon: "ship", name: "Moving by Boat"}
        ]
    },
    {
        id: "2",
        image: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80',
        name: "Tour in Paris",
        location: "Euro",
        travelTime: "8 Days 7 Nights",
        startTime: "July 19th 2019",
        price: "$1500,99",
        rate: 4,
        rateCount: "85 of 100",
        numReviews: 100,
        author: {
            image: 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/150x150/edb78704b0c18ce6a06669ba40367d58/biker-helmet.png',
            point: "9.5",
            name: "by Steve Garrett"
        },
        services: [
            {icon: "history", name: "8 Days 1 Night"},
            {icon: "medkit", name: "Insurrance Included"},
            {icon: "user", name: "10 slots available"},
            {icon: "ship", name: "Moving by Boat"}
        ]
    },
    {
        id: "3",
        image: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80',
        name: "Tour in Italy",
        location: "Euro",
        travelTime: "8 Days 7 Nights",
        startTime: "July 19th 2019",
        price: "$1500,99",
        rate: 4,
        rateCount: "85 of 100",
        numReviews: 100,
        author: {
            image: 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/150x150/edb78704b0c18ce6a06669ba40367d58/biker-helmet.png',
            point: "9.5",
            name: "by Steve Garrett"
        },
        services: [
            {icon: "history", name: "8 Days 1 Night"},
            {icon: "medkit", name: "Insurrance Included"},
            {icon: "user", name: "10 slots available"},
            {icon: "ship", name: "Moving by Boat"}
        ]
    },
    {
        id: "4",
        image: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80',
        name: "Tour in Portugal",
        location: "Euro",
        travelTime: "8 Days 7 Nights",
        startTime: "July 19th 2019",
        price: "$1500,99",
        rate: 4,
        rateCount: "85 of 100",
        numReviews: 100,
        author: {
            image: 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/150x150/edb78704b0c18ce6a06669ba40367d58/biker-helmet.png',
            point: "9.5",
            name: "by Steve Garrett"
        },
        services: [
            {icon: "history", name: "8 Days 1 Night"},
            {icon: "medkit", name: "Insurrance Included"},
            {icon: "user", name: "10 slots available"},
            {icon: "ship", name: "Moving by Boat"}
        ]
    },
    {
        id: "5",
        image: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80',
        name: "Tour in Netherlands",
        location: "Euro",
        travelTime: "8 Days 7 Nights",
        startTime: "July 19th 2019",
        price: "$1500,99",
        rate: 4,
        rateCount: "85 of 100",
        numReviews: 100,
        author: {
            image: 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/150x150/edb78704b0c18ce6a06669ba40367d58/biker-helmet.png',
            point: "9.5",
            name: "by Steve Garrett"
        },
        services: [
            {icon: "history", name: "8 Days 1 Night"},
            {icon: "medkit", name: "Insurrance Included"},
            {icon: "user", name: "10 slots available"},
            {icon: "ship", name: "Moving by Boat"}
        ]
    },
    {
        id: "6",
        image: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80',
        name: "Tour in Belgium",
        location: "Euro",
        travelTime: "8 Days 7 Nights",
        startTime: "July 19th 2019",
        price: "$1500,99",
        rate: 4,
        rateCount: "85 of 100",
        numReviews: 100,
        author: {
            image: 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/150x150/edb78704b0c18ce6a06669ba40367d58/biker-helmet.png',
            point: "9.5",
            name: "by Steve Garrett"
        },
        services: [
            {icon: "history", name: "8 Days 1 Night"},
            {icon: "medkit", name: "Insurrance Included"},
            {icon: "user", name: "10 slots available"},
            {icon: "ship", name: "Moving by Boat"}
        ]
    },
    {
        id: "7",
        image: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80',
        name: "Tour in Finland",
        location: "Euro",
        travelTime: "8 Days 7 Nights",
        startTime: "July 19th 2019",
        price: "$1500,99",
        rate: 4,
        rateCount: "85 of 100",
        numReviews: 100,
        author: {
            image: 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/150x150/edb78704b0c18ce6a06669ba40367d58/biker-helmet.png',
            point: "9.5",
            name: "by Steve Garrett"
        },
        services: [
            {icon: "history", name: "8 Days 1 Night"},
            {icon: "medkit", name: "Insurrance Included"},
            {icon: "user", name: "10 slots available"},
            {icon: "ship", name: "Moving by Boat"}
        ]
    },
    {
        id: "8",
        image: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80',
        name: "Tour in Luxembourg",
        location: "Euro",
        travelTime: "8 Days 7 Nights",
        startTime: "July 19th 2019",
        price: "$1500,99",
        rate: 4,
        rateCount: "85 of 100",
        numReviews: 100,
        author: {
            image: 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/150x150/edb78704b0c18ce6a06669ba40367d58/biker-helmet.png',
            point: "9.5",
            name: "by Steve Garrett"
        },
        services: [
            {icon: "history", name: "8 Days 1 Night"},
            {icon: "medkit", name: "Insurrance Included"},
            {icon: "user", name: "10 slots available"},
            {icon: "ship", name: "Moving by Boat"}
        ]
    },
    {
        id: "9",
        image: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80',
        name: "Tour in Slovakia",
        location: "Euro",
        travelTime: "8 Days 7 Nights",
        startTime: "July 19th 2019",
        price: "$1500,99",
        rate: 4,
        rateCount: "85 of 100",
        numReviews: 100,
        author: {
            image: 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/150x150/edb78704b0c18ce6a06669ba40367d58/biker-helmet.png',
            point: "9.5",
            name: "by Steve Garrett"
        },
        services: [
            {icon: "history", name: "8 Days 1 Night"},
            {icon: "medkit", name: "Insurrance Included"},
            {icon: "user", name: "10 slots available"},
            {icon: "ship", name: "Moving by Boat"}
        ]
    },
    {
        id: "10",
        image: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80',
        name: "Tour in Latvia",
        location: "Euro",
        travelTime: "8 Days 7 Nights",
        startTime: "July 19th 2019",
        price: "$1500,99",
        rate: 4,
        rateCount: "85 of 100",
        numReviews: 100,
        author: {
            image: 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/150x150/edb78704b0c18ce6a06669ba40367d58/biker-helmet.png',
            point: "9.5",
            name: "by Steve Garrett"
        },
        services: [
            {icon: "history", name: "8 Days 1 Night"},
            {icon: "medkit", name: "Insurrance Included"},
            {icon: "user", name: "10 slots available"},
            {icon: "ship", name: "Moving by Boat"}
        ]
    },
    {
        id: "11",
        image: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80',
        name: "Tour in Kosovo",
        location: "Euro",
        travelTime: "8 Days 7 Nights",
        startTime: "July 19th 2019",
        price: "$1500,99",
        rate: 4,
        rateCount: "85 of 100",
        numReviews: 100,
        author: {
            image: 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/150x150/edb78704b0c18ce6a06669ba40367d58/biker-helmet.png',
            point: "9.5",
            name: "by Steve Garrett"
        },
        services: [
            {icon: "history", name: "8 Days 1 Night"},
            {icon: "medkit", name: "Insurrance Included"},
            {icon: "user", name: "10 slots available"},
            {icon: "ship", name: "Moving by Boat"}
        ]
    },
    {
        id: "12",
        image: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80',
        name: "Tour in Vatican City",
        location: "Euro",
        travelTime: "8 Days 7 Nights",
        startTime: "July 19th 2019",
        price: "$1500,99",
        rate: 4,
        rateCount: "85 of 100",
        numReviews: 100,
        author: {
            image: 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/150x150/edb78704b0c18ce6a06669ba40367d58/biker-helmet.png',
            point: "9.5",
            name: "by Steve Garrett"
        },
        services: [
            {icon: "history", name: "8 Days 1 Night"},
            {icon: "medkit", name: "Insurrance Included"},
            {icon: "user", name: "10 slots available"},
            {icon: "ship", name: "Moving by Boat"}
        ]
    },
    {
        id: "13",
        image: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=754&q=80',
        name: "Tour in French Guiana",
        location: "Euro",
        travelTime: "8 Days 7 Nights",
        startTime: "July 19th 2019",
        price: "$1500,99",
        rate: 4,
        rateCount: "85 of 100",
        numReviews: 100,
        author: {
            image: 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/150x150/edb78704b0c18ce6a06669ba40367d58/biker-helmet.png',
            point: "9.5",
            name: "by Steve Garrett"
        },
        services: [
            {icon: "history", name: "8 Days 1 Night"},
            {icon: "medkit", name: "Insurrance Included"},
            {icon: "user", name: "10 slots available"},
            {icon: "ship", name: "Moving by Boat"}
        ]
    }
];

const Tours = () => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        contentHiking: {
            marginTop: 20,
            marginLeft: 20,
            marginBottom: 10
        },
        tourItem: {
            borderRadius: 8,
            width: scaleWithPixel(135),
            height: scaleWithPixel(160)
        }
    });

    return (
        <View>
            <View style={styles.contentHiking}>
                <Text title3 semibold>
                    Tours
                </Text>
                <Text body2 grayColor>
                    Let find out what most interesting things
                </Text>
            </View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={TourData}
                keyExtractor={(item, index) => item.id}
                renderItem={({item, index}) => (
                    <Card
                        style={[
                            styles.tourItem,
                            index === 0
                                ? {marginHorizontal: 20}
                                : {marginRight: 20}
                        ]}
                        image={item.image}
                        onPress={() =>
                            navigation.navigate("TourDetail")
                        }
                    >
                        <Text headline whiteColor semibold>
                            {item.name}
                        </Text>
                    </Card>
                )}
            />
        </View>
    );
}

Tours.propTypes = {};

export default Tours;
