import React from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native';
import {BaseColor} from '../../../config/color';
import {HotelItem} from 'components';

// TODO: Use HotelItem (view = 'grid') component
const Promotion = () => {
    return (
        <View style={styles.Promotion}>
            <Text style={styles.Header}>Promotion</Text>
            <Text style={styles.title}>What's the Worst That Could Happen</Text>
            <View style={styles.ImgParent}>
                <Image style={styles.PromotionImage}
                source={{uri: 'https://marketingai.admicro.vn/wp-content/uploads/2018/05/promotion.jpg'}}
                />
            </View>
            <View style={styles.carouselContainer}>
                <Text>Hotel item</Text>
                {/* <FlatList
                    horizontal
                    renderItem={(props) => <HotelItem {...props} />}
                    data={data}
                    keyExtractor={item => item.key}
                /> */}
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    Header: {
        fontFamily: 'Roboto',
        marginTop: 15,
		fontSize: 20,
		color: BaseColor.textPrimaryColor,
        // marginBottom: 10,
    },
    title: {
        fontSize: 13,
        color: BaseColor.grayColor,
        marginBottom: 15,
    },
    ImgParent: {
        borderBottomWidth: 2,
        borderBottomColor: BaseColor.dividerColor,
        paddingBottom: 10,
        marginBottom: 25,
    },
    PromotionImage: {
        height: 100,
        resizeMode: 'stretch',
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
        borderColor: BaseColor.dividerColor,
    },
});

export default Promotion;
