import mock from './../mock';

const userDB = {
    posts: [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            title: 'Overseas Adventure Travel In Nepal',
            description: 'Lorem ipsum dolor sit amet, velit tamquam eum et, pro agam sanctus minimum ut. Usu prompta invidunt at, noluisse ponderum nec ne. ',
            author: {
                id: 1,
                image: 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80',
                name: 'Steve Garrett',
            },
            view: 112545,
            publishDate: "2020-03-10 03:08:10",
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            title: 'Overseas Adventure Travel In Nepal',
            description: 'Lorem ipsum dolor sit amet, velit tamquam eum et, pro agam sanctus minimum ut. Usu prompta invidunt at, noluisse ponderum nec ne. ',
            author: {
                id: 1,
                image: 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80',
                name: 'Steve Garrett',
            },
            view: 100000,
            publishDate: "2020-03-10 03:08:10",
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            title: 'Overseas Adventure Travel In Nepal',
            description: 'Lorem ipsum dolor sit amet, velit tamquam eum et, pro agam sanctus minimum ut. Usu prompta invidunt at, noluisse ponderum nec ne. ',
            author: {
                id: 1,
                image: 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80',
                name: 'Steve Garrett',
            },
            view: 100000,
            publishDate: "2020-03-10 03:08:10",
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            title: 'Overseas Adventure Travel In Nepal',
            description: 'Lorem ipsum dolor sit amet, velit tamquam eum et, pro agam sanctus minimum ut. Usu prompta invidunt at, noluisse ponderum nec ne. ',
            author: {
                id: 1,
                image: 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80',
                name: 'Steve Garrett',
            },
            view: 100000,
            publishDate: "2020-03-10 03:08:10",
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            title: 'Overseas Adventure Travel In Nepal',
            description: 'Lorem ipsum dolor sit amet, velit tamquam eum et, pro agam sanctus minimum ut. Usu prompta invidunt at, noluisse ponderum nec ne. ',
            author: {
                id: 1,
                image: 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80',
                name: 'Steve Garrett',
            },
            view: 100000,
            publishDate: "2020-03-10 03:08:10",
        },
    ],
};

mock.onGet('/api/posts').reply((request) => {
    const {page, limit} = request.params;
    const {posts} = userDB;
    return [200, {posts, page: 1, limit: 10, total: posts.length}];
});
