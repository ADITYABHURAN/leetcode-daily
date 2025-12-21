/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // "  hello  world  "
    let trim = s.trim();
    // "hello world"
    let arr = trim.split(/\s+/); //javascript doesnt allow arr[] during declaration
    //["", "hello", "world"]
    let i = 0;
    let j = arr.length - 1;
    //arr reverse hogaya 
    while(i < j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    i = i + 1;
    j = j - 1;
    }
 return arr.join(" ");  
};

// Time Complexity: O(n) where n is the length of the string
// Space Complexity: O(n) for the array used to store words


//trim to remove leading and trailing spaces
//split with regex to handle multiple spaces between words
//two pointer technique to reverse the array of words
//join to combine the words back into a single string with single spaces