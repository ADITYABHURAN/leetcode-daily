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





var reverseWords = function(s) {
    let sb = [];
    let i = 0;
    let n = s.length;

    // STEP 1: clean spaces
    while (i < n) {
        // skip spaces
        while (i < n && s[i] === ' ') i++;

        // copy word
        while (i < n && s[i] !== ' ') {
            sb.push(s[i]);
            i++;
        }

        // add one space after word
        if (i < n) sb.push(' ');
    }

    // remove trailing space
    if (sb.length > 0 && sb[sb.length - 1] === ' ') {
        sb.pop();
    }

    // STEP 2: reverse entire string
    reverse(sb, 0, sb.length - 1);

    // STEP 3: reverse each word
    let start = 0;
    for (let end = 0; end <= sb.length; end++) {
        if (end === sb.length || sb[end] === ' ') {
            reverse(sb, start, end - 1);
            start = end + 1;
        }
    }

    return sb.join('');
};

// helper function
function reverse(arr, l, r) {
    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}
// Time Complexity: O(n) where n is the length of the string
// Space Complexity: O(n) for the array used to store characters    