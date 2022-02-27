// 404 error handler
const notFound = ((req, res, next) => {
    const error = new Error;
    error.message = 'This page can not be found';
    error.status = 404;
    next(error);
});
  
// Global error handler
const globalError = ((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).json({ error: err });
});

module.exports = { notFound, globalError };