import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from 'native-base';
import Gallery from './Gallery';
import TourInformationItem from './TourInformationItem';

const Tour = ({item}) => {
    const renderListDayItem = ({item}) => {
        return (
            <TourInformationItem
                title={item.title}
                image={item.image}
                description={item.description}
            />

        );
    };
    return (
        <Container>
            <ScrollView>
                <View style={styles.container}>
                    <Gallery item={item}/>
                    <FlatList
                        data={item.tourInformation}
                        renderItem={renderListDayItem}
                        keyExtractor={item => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20
    }
});
export default Tour;
