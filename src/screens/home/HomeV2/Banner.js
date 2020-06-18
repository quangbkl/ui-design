import React from 'react';
import {Image, StyleSheet} from "react-native";

const Banner = () => {
    const image = 'https://trello-attachments.s3.amazonaws.com/5ee64471abdc5c3a24cac01a/600x403/8bd0c647595a029753bbb7a56cf37fd6/istock-1208828267.jpg';

    const styles = StyleSheet.create({
        imageBackground: {
            height: 140,
            width: "100%"
        },
    });

    return (
        <Image
            source={{uri: image}}
            style={[
                styles.imageBackground
            ]}
        />
    );
}

Banner.propTypes = {};

export default Banner;
