var removeNthFromEnd = function(head, n) {
    // 1. Create a dummy node to handle edge cases like removing the head.
    // In JavaScript, we can define a simple object or use a constructor if available.
    // Assuming a simplified ListNode object for demonstration.
    const dummy = { val: 0, next: head };
    
    // The dummy node's next pointer points to the head of the list.
    let l = head; // Right pointer (or fast pointer)
    let jumps = 0;

    // 2. Advance the 'l' pointer 'n' steps ahead of 'prev'.
    // This establishes the gap of 'n' nodes between the two pointers.
    while (jumps < n && l !== null) {
        l = l.next;
        jumps = jumps + 1;
    }
    
    // In the original Java code, the 'l' pointer is named 'curr' in the second part.
    // In this JavaScript version, 'l' acts as the fast pointer, and 'prev' acts as the slow pointer's predecessor.
    let prev = dummy; // Left pointer's predecessor (or slow pointer's predecessor)
    let curr = l;     // The 'l' pointer from above, now acting as the fast pointer 'curr'

    // 3. Move both pointers (prev and curr) one step at a time
    // until the fast pointer (curr) reaches the end of the list (null).
    while (curr !== null) {
        curr = curr.next;
        prev = prev.next; // 'prev' will stop just before the node to be removed.
    }

    // 4. Skip the Nth node from the end. 
    // The node to be removed is 'prev.next'.
    // We update 'prev.next' to point to 'prev.next.next'.
    // This effectively removes the node (garbage collection handles memory).
    if (prev.next !== null) {
        prev.next = prev.next.next;
    }

    // 5. The list head is 'dummy.next'.
    return dummy.next;
};