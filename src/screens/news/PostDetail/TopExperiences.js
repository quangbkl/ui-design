import React from 'react';
import {View} from 'react-native';
import Text from '../../../components/Text/Text';
import ImageGallery from './ImageGallery';

function TopExperiences() {
    return (
        <>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20
                }}
            >
                <Text headline semibold>
                    Top experiences
                </Text>
                <Text footnote grayColor>
                    Show more
                </Text>
            </View>
            <ImageGallery/>
        </>
    );
}

TopExperiences.propTypes = {};

export default TopExperiences;
