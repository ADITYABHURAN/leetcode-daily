/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<=0){
        return false;
    }
    function helper(n,x){
        let power = Math.pow(2, x);
        if(power === n) return true;
        if(power > n ) return false;
        return helper(n,x+1);

    }
    
    return helper(n,0);

};
// The function checks if a number is a power of two by recursively calculating powers of two until it either matches the number or exceeds it.
// It starts with an exponent of 0 and increases it until the power of two either matches the input number or exceeds it, returning true or false accordingly.
// This approach effectively utilizes recursion to explore the powers of two, ensuring that the function is efficient