/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;

    function isAlphanumeric(ch) {
        // ASCII ranges for 0-9, A-Z, a-z
        const code = ch.charCodeAt(0);
        return (
        (code >= 48 && code <=57) ||
        (code >= 65 && code <=90) ||
        (code >= 97 && code <=122) 
        );
    }
        //two pointer approach
    while(i < j) {
        let left = s[i];
        let right = s[j];

        if (!isAlphanumeric(left)) {
            i++;
            continue;

        }
        if (!isAlphanumeric(right)) {
            j--;
            continue;

        }

        if (left.toLowerCase() !== right.toLowerCase()) {
         return false;
        }

        i++;
        j--;

    }
    
    return true;
};