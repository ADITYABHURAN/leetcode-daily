var isPalindrome = function(head) {
    if (!head || !head.next) return true;

    // Step 1: Find middle
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse second half
    let prev = null;
    while (slow) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    // Step 3: Compare both halves
    let left = head;
    let right = prev;

    while (right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }

    return true;
};
