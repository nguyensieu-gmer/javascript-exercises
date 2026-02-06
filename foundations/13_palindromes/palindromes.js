const palindromes = function (sentence) {
    let newSentence = "";
    for (let char of sentence){
        if (char.toUpperCase() !== char.toLowerCase() || (+char)){
            newSentence += char.toLowerCase();
        }
    }
    for (let i = 0; i < newSentence.length / 2; i++){
        if (newSentence[i] !== newSentence[newSentence.length - 1 - i]){
            return false;
        }
    }
    return true;
};

console.log(palindromes('r3ace3car'));

// Do not edit below this line
module.exports = palindromes;
