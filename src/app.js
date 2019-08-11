import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// var indexRouter = require('./routes/index');
import usersRouter from './routes/users';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve('./public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve('./public/index.html'));
});

export default app;
