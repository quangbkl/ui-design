import mock from './../mock';

const locationSearch = {
    location: [
        {
            name: 'Hà Nội',
            type: 'city',
            noOfHotels: Math.floor(1000 * Math.random())
        },
        {
            name: 'Khách sạn Phương Đông sdfsdfdsfsd ấdf',
            type: 'hotel',
            noOfHotels: Math.floor(1000 * Math.random())
        },
        {
            name: 'Hạ Long',
            type: 'city',
            noOfHotels: Math.floor(1000 * Math.random())
        }
    ]
};

mock.onGet('/api/location/search').reply((request) => {
    const {q} = request.params;
    const {location} = locationSearch;
    return [200, {location}];
});
export default locationSearch;
