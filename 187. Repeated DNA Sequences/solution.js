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


//Rabin Karp Algorithm Implementation
function rabinKarp(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    const d = 256;  // Number of characters in alphabet (ASCII)
    const q = 101;  // A prime number for modulo
    
    let patternHash = 0;  // Hash of pattern
    let textHash = 0;     // Hash of current window
    let h = 1;            // d^(m-1) mod q
    let result = [];      // Store all match positions
    
    // Calculate h = d^(m-1) mod q
    for (let i = 0; i < m - 1; i++) {
        h = (h * d) % q;
    }
    
    // Calculate initial hash values
    for (let i = 0; i < m; i++) {
        patternHash = (d * patternHash + pattern.charCodeAt(i)) % q;
        textHash = (d * textHash + text.charCodeAt(i)) % q;
    }
    
    // Slide the pattern over text
    for (let i = 0; i <= n - m; i++) {
        // Check if hashes match
        if (patternHash === textHash) {
            // Hash match! Now verify character by character
            let match = true;
            for (let j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            
            if (match) {
                result.push(i);  // Pattern found at index i
                console.log(`Pattern found at index ${i}`);
            }
        }
        
        // Calculate hash for next window (rolling hash)
        if (i < n - m) {
            // Remove leading character, add trailing character
            textHash = (d * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;
            
            // Handle negative hash values
            if (textHash < 0) {
                textHash = textHash + q;
            }
        }
    }
    
    return result;
}

// Test
const text = "AABAACAADAABAABA";
const pattern = "AABA";
console.log("Matches at positions:", rabinKarp(text, pattern));
// Output: Pattern found at index 0
//         Pattern found at index 9
//         Pattern found at index 12
//         Matches at positions: [0, 9, 12]
```

---

## Detailed Walkthrough Example

Let's trace through a simple example:
```
Text:    "ABCDABC"
Pattern: "ABC"
```

**Setup:**
- d = 10 (simplified, normally 256)
- q = 13 (prime number)
- m = 3 (pattern length)
- Character values: A=1, B=2, C=3, D=4

### Step 1: Calculate h = d^(m-1) mod q
```
h = 10^(3-1) mod 13
h = 10^2 mod 13
h = 100 mod 13
h = 9
```

### Step 2: Calculate Pattern Hash
```
patternHash = 0

i=0: patternHash = (10 × 0 + 1) mod 13 = 1
i=1: patternHash = (10 × 1 + 2) mod 13 = 12
i=2: patternHash = (10 × 12 + 3) mod 13 = 123 mod 13 = 6

patternHash = 6
```

### Step 3: Calculate Initial Text Window Hash
```
Window: "ABC" (positions 0-2)
textHash = 0

i=0: textHash = (10 × 0 + 1) mod 13 = 1
i=1: textHash = (10 × 1 + 2) mod 13 = 12
i=2: textHash = (10 × 12 + 3) mod 13 = 6

textHash = 6
```

### Step 4: First Comparison
```
Position 0: "ABC"
patternHash = 6
textHash = 6
Hashes match! ✓

Character verification:
A == A ✓
B == B ✓
C == C ✓

Match found at index 0! 🎉
```

### Step 5: Slide Window (Rolling Hash)
```
Old window: "ABC" (hash = 6)
New window: "BCD"

Remove 'A' (value 1):
textHash = 6 - (1 × 9) = 6 - 9 = -3
-3 mod 13 = 10

Multiply by d and add 'D' (value 4):
textHash = (10 × 10 + 4) mod 13
         = 104 mod 13
         = 0

New textHash = 0
```

### Step 6: Second Comparison
```
Position 1: "BCD"
patternHash = 6
textHash = 0
Hashes don't match ✗
Skip character comparison
```

### Step 7: Continue Sliding
```
Position 2: "CDA"
textHash = ((0 - 3 × 9) × 10 + 1) mod 13
         = ((-27) × 10 + 1) mod 13
         = -269 mod 13
         = 4

patternHash = 6, textHash = 4 ✗

Position 3: "DAB"
... similar calculation ...

Position 4: "ABC"
textHash = 6 (matches pattern!)
Verify: Match found at index 4! 🎉
```

---

## Why Use Modulo (mod q)?

### Problem Without Modulo:
```
Text: "AAAAAAAAAAA" (very long)
Pattern: "AAAA"

Hash without mod = 1111111111... (huge number!)
→ Integer overflow
→ Memory problems
```

### Solution: Use Prime Modulo
```
hash = (calculation) mod q

Benefits:
1. Keeps numbers small
2. Reduces hash collisions (prime number property)
3. Prevents overflow
```

**Common prime choices:** 101, 1009, 10007, 1000000007

---

## Hash Collisions - Important Concept!

### What is a Hash Collision?

When two **different** strings have the **same** hash value.
```
Example:
hash("AB") = 12
hash("BA") = 21  ← Different hash (no collision)

But with modulo:
hash("AB") mod 13 = 12
hash("XY") mod 13 = 12  ← Collision! Different strings, same hash
