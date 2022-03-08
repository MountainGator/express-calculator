const express = require('express');
const ExpressError = require('./expressError');
const {findMean, findMedian, findMode, validateInput} = require('./do-math');
const app = express();

app.get('/mean', (req, res, next) => {
    if(!req.query.nums) throw new ExpressError('please pass in nums query');

    if(!validateInput(req.query.nums)) throw new ExpressError('all entries must be numbers');

    const format = {
        operation: 'mean',
        result: findMean(req.query.nums)
    }

    res.send(format);
})

app.get('/median', (req, res, next) => {
    if(!req.query.nums) throw new ExpressError('please pass in nums query');

    if(!validateInput(req.query.nums)) throw new ExpressError('all entries must be numbers');

    const format = {
        operation: 'median',
        result: findMedian(req.query.nums)
    }

    res.send(format);
})

app.get('/mode', (req, res, next) => {
    if(!req.query.nums) throw new ExpressError('please pass in nums query');

    if(!validateInput(req.query.nums)) throw new ExpressError('all entries must be numbers');

    const format = {
        operation: 'mode',
        result: findMode(req.query.nums)
    }

    res.send(format);
})


app.listen(3000, () => {
    console.log('starting app');
})