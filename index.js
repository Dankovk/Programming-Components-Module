const express = require('express');

const  getTaylorSinCalc = () => {

    const a = 0

    const derivative = fxn => {
        var h = 0.001;
        return function(x) {
            return (fxn(x + h) - fxn(x - h)) / (2 * h);
        };
    };
    function factorialize(num) {
        if (num < 0) return -1;
        else if (num == 0) return 1;
        else {
            return num * factorialize(num - 1);
        }
    }

    function maclaurinExpansion(_degree) {
        var f = Math.cos;
        var expansion = [];

        for (var i = 0; i < _degree; i++) {
            expansion.push(f(a) / factorialize(i));
            f = derivative(f);
        }

        return x => expansion.reduce((a, b, i) => a + b * Math.pow(x, i), 0);
    }





    const calc = (x) =>  `cos(x) = ${maclaurinExpansion(4)(x)}`;

    return calc(1)
}

const app = express();


app.get('/', (req, res, next) => {
    const {num} = req.query
    res.send(`Ansewer is ${getTaylorSinCalc()}`)
});

app.listen(3000, ()=> {
    console.log('app started');
})






