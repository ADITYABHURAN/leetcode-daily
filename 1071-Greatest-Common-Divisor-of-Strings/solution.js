//This is a recursive function to calculate the Greatest Common Divisor (GCD) of two numbers a and b using the Euclidean algorithm.
//If b is 0, it returns a → base case.
//Otherwise, it calls itself with (b, a % b) → keeps reducing the problem until b becomes 0.
//Example: gcd(6, 4)
//→ gcd(4, 2)
//→ gcd(2, 0) → returns 2 ✅


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
   if (str1 + str2 !== str2 + str1) return "" //if the concatenation of both strings in different order is not equal , then there is no common divisor string
   //function to calculate the gcd of two numbers

   const gcd = (a, b) => b === 0 ? a : gcd(b, a % b); //recursive function to calculate gcd of two numbers
   //calculate the gcd of the lengths of both strings
   let lenGCD = gcd(str1.length, str2.length); //gcd of lengths of both strings
   //return the substring of str1 from index 0 to lenGCD
   //this is because the gcd string will be the prefix of both strings and its length will be equal to the gcd of lengths of both strings
   //Example : str1 = "ABCABC" , str2 = "ABC" , gcd of lengths = 3 , so the gcd string will be "ABC" which is the prefix of both strings


  return str1.substring(0, lenGCD);
    
};