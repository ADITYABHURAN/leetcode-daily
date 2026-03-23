/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 //Interval pattern steps 
 // insert position... keep inserting intervals in the res - 
 // while overlapping... update newInterval
 // no overlapping... insert newInterval into res 
 // insert remaining intervals in the res 
var insert = function(intervals, newInterval) {
    let i = 0;
    const res = [];

    // Phase 1: current interval ends before newInterval starts → no overlap
    while (i < intervals.length && newInterval[0] > intervals[i][1]) {
        res.push(intervals[i]);
        i++;
    }

    // Phase 2: overlap → keep merging into newInterval
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }

    // newInterval is now fully merged, push it
    res.push(newInterval);

    // Phase 3: remaining intervals (they can't overlap newInterval)
    while (i < intervals.length) {
        res.push(intervals[i]);
        i++;
    }

    return res;
};