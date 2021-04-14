const {getTaylorCosCalc} = require('./main');

test('calcs 4-th degree right', () => {
    expect(getTaylorCosCalc(4)).toBe('cos(x) = 0.5000001666578537');
});

test('calcs 5-th degree right', () => {
    expect(getTaylorCosCalc(5)).toBe('cos(x) = 0.541667646309658');
});


test('calcs 7-th degree right', () => {
    expect(getTaylorCosCalc(7)).toBe('cos(x) = 0.5127555883767112');
});
