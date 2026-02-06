const fibonacci = function(n) {
    n = Number(n);
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    if (n == 1) return 1;

    let firstFibonaci = 0;
    let secondFibonaci = 1;
    let i = 1;
    while (i !== n){
        i++;
        let tem = secondFibonaci;
        secondFibonaci += firstFibonaci;
        firstFibonaci = tem;
    }
    return secondFibonaci;
};

console.log(fibonacci(8));

// Do not edit below this line
module.exports = fibonacci;
