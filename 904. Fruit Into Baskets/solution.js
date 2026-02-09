/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let max = 0;
    
    //T: 0(n^2), S: 0(1)
    // [0,1,2,2]
    //    i
    //        j
    // max = 3              j - i + 1 when it goes more than 2 break and i++
    // <1, 2>

    for (let i = 0; i  < fruits.length; i++) {
    const set = new Set(); //do not forget parentheses.

    for (let j = i; j < fruits.length; j++) {
     set.add(fruits[j]);

     if(set.size > 2) {
        break;
     }
     max = Math.max(max, j - i + 1);
    }

    
}
return max;
};





//optimized approach
var totalFruit = function(fruits) {
    let max = 0;
    const map = new Map();
    let i = 0;
    let j = 0;

    while (j < fruits.length) {
        // Add fruit at position j (not i!)
        map.set(fruits[j], (map.get(fruits[j]) || 0) + 1);

        // Shrink window if more than 2 types
        while (map.size > 2) {  // size is a property, not a method
            map.set(fruits[i], map.get(fruits[i]) - 1);
            
            if (map.get(fruits[i]) === 0) {
                map.delete(fruits[i]);
            }
            i++;
        }
        
        max = Math.max(max, j - i + 1);
        j++;  // Don't forget to increment j!
    }
    
    return max;
};
