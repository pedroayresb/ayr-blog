const express = require('express');
const userRouter = require('./routes/user.routes');
// const categoryRouter = require('./routes/categories.routes');
// const postRouter = require('./routes/post.routes');

const userController = require('./controllers/user.controller');

const loginValidate = require('./middlewares/loginValidate');
// ...

const app = express();

app.use(express.json());

const validateToken = require('./middlewares/validateToken');

app.post('/login', loginValidate, userController.login);

app.use(validateToken);

app.use('/user', userRouter);
// app.use('/categories', categoryRouter);
// app.use('/post', postRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
