import axios from 'axios';

export const getTours = (params) => {
    return axios.get('/api/tours', {params});
};
export const searchTours = (params) => {
	const newParams = {
		page: 1,
		pageSize: 100,
		isActive: 1,
	}
	if (params.location) {
		newParams.cityOrProvince = params.location.code;
	}
	console.log('param tour: ', newParams)
	return axios.get('https://booking-ui-api.herokuapp.com/tours', {params: newParams});
};

export const getTour = (id) => {
	return axios.get(`https://booking-ui-api.herokuapp.com/tours/${id}`).then(res => res.data);
};

export default {
	searchTours,
	getTour
};
