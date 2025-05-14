function exibirFibonacci(n) {
    if (n <= 0) return [];

    let a = 0, b = 1;
    let fib = [a];
    if (n > 1) fib.push(b);

    for (let i = 2; i < n; i++) {
        let temp = a + b;
        fib.push(temp);
        a = b;
        b = temp;
    }

    return fib;
}

module.exports = { exibirFibonacci };
