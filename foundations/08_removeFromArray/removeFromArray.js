const removeFromArray = function(arr, ...agr) {
    return arr.filter(num => !agr.includes(num));
};


// Do not edit below this line
module.exports = removeFromArray;
