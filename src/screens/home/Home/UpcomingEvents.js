import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {EventCard} from 'components';
// TODO: Use EventCard component

const styles = StyleSheet.create({
    UpcomingEvents: {
        backgroundColor: '#f2f2f2',
    },
    Header: {
        fontFamily: 'Roboto',
        fontSize: 17,
        color: '#212121',
        marginBottom: 10,
    },
    title: {
        fontSize: 13,
        color: '#9b9b9b',
        marginBottom: 15,
    },
    carouselContainer: {
        height: 200,
    },
    carousel: {
        flex: 1,
    },
    Rounded: {
        width: 200,
        height: 200,
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#bdbdbd',
        backgroundColor: '#f2f2f2',
    },
});

const data = [
    {
        key: '1',
        src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyIOUoW6tSBT_yD3lUccKMvllIL_hzA3WPiiZcaGrsCHg8zmVu&usqp=CAU',
        title: 'BBC Music Introducting',
        openTime: 'Thu, Oct 31 9:00am',
        month: 'OCT',
        day: '31',
        location: 'Tobacco Dock, London',
    },
    {
        key: '2',
        src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyIOUoW6tSBT_yD3lUccKMvllIL_hzA3WPiiZcaGrsCHg8zmVu&usqp=CAU',
        title: 'BBC Music Introducting',
        openTime: 'Thu, Oct 31 9:00am',
        month: 'OCT',
        day: '31',
        location: 'Tobacco Dock, London',
    },
];

const UpcomingEvents = () => {
    return (
        <View style={styles.UpcomingEvents}>
            <Text style={styles.Header}>Upcoming Events</Text>
            <Text style={styles.title}>What's the Worst That Could Happen</Text>
            <View style={styles.carouselContainer}>
                <FlatList
                    horizontal
                    renderItem={props => <EventCard {...props} />}
                    data={data}
                    keyExtractor={item => item.key}
                />
            </View>
        </View>
    );
};

export default UpcomingEvents;
