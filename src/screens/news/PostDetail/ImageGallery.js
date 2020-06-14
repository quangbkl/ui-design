import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from '../../../components-v2/Card/Card';
import Text from '../../../components/Text/Text';
import scaleWithPixel from '../../../helpers/scaleWithPixel';

const ImageGallery = () => {
    const images = [
        'https://trello-attachments.s3.amazonaws.com/5d70db704adc9255de4c8edb/5ee64471abdc5c3a24cac01a/5c0f148dd8444d5f8c4e839f9c75db18/trip-7.jpg',
        'https://trello-attachments.s3.amazonaws.com/5d70db704adc9255de4c8edb/5ee64471abdc5c3a24cac01a/3d321b594c2000bf4f4ff7435e1b4915/trip-3.jpg',
        'https://trello-attachments.s3.amazonaws.com/5d70db704adc9255de4c8edb/5ee64471abdc5c3a24cac01a/014f9e040c07d96caa7b7899ee9f5acf/trip-4.jpg',
        'https://trello-attachments.s3.amazonaws.com/5d70db704adc9255de4c8edb/5ee64471abdc5c3a24cac01a/d4c28ebb65cf8eb6abfe55257b3f5b24/trip-6.jpg'
    ];

    const styles = StyleSheet.create({
        contentImageFollowing: {
            flexDirection: 'row',
            height: scaleWithPixel(160),
            marginTop: 10
        }
    });

    return (
        <View style={styles.contentImageFollowing}>
            <View style={{flex: 4, marginRight: 10}}>
                <Card
                    style={{borderRadius: 8}}
                    image={images[0]}
                >
                    <Text headline semibold whiteColor>
                        Dallas
                    </Text>
                </Card>
            </View>
            <View style={{flex: 6}}>
                <View style={{flex: 1}}>
                    <Card
                        style={{borderRadius: 8}}
                        image={images[1]}
                    >
                        <Text headline semibold whiteColor>
                            Warsaw
                        </Text>
                    </Card>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginTop: 10
                    }}
                >
                    <View
                        style={{flex: 6, marginRight: 10}}
                    >
                        <Card
                            style={{
                                borderRadius: 8
                            }}
                            image={images[2]}
                        >
                            <Text
                                headline
                                semibold
                                whiteColor
                            >
                                Yokohama
                            </Text>
                        </Card>
                    </View>
                    <View style={{flex: 4}}>
                        <Card
                            style={{borderRadius: 8}}
                            image={images[3]}
                        >
                            <Text
                                headline
                                semibold
                                whiteColor
                            >
                                10+
                            </Text>
                        </Card>
                    </View>
                </View>
            </View>
        </View>
    );
};

ImageGallery.propTypes = {};

export default ImageGallery;
