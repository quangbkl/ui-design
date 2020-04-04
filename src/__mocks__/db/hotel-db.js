import mock from './../mock';

const hotelAvailable = {
    hotelBooks: [
        {
            otherInfors: 'Thêm sau',
            roomAvailable: ['P101', 'P102', 'P103'],
            hotel: {
                id: 1,
                name: 'Happy Hotel',
                description: 'Description',
                location: '144 Xuan Thuy',
                price: '$150',
                ratePercent: 87,
                services: [
                    {key: 'wifi', name: 'Free Wifi'},
                    {key: 'coffee', name: 'Free Coffee'},
                    {key: 'bath', name: 'Free Bath'},
                    {key: 'car', name: 'Free Car'},
                    {key: 'paw', name: 'Free Paw'},
                    {key: 'futbol', name: 'Free Futbol'},
                ],
                reviews: ['review1', 'review2', 'review3'],
                images: [
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                ],
            },
        },
        {
            otherInfors: 'Thêm sau',
            roomAvailable: ['P101', 'P102', 'P103'],
            hotel: {
                id: 1,
                name: 'Happy Hotel',
                description: 'Description',
                location: '144 Xuan Thuy',
                price: '$150',
                ratePercent: 85,
                services: [
                    {key: 'wifi', name: 'Free Wifi'},
                    {key: 'coffee', name: 'Free Coffee'},
                    {key: 'bath', name: 'Free Bath'},
                    {key: 'car', name: 'Free Car'},
                    {key: 'paw', name: 'Free Paw'},
                    {key: 'futbol', name: 'Free Futbol'},
                ],
                reviews: ['review1', 'review2', 'review3'],
                images: [
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                ],
            },
        },
        {
            otherInfors: 'Thêm sau',
            roomAvailable: ['P101', 'P102', 'P103'],
            hotel: {
                id: 1,
                name: 'Happy Hotel',
                description: 'Description',
                location: '144 Xuan Thuy',
                price: '$150',
                ratePercent: 85,
                services: [
                    {key: 'wifi', name: 'Free Wifi'},
                    {key: 'coffee', name: 'Free Coffee'},
                    {key: 'bath', name: 'Free Bath'},
                    {key: 'car', name: 'Free Car'},
                    {key: 'paw', name: 'Free Paw'},
                    {key: 'futbol', name: 'Free Futbol'},
                ],
                reviews: ['review1', 'review2', 'review3'],
                images: [
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                ],
            },
        },
        {
            otherInfors: 'Thêm sau',
            roomAvailable: ['P101', 'P102', 'P103'],
            hotel: {
                id: 1,
                name: 'Happy Hotel',
                description: 'Description',
                location: '144 Xuan Thuy',
                price: '$150',
                ratePercent: 85,
                services: [
                    {key: 'wifi', name: 'Free Wifi'},
                    {key: 'coffee', name: 'Free Coffee'},
                    {key: 'bath', name: 'Free Bath'},
                    {key: 'car', name: 'Free Car'},
                    {key: 'paw', name: 'Free Paw'},
                    {key: 'futbol', name: 'Free Futbol'},
                ],
                reviews: ['review1', 'review2', 'review3'],
                images: [
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                ],
            },
        },
        {
            otherInfors: 'Thêm sau',
            roomAvailable: ['P101', 'P102', 'P103'],
            hotel: {
                id: 1,
                name: 'Happy Hotel',
                description: 'Description',
                location: '144 Xuan Thuy',
                price: '$150',
                ratePercent: 85,
                services: [
                    {key: 'wifi', name: 'Free Wifi'},
                    {key: 'coffee', name: 'Free Coffee'},
                    {key: 'bath', name: 'Free Bath'},
                    {key: 'car', name: 'Free Car'},
                    {key: 'paw', name: 'Free Paw'},
                    {key: 'futbol', name: 'Free Futbol'},
                ],
                reviews: ['review1', 'review2', 'review3'],
                images: [
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                ],
            },
        },
        {
            otherInfors: 'Thêm sau',
            roomAvailable: ['P101', 'P102', 'P103'],
            hotel: {
                id: 1,
                name: 'Happy Hotel',
                description: 'Description',
                location: '144 Xuan Thuy',
                price: '$150',
                ratePercent: 85,
                services: [
                    {key: 'wifi', name: 'Free Wifi'},
                    {key: 'coffee', name: 'Free Coffee'},
                    {key: 'bath', name: 'Free Bath'},
                    {key: 'car', name: 'Free Car'},
                    {key: 'paw', name: 'Free Paw'},
                    {key: 'futbol', name: 'Free Futbol'},
                ],
                reviews: ['review1', 'review2', 'review3'],
                images: [
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                ],
            },
        },
        {
            otherInfors: 'Thêm sau',
            roomAvailable: ['P101', 'P102', 'P103'],
            hotel: {
                id: 1,
                name: 'Happy Hotel',
                description: 'Description',
                location: '144 Xuan Thuy',
                price: '$150',
                ratePercent: 85,
                services: [
                    {key: 'wifi', name: 'Free Wifi'},
                    {key: 'coffee', name: 'Free Coffee'},
                    {key: 'bath', name: 'Free Bath'},
                    {key: 'car', name: 'Free Car'},
                    {key: 'paw', name: 'Free Paw'},
                    {key: 'futbol', name: 'Free Futbol'},
                ],
                reviews: ['review1', 'review2', 'review3'],
                images: [
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                ],
            },
        },
    ],
};

mock.onGet('/api/booking-hotel').reply(request => {
    const {page, limit} = request.params;
    const {hotelBooks} = hotelAvailable;
    return [200, {hotelBooks, page: 1, limit: 20, total: hotelBooks.length}];
});
