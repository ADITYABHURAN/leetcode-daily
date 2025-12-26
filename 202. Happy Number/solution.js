var isHappy = function(n) {
    let slow = n;
    let fast = n;

    while (true) {
        slow = sumOfSquaresOfDigits(slow);
        fast = sumOfSquaresOfDigits(sumOfSquaresOfDigits(fast));

        if (fast === 1) return true;
        if (slow === fast) return false;
    }
};

function sumOfSquaresOfDigits(n) {
    let sum = 0;

    while (n > 0) {
        let dig = n % 10;
        sum += dig * dig;
        // in js you cannot just give n/=10 as it will convert to float
        //so we use Math.floor to get the integer part
        n = Math.floor(n / 10); 
    }
    return sum;
}
