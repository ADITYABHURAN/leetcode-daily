/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map;
    //to count frequency
    for(let char of s) {
    map.set(char, (map.get(char) || 0) +1)
    }

    //for index
    for(let i = 0; i < s.length; i++) {
        if(map.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
};

//map method is used to store the frequency of each character in the string.
//In the first loop, we iterate through the string and populate the map with character counts.
//In the second loop, we check the map for the first character with a count of 1 and return its index.
//If no unique character is found, we return -1.

//Time complexity: O(n) where n is the length of the string s. We traverse the string twice, but each traversal is O(n).
//Space complexity: O(1) because the map will store at most 26 entries for lowercase English letters, which is a constant space.