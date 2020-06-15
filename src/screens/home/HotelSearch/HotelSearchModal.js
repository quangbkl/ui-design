import React from 'react';
import {View} from 'react-native';
import SearchModalGuest from './SearchModalGuest';
import SearchModalDuration from './SearchModalDuration';

const HotelSearchModal = (props) => {
    const {
        adult,
        children,
        night,
        modalVisible,
        closeModal,
        handlePlusAdult,
        handleMinusAdult,
        handlePlusChildren,
        handleMinusChildren,
        handlePlusNight,
        handleMinusNight
    } = props;

    return (
        <View>
            <SearchModalGuest
                adult={adult}
                children={children}
                modalVisible={modalVisible}
                closeModal={closeModal}
                handlePlusAdult={handlePlusAdult}
                handleMinusAdult={handleMinusAdult}
                handlePlusChildren={handlePlusChildren}
                handleMinusChildren={handleMinusChildren}
            />
            <SearchModalDuration
                night={night}
                modalVisible={modalVisible}
                closeModal={closeModal}
                handlePlusNight={handlePlusNight}
                handleMinusNight={handleMinusNight}
            />
        </View>
    );
};

HotelSearchModal.propTypes = {};

export default HotelSearchModal;
