import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import {Container} from 'native-base';
import {CustomIcon, ListItem, Text} from 'components/index';
import {BaseColor} from 'config/color';

const Gallery = ({item}) => {
    const {images} = item;
    return (
        <View style={styles.gallery}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: '700'}}>Gallery</Text>
                <Text style={{fontWeight: '400', opacity: 0.7, fontSize: 15}}>Show more</Text>
            </View>
            <View style={styles.galleryContent}>
                <View style={styles.galleryLeft}>
                    <ImageBackground
                        source={{uri: images[0]}}
                        style={{width: '100%', height: '100%'}}
                        imageStyle={{borderRadius: 10}}
                    >
                        <Text style={styles.textInclude}>Dallas</Text>
                    </ImageBackground>
                </View>
                <View style={styles.galleryRight}>
                    <View style={styles.galleryRightTop}>
                        <ImageBackground
                            source={{uri: images[1]}}
                            style={{width: '100%', height: '100%'}}
                            imageStyle={{borderRadius: 10}}
                        >
                            <Text style={styles.textInclude}>Warsaw</Text>
                        </ImageBackground>
                    </View>

                    <View style={styles.galleryRightBottom}>
                        <View style={styles.galleryRightBottomLeft}>
                            <ImageBackground
                                source={{uri: images[0]}}
                                style={{width: '100%', height: '100%'}}
                                imageStyle={{borderRadius: 10}}
                            >
                                <Text style={styles.textInclude}>Yokohama</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.galleryRightBottomRight}>
                            <ImageBackground
                                source={{uri: images[1]}}
                                style={{width: '100%', height: '100%'}}
                                imageStyle={{borderRadius: 10}}
                            >
                                <Text style={styles.textInclude}>10+</Text>
                            </ImageBackground>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gallery: {
        marginTop: 20
    },
    galleryContent: {
        flexDirection: 'row',
        flex: 1,
        height: 160,
        marginTop: 10
    },
    galleryLeft: {
        flex: 40,
    },
    galleryRight: {
        flex: 60,
        marginLeft: 10
    },
    galleryRightTop: {
        height: '50%',
        position: 'relative',
    },
    galleryRightBottom: {
        height: '50%',
        flexDirection: 'row',
        flex: 2,
        marginTop: 10,
        position: 'relative',
    },
    galleryRightBottomLeft: {
        flex: 60,
        position: 'relative',
    },
    galleryRightBottomRight: {
        flex: 40,
        marginLeft: 10,
        position: 'relative',
    },
    textInclude: {
        position: 'absolute',
        color: BaseColor.whiteColor,
        fontWeight: '600',
        left: 10,
        bottom: 10
    }
});
export default Gallery;
