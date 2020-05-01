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

export const getRatePerFive = tour => {
    const {ratePercent} = tour;
    return ratePercent / 20;
};
