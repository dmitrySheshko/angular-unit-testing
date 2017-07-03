import apiRouter from './api';

module.exports = (app) => {
    app.use('/api', apiRouter);
};