import mock from './../mock';

const bookingHistoryDB = {
    booking_histories: [
        {
            id: 1,
            hotel: 'Khách sạn Phương Đông',
            room: 'Standard Room',
            checkIn: '30/05/2020',
            checkOut: '01/06/2020',
            guest: 2,
            noOfRooms: 1,
            price: 600000
        },
        {
            id: 2,
            hotel: 'Khách sạn Phương Đông',
            room: 'Standard Room',
            checkIn: '30/05/2020',
            checkOut: '01/06/2020',
            guest: 2,
            noOfRooms: 1,
            price: 600000
        },
        {
            id: 3,
            hotel: 'Khách sạn Phương Đông',
            room: 'Standard Room',
            checkIn: '30/05/2020',
            checkOut: '01/06/2020',
            guest: 2,
            noOfRooms: 1,
            price: 600000
        },
        {
            id: 4,
            hotel: 'Khách sạn Phương Đông',
            room: 'Standard Room',
            checkIn: '30/05/2020',
            checkOut: '01/06/2020',
            guest: 2,
            noOfRooms: 1,
            price: 600000
        },
    ]
};

mock.onGet('/api/booking-histories').reply((request) => {
    const {page, limit} = request.params;
    const {bookingHistories} = bookingHistoryDB;
    return [200, {bookingHistories, page: 1, limit: 10, duration: bookingHistories.length}];
});
export default bookingHistoryDB;
