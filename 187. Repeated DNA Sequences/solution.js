/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function(s) {
    const seen = new Set();
    const result = new Set();

    // Iterate through the string, stopping 10 characters before the end
    for (let i = 0; i <= s.length - 10; i++) {
        const dna = s.substring(i, i + 10);

        if (seen.has(dna)) {
            result.add(dna);
        }

        seen.add(dna);
    }

    // Convert the Set back into an Array to match the expected return type
    return Array.from(result);
};

// Example usage:
// const input = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
// console.log(findRepeatedDnaSequences(input)); 
// Output: ["AAAAACCCCC", "CCCCCAAAAA"]