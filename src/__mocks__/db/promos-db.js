import mock from '../mock';

const promosDB = {
    promos: [
        {
            id: 1,
            image:
                'https://myteashack.com/wp-content/uploads/2019/09/Screenshot_2019-09-25-te-y-desayuno-Buscar-con-Google4.png',
            title: 'Attraction & Activities',
            country: 'Barcelona',
        },
        {
            id: 2,
            image:
                'https://myteashack.com/wp-content/uploads/2019/09/Screenshot_2019-09-25-te-y-desayuno-Buscar-con-Google4.png',
            title: 'Attraction & Activities',
            country: 'Spain',
        },
        {
            id: 3,
            image:
                'https://myteashack.com/wp-content/uploads/2019/09/Screenshot_2019-09-25-te-y-desayuno-Buscar-con-Google4.png',
            title: 'Attraction & Activities',
            country: 'Australia',
        },
        {
            id: 4,
            image:
                'https://myteashack.com/wp-content/uploads/2019/09/Screenshot_2019-09-25-te-y-desayuno-Buscar-con-Google4.png',
            title: 'Attraction & Activities',
            country: 'Japan',
        },
        {
            id: 5,
            image:
                'https://myteashack.com/wp-content/uploads/2019/09/Screenshot_2019-09-25-te-y-desayuno-Buscar-con-Google4.png',
            title: 'Attraction & Activities',
            country: 'Korean',
        },
        {
            id: 6,
            image:
                'https://myteashack.com/wp-content/uploads/2019/09/Screenshot_2019-09-25-te-y-desayuno-Buscar-con-Google4.png',
            title: 'Attraction & Activities',
            country: 'LonDon',
        },
    ],
};

mock.onGet('/api/promos').reply(request => {
    const {page, limit} = request.params;
    const {promos} = promosDB;
    return [200, {promos, page: 1, limit: 10, total: promos.length}];
});
