import mock from './../mock';

const userDB = {
    booking_histories: [
        {
            name: 'Proxeloca Hotel',
            checkIn: '04 Jun 08',
            checkOut: '07 Jun 08',
            total: '2 Days 1 Night',
            price: '$399,99',
        },
        {
            name: 'Proxeloca Hotel',
            checkIn: '04 Jun 08',
            checkOut: '07 Jun 08',
            total: '2 Days 1 Night',
            price: '$399,99',
        },
        {
            name: 'Proxeloca Hotel',
            checkIn: '04 Jun 08',
            checkOut: '07 Jun 08',
            total: '2 Days 1 Night',
            price: '$399,99',
        },
        {
            name: 'Proxeloca Hotel',
            checkIn: '04 Jun 08',
            checkOut: '07 Jun 08',
            total: '2 Days 1 Night',
            price: '$399,99',
        },
    ],
};

mock.onGet('/api/booking-histories').reply(request => {
    const {page, limit} = request.params;
    const {booking_histories} = userDB;
    return [
        200,
        {
            booking_histories,
            page: 1,
            limit: 10,
            total: booking_histories.length,
        },
    ];
});
