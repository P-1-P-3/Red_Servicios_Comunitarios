export const resError = (err, req ,res, next) => {
    res.status(err?.statusCode || 500).send({ status: 'Failed', data: { error: err?.message || err }});
};