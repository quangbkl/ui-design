export const getImageTour = tour => {
    if (tour.image) {
        return tour.image;
    }
    return '';
};

export const getPricePerParticipant = tour => {
    if (tour.generalInformation.pricePerParticipant) {
        return tour.generalInformation.pricePerParticipant;
    }
    return '';
};
export const getDuration = tour => {
    if (tour.generalInformation.duration) {
        return tour.generalInformation.duration;
    }
    return '';
};

export const getRatePerFive = tour => {
    const {ratePercent} = tour;
    return ratePercent / 20;
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

