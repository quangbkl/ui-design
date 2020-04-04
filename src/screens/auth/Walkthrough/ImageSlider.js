import React from 'react';
import {StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import ImageSliderItem from './ImageSliderItem';
import {BaseColor} from 'config/color';

const slides = [
    {
        image: 'https://znews-photo.zadn.vn/w1024/Uploaded/OFH_oazszstq/2018_11_07/p90329147highres.jpg',
        text: 'Picking your travel destinations',
    },
    {
        image: 'https://dichvuxe.vn/wp-content/uploads/2019/01/bmw-s1000rr-2019-ra-mat-khong-con-mat-le-quen-thuoc-163.jpg',
        text: 'Picking your travel destinations',
    },
    {
        image: 'https://i1.wp.com/www.asphaltandrubber.com/wp-content/uploads/2019/03/2019-BMW-S1000RR-Estoril-press-launch-11-scaled.jpg',
        text: 'Picking your travel destinations',
    },
];
const _renderItem = ({item}) => <ImageSliderItem {...item}/>;

const ImageSlider = () => {
    return (
        <AppIntroSlider
            style={styles.main}
            slides={slides}
            renderItem={_renderItem}
            showDoneButton={false}
            showNextButton={false}
            activeDotStyle={{backgroundColor: BaseColor.primaryColor}}
            dotStyle={{backgroundColor: BaseColor.dividerColor}}
        />
    );
};

const styles = StyleSheet.create({
    main: {
        paddingTop: 30,
        // backgroundColor: '#9B9B9B',
    },
});

export default ImageSlider;
