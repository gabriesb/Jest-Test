const { exibirFibonacci } = require('./Fibonacci');

test('Fibonacci de 0 termos', () => {
    expect(exibirFibonacci(0)).toEqual([]);
});

test('Fibonacci de 1 termo', () => {
    expect(exibirFibonacci(1)).toEqual([0]);
});
