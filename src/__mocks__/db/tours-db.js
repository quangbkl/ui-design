import mock from "../mock";

const tourDB = {
	tours: [
		{
			id: 1,
			image: 'https://cgprpublicrelations.com/wp-content/uploads/2019/08/priscilla-du-preez-7etIYqqw2jU-unsplash-250x375.jpg',
			title: 'Tour in London'
		},
		{
			id: 2,
			image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
			title: 'Tour in Paris'
		},
		{
			id: 3,
			image: 'https://saigonstartravel.com/wp-content/uploads/2018/11/tour-phu-quoc-2-ngay-1-dem.jpg',
			title: 'Tour in PhuQuoc'
		},
		{
			id: 4,
			image: 'data:image/jpeg;base64,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',
			title: 'Tour in TamDao'
		}
	]
}

mock.onGet('/api/tours').reply((request) => {
	const {page, limit} = request.params;
	const {tours} = tourDB;
	return [200, {tours, page: 1, limit: 10, total: tours.length}];
});
export default tourDB;
