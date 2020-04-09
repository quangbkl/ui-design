import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Touchable from '../Touchable/Touchable';

const EventCard = props => {
    const {item} = props;

    return (
        <Touchable style={styles.container} onPress={() => onSelect(item.key)}>
            <Image
                source={{
                    uri: item.src,
                }}
                style={styles.image}
            />
            <View style={styles.bodyContent}>
                <View style={[styles.left]}>
                    <Text style={styles.month}>{item.month}</Text>
                    <Text style={styles.day}>{item.day}</Text>
                </View>
                <View style={[styles.right]}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subTitle}>{item.openTime}</Text>
                    <Text style={styles.subTitle}>{item.location}</Text>
                </View>
            </View>
        </Touchable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 200,
        marginRight: 15,
        flex: 1,
        flexDirection: 'column',
        textAlign: 'left',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#bdbdbd',
        backgroundColor: '#f2f2f2',
    },
    image: {
        width: 198,
        height: 120,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginBottom: 16,
    },
    bodyContent: {
        fontFamily: 'Roboto',
        flex: 1,
        flexDirection: 'row',
    },
    left: {
        textAlign: 'center',
        flex: 1,
        flexDirection: 'column',
    },
    right: {
        flex: 3,
        flexDirection: 'column',
    },
    title: {
        fontSize: 14,
        color: '#212121',
        marginBottom: 4,
    },
    subTitle: {
        color: '#9b9b9b',
        fontSize: 11,
        marginBottom: 4,
    },
    month: {
        color: '#e5634d',
        fontSize: 15,
        textAlign: 'center',
    },
    day: {
        color: '#9b9b9b',
        fontSize: 17,
        textAlign: 'center',
    },
});

export default EventCard;
