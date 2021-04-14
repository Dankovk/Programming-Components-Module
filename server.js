const express = require('express');
const {getTaylorCosCalc} = require('./main.js')

const app = express();


app.get('/', (req, res, next) => {
    const {num} = req.query
    res.send(`Ansewer is ${getTaylorCosCalc(parseInt(num))}`)
});

app.listen(3000, () => {
    console.log('app started');
})
