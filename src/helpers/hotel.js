export const getImageHotel = hotel => {
    if (hotel.images && hotel.images.length) {
        return hotel.images[0];
    }
    return '';
};

export const getRatePerFive = hotel => {
    const {ratePercent} = hotel;
    return ratePercent / 20;
};
