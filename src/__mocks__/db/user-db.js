import mock from './../mock';

const userDB = {
    users: [
        {
            full_name: 'Full Name 1',
            email: 'test1@gmail.com',
            password: '123456789',
            role: 'admin'
        },
        {
            full_name: 'Full Name 2',
            email: 'test2@gmail.com',
            password: '123456789',
            role: 'user'
        },
        {
            full_name: 'Full Name 3',
            email: 'test3@gmail.com',
            password: '123456789',
            role: 'guest'
        }
    ]
};

mock.onGet('/api/users').reply((request) => {
    const {page, limit} = request.params;
    const {users} = userDB;
    return [200, {users, page: 1, limit: 10, total: users.length}];
});

mock.onPost('/auth/sign-up').reply((request) => {
    const {full_name, email, password} = request.data;
    const {users} = userDB;
    const user = {full_name, email, password, role: 'guest'};
    userDB.users = [...users, user];
    return [200, {user}];
});


mock.onPost('/auth/sign-in').reply((request) => {
    const {email, password} = JSON.parse(request.data);
    const {users} = userDB;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        return [200, {user}];
    }

    return [400, {code: 'incorrect_email_or_password', message: 'The email or password you entered is incorrect'}];
});
