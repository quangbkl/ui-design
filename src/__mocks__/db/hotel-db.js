import mock from './../mock';

export const hotelAvailable = {
    hotelBooks: [
        {
            id: 1,
            name: 'Khách sạn Church Legend Hà Nội',
            description: 'Description',
            location: 'Phường Hàng Trống, Hà Nội',
            geoLocation: {
                latitude: 21.028920,
                longitude: 105.847647,
            },
            roomTypes: [
                {
                    id: 1,
                    price: '445.000 VNĐ',
                    roomAvailable: 5,
                    type: 'STANDARD',
                    image: 'https://pix6.agoda.net/hotelImages/111/1115897/1115897_15122500310038726516.jpg?s=1024x768',
                },
                {
                    id: 2,
                    price: '600.000 VNĐ',
                    roomAvailable: 5,
                    type: 'DELUXE',
                    image: 'https://pix6.agoda.net/hotelImages/111/1115897/1115897_15122423550038726475.jpg?s=1024x768',
                }
            ],
            price: '445.000 VNĐ',
            roomAvailable: 10,
            ratePercent: 90,
            services: [
                {key: 'wifi', name: 'Wifi'},
                {key: 'coffee', name: 'Coffee'},
                {key: 'bath', name: 'Bath'},
                {key: 'car', name: 'Car'},
            ],
            featureImage: 'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10030815-1100x825-FIT_AND_TRIM-8f9c20f07d67804beb31596bc1974503.jpeg?tr=q-40,w-300,h-300&_src=imagekit',
        },
        {
            id: 2,
            name: 'Khách sạn Boutique Noble & Swan (Noble & Swan Boutique Hotel)',
            description: 'Description',
            location: 'Phố Cổ - Hà Nội',
            geoLocation: {
                latitude: 21.028920,
                longitude: 105.847647,
            },
            roomTypes: [
                {
                    id: 1,
                    price: '445.000 VNĐ',
                    roomAvailable: 5,
                    type: 'STANDARD',
                    image: 'https://pix6.agoda.net/hotelImages/111/1115897/1115897_15122500310038726516.jpg?s=1024x768',
                },
                {
                    id: 2,
                    price: '600.000 VNĐ',
                    roomAvailable: 5,
                    type: 'DELUXE',
                    image: 'https://pix6.agoda.net/hotelImages/111/1115897/1115897_15122423550038726475.jpg?s=1024x768',
                }
            ],
            price: '229.000 VNĐ',
            roomAvailable: 10,
            ratePercent: 92,
            services: [
                {key: 'wifi', name: 'Wifi'},
                {key: 'coffee', name: 'Coffee'},
                {key: 'bath', name: 'Bath'},
                {key: 'car', name: 'Car'},
                {key: 'paw', name: 'Paw'},
                {key: 'futbol', name: 'Futbol'},
            ],
            featureImage: 'https://pix5.agoda.net/hotelImages/111/1115897/1115897_15122423460038726431.jpg?s=450x450',
        },
        {
            id: 3,
            name: 'Khách Sạn và Spa S Central (S Central Hotel and Spa)',
            description: 'Description',
            location: 'Quận Hoàn Kiếm, Hà Nội',
            geoLocation: {
                latitude: 21.028920,
                longitude: 105.847647,
            },
            roomTypes: [
                {
                    id: 1,
                    price: '445.000 VNĐ',
                    roomAvailable: 5,
                    type: 'STANDARD',
                    image: 'https://pix6.agoda.net/hotelImages/111/1115897/1115897_15122500310038726516.jpg?s=1024x768',
                },
                {
                    id: 2,
                    price: '600.000 VNĐ',
                    roomAvailable: 5,
                    type: 'DELUXE',
                    image: 'https://pix6.agoda.net/hotelImages/111/1115897/1115897_15122423550038726475.jpg?s=1024x768',
                }
            ],
            price: '379.000 VNĐ',
            roomAvailable: 10,
            ratePercent: 91,
            services: [
                {key: 'wifi', name: 'Wifi'},
                {key: 'coffee', name: 'Coffee'},
                {key: 'bath', name: 'Bath'},
                {key: 'car', name: 'Car'},
            ],
            featureImage: 'https://pix5.agoda.net/hotelImages/5825677/-1/0229340e34b115559f912045826155b9.jpg?s=450x450',
        },
        {
            id: 4,
            name: 'Khách Sạn Eternity Hà Nội (Eternity Hanoi Hotel)',
            description: 'Description',
            location: 'Quận Hoàn Kiếm, Hà Nội',
            geoLocation: {
                latitude: 21.028920,
                longitude: 105.847647,
            },
            roomTypes: [
                {
                    id: 1,
                    price: '445.000 VNĐ',
                    roomAvailable: 5,
                    type: 'STANDARD',
                    image: 'https://pix6.agoda.net/hotelImages/111/1115897/1115897_15122500310038726516.jpg?s=1024x768',
                },
                {
                    id: 2,
                    price: '600.000 VNĐ',
                    roomAvailable: 5,
                    type: 'DELUXE',
                    image: 'https://pix6.agoda.net/hotelImages/111/1115897/1115897_15122423550038726475.jpg?s=1024x768',
                }
            ],
            price: '406.000 VNĐ',
            roomAvailable: 10,
            ratePercent: 90,
            services: [
                {key: 'wifi', name: 'Wifi'},
                {key: 'coffee', name: 'Coffee'},
                {key: 'bath', name: 'Bath'},
                {key: 'car', name: 'Car'},
            ],
            featureImage: 'https://pix6.agoda.net/hotelImages/216205/-1/a480b6c053c356dd71236ae2bc436216.jpg?s=450x450',
        },
        {
            id: 5,
            name: 'OYO 518 Khách Sạn Chariot (OYO 518 Chariot Hotel)',
            description: 'Description',
            location: 'Quận Hai Bà Trưng - Hà Nội',
            geoLocation: {
                latitude: 21.028920,
                longitude: 105.847647,
            },
            roomTypes: [
                {
                    id: 1,
                    price: '445.000 VNĐ',
                    roomAvailable: 5,
                    type: 'STANDARD',
                    image: 'https://pix6.agoda.net/hotelImages/111/1115897/1115897_15122500310038726516.jpg?s=1024x768',
                },
                {
                    id: 2,
                    price: '600.000 VNĐ',
                    roomAvailable: 5,
                    type: 'DELUXE',
                    image: 'https://pix6.agoda.net/hotelImages/111/1115897/1115897_15122423550038726475.jpg?s=1024x768',
                }
            ],
            price: '1.445.000 VNĐ',
            roomAvailable: 10,
            ratePercent: 88,
            services: [
                {key: 'wifi', name: 'Wifi'},
                {key: 'coffee', name: 'Coffee'},
                {key: 'bath', name: 'Bath'},
                {key: 'car', name: 'Car'},
            ],
            featureImage: 'https://pix5.agoda.net/hotelImages/10960/-1/6b9b2f1dce39e31909c0f3d150b50d4c.jpg?s=450x450',
        },
        {
            id: 6,
            name: 'Căn hộ dịch vụ Granda Cầu Giấy (Granda Cau Giay Apartment)',
            description: 'Description',
            location: 'Quận Cầu Giấy - Hà Nội',
            geoLocation: {
                latitude: 21.028920,
                longitude: 105.847647,
            },
            roomTypes: [
                {
                    id: 1,
                    price: '445.000 VNĐ',
                    roomAvailable: 5,
                    type: 'STANDARD',
                    image: 'https://pix6.agoda.net/hotelImages/111/1115897/1115897_15122500310038726516.jpg?s=1024x768',
                },
                {
                    id: 2,
                    price: '600.000 VNĐ',
                    roomAvailable: 5,
                    type: 'DELUXE',
                    image: 'https://pix6.agoda.net/hotelImages/111/1115897/1115897_15122423550038726475.jpg?s=1024x768',
                }
            ],
            price: '418.000 VNĐ',
            roomAvailable: 10,
            ratePercent: 90,
            services: [
                {key: 'wifi', name: 'Wifi'},
                {key: 'coffee', name: 'Coffee'},
                {key: 'bath', name: 'Bath'},
                {key: 'car', name: 'Car'},
            ],
            featureImage: 'https://pix5.agoda.net/hotelImages/2150727/-1/27a77fd294c13147f0f353b3d53b56ae.jpg?s=450x450',
        },
    ],
};

mock.onGet('/api/booking-hotel').reply(request => {
    const {page, limit} = request.params;
    const {hotelBooks} = hotelAvailable;
    return [200, {hotelBooks, page: 1, limit: 20, total: hotelBooks.length}];
});
