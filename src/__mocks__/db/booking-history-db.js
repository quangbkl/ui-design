import mock from './../mock';

const bookingHistoryDB = {
    booking_histories: [
        {
        	id: 1,
            name: 'Proxeloca Hotel',
            checkIn: '04 Jun 08',
            checkOut: '07 Jun 08',
            duration: '2 Days 1 Night',
            price: '$399,99'
        },
        {
	        id: 2,
            name: 'Proxeloca Hotel',
            checkIn: '04 Jun 08',
            checkOut: '07 Jun 08',
            duration: '2 Days 1 Night',
            price: '$399,99'
        },
        {
	        id: 3,
            name: 'Proxeloca Hotel',
            checkIn: '04 Jun 08',
            checkOut: '07 Jun 08',
            duration: '2 Days 1 Night',
            price: '$399,99'
        },
        {
	        id: 4,
            name: 'Proxeloca Hotel',
            checkIn: '04 Jun 08',
            checkOut: '07 Jun 08',
            duration: '2 Days 1 Night',
            price: '$399,99'
        }
    ]
};

mock.onGet('/api/booking-histories').reply((request) => {
    const {page, limit} = request.params;
    const {bookingHistories} = bookingHistoryDB;
    return [200, {bookingHistories, page: 1, limit: 10, duration: bookingHistories.length}];
});
export default bookingHistoryDB;
