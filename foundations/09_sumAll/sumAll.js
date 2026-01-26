const sumAll = function(a, b) {
    if (!(a * b >= 0 && Number.isInteger(a) && Number.isInteger(b))){
        return 'ERROR'
    }
    if (b < a){
        [a, b] = [b, a];
    }
    let sum = 0;
    for (let i = a; i <= b; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
