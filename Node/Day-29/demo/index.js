const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

const User = [
    {
        username: 'admin1',
        password: 'password1'
    },
    {
        username: 'admin2',
        password: 'password2'
    }
]

let myAuthFunc = (username, password) => {
    return User.some((user) => {
        return user.username == username && user.password == password
    });
};

app.use(basicAuth({
    authorizer: myAuthFunc,
    challenge: true
}));

app.get('/', (req, res) => {
    res.send('Hello, You have got to the application')
});

app.listen(8080, () => {
    console.log(`App is listening to port 8080`)
});