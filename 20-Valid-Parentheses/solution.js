var isValid = function(s) {
    const stack = [];
    const pairs = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let char of s) {
        // If it's an opening bracket, push to stack
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            // If closing bracket but stack empty -> invalid
            if (stack.length === 0) return false;

            // Check if matches the last opened bracket
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    // If stack empty, everything matched correctly
    return stack.length === 0;
};
