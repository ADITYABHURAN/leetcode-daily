
//Aditya 
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        let digit = parseInt(num[i]);
        if (digit % 2 === 1) { // check if it's odd
            return num.substring(0, i + 1);
        }
    }
    return "";
};
