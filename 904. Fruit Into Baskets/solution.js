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