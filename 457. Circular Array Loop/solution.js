var circularArrayLoop = function(nums) {
    const n = nums.length;

    const next = (i) => ((i + nums[i]) % n + n) % n;

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) continue;

        let slow = i;
        let fast = i;
        const forward = nums[i] > 0;

        while (true) {
            // move slow once
            let sNext = next(slow);
            // move fast twice
            let fNext = next(fast);
            let fNext2 = next(fNext);

            // direction or visited check
            if (
                nums[sNext] === 0 ||
                nums[fNext] === 0 ||
                nums[fNext2] === 0 ||
                (nums[sNext] > 0) !== forward ||
                (nums[fNext] > 0) !== forward ||
                (nums[fNext2] > 0) !== forward
            ) {
                break;
            }

            slow = sNext;
            fast = fNext2;

            if (slow === fast) {
                // single-element loop check
                if (slow === next(slow)) break;
                return true;
            }
        }

        // Mark entire path as visited
        let idx = i;
        while (nums[idx] !== 0 && (nums[idx] > 0) === forward) {
            let nxt = next(idx);
            nums[idx] = 0;
            idx = nxt;
        }
    }

    return false;
};
