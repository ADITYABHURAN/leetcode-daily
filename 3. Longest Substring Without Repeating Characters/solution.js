/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;

    for (let i = 0; i < s.length; i++) {
    const set = new Set();

    for (let j = i;j < s.length; j++) {
        const c  = s.charAt(j);

        if (set.has(c)) {
            break;
        }

        set.add(c);
        max = Math.max(max, j - i + 1);
    }

    }
    return max

};





//optimized approach
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;

    let i = 0;
    let j = 0;

    const set = new Set;

    while (j < s.length) {
    const c = s.charAt(j);

      while(set.has(c)) {
      set.delete(s.charAt(i));
      i++;
      }
        set.add(c);
        max = Math.max(max, j - i + 1);
        j++
    }
return max;
    };

    