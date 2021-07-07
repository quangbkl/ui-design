import tourDB from "../__mocks__/db/tours-db";

export const getImageTour = tour => {
    if (tour.images[0]) {
        return tour.images[0];
    }
    return '';
};

export const getPricePerParticipant = tour => {
    if (tour.pricePerParticipant) {
        return tour.pricePerParticipant;
    }
    return '';
};
export const getDuration = tour => {
    if (tour.duration) {
        return tour.duration;
    }
    return '';
};

export const getRatePerFive = tour => {
    return 4.5;
};


export const formatPrice = tour => {
	let price = tour.pricePerParticipant;
	console.log(price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}));
	return price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) + '';
};
export const getTransportation = tour => {
	return tour.transportations.join(', ');
};

export const getRateReviewPerFive = scores => {
    const {fiveStars, fourStars, threeStars, twoStars, oneStars, total} = scores;
    return Number((fiveStars * 5 + fourStars * 4 + threeStars * 3 + twoStars * 2 + oneStars) / (total)).toFixed(1);
};

export const getRateFiveStars = scores => {
    const {fiveStars, total} = scores;
    return Number((fiveStars) / (total)).toFixed(1);
};
export const getRateFourStars = scores => {
    const {fourStars, total} = scores;
    return Number((fourStars) / (total)).toFixed(1);
};
export const getRateThreeStars = scores => {
    const {threeStars, total} = scores;
    return Number((threeStars) / (total)).toFixed(1);
};
export const getRateTwoStars = scores => {
    const {twoStars, total} = scores;
    return Number((twoStars) / (total)).toFixed(1);
};
export const getRateOneStars = scores => {
    const {oneStars, total} = scores;
    return Number((oneStars) / (total)).toFixed(1);
};

