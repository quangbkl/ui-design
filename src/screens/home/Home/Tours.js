import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Card} from '../../../components';

const TourItem = () => {
    const image = 'https://znews-photo.zadn.vn/w1024/Uploaded/lce_cjvcc/2019_07_01/BMWS1000RR_2.jpeg';

    return (
        <Card image={image}>
            <Text>A</Text>
        </Card>
    );
};

const Tours = () => {
    return (
        <View>
            <ScrollView horizontal>
                <TourItem/>
                <TourItem/>
                <TourItem/>
                <TourItem/>
                <TourItem/>
                <TourItem/>
                <TourItem/>
            </ScrollView>
        </View>
    );
};

export default Tours;
