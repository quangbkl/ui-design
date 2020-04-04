import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import {getImageHotel, getRatePerFive} from '../../helpers/hotel';
import {BaseColor} from '../../config/color';
import CustomIcon from '../Icon/CustomIcon';

const widthItem = Dimensions.get('window').width / 2 - 30;

// Follow HotelItemBlock
const HotelItemGrid = ({item}) => {
  const {hotel} = item;
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.largeImage}
        source={{
          uri: getImageHotel(hotel),
        }}
      />
      <View style={styles.locationBlock}>
        <CustomIcon type="map-marker-alt" size={13} />
        <Text style={styles.locationText}>{hotel.location}</Text>
      </View>
      <Text style={styles.name}>{hotel.name}</Text>
      <View style={styles.reviewBlock}>
        <Rating
          style={styles.rateStar}
          startingValue={getRatePerFive(hotel)}
          imageSize={14}
          readonly
        />
        <Text style={styles.review}>{`${hotel.reviews.length} reviews`}</Text>
      </View>
      <Text style={styles.price}>{hotel.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthItem,
    backgroundColor: BaseColor.fieldColor,
  },
  largeImage: {
    width: '100%',
    height: 120,
    borderRadius: 6,
  },
  locationBlock: {
    flexDirection: 'row',
    marginTop: 5,
  },
  locationText: {
    marginLeft: 6,
    color: BaseColor.grayColor,
    fontSize: 13,
    lineHeight: 15,
  },
  name: {
    marginTop: 5,
    fontSize: 17,
  },
  reviewBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  rateStar: {
    textAlign: 'left',
  },
  review: {
    fontSize: 13,
    lineHeight: 15,
    color: BaseColor.grayColor,
  },
  price: {
    marginTop: 5,
    color: BaseColor.primaryColor,
    fontSize: 20,
  },
});

export default HotelItemGrid;
