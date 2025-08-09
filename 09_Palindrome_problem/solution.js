
//// 09_Palindrome_problem/solution.js// This function checks if a given integer is a palindrome.
// A palindrome reads the same backward as forward
var isPalindrome = function(x) {
    if (x < 0) return false; // negatives not palindrome
    let str = x.toString();
    let reversed = str.split('').reverse().join('');
    return str === reversed;
};


//slightly optimized version
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;
    let original = x;
    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return original === reversed;
};
