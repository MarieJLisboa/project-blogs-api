const express = require('express');
require('express-async-errors');

const morgan = require('morgan');

const loginRoutes = require('./routes/login.routes');
const userRoutes = require('./routes/user.routes');
const categoriesRoutes = require('./routes/categories.routes');
const postRoutes = require('./routes/posts.routes');
const errorMid = require('./middlewares/error.middleware');
// ...

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoriesRoutes);
app.use('/post', postRoutes);

app.use(errorMid);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
