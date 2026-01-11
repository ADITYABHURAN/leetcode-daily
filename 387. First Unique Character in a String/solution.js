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