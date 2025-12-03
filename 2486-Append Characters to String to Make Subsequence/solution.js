var appendCharacters = function(s, t) {

  // Pointer for t (characters we are trying to match)
  let j = 0;

  // Loop through s
  for (let i = 0; i < s.length && j < t.length; i++) {

    // If characters match, move t pointer
    if (s[i] === t[j]) {
      j++;
    }
  }

  // After scanning s, how many characters of t are unmatched?
  return t.length - j;
};
