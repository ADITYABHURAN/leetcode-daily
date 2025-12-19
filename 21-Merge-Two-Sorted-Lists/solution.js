/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to build the merged list behind it
    let dummy = new ListNode(-1);
    let current = dummy;

    // Traverse both lists until one becomes null
    while (list1 !== null && list2 !== null) {

        // Always pick the node with the smaller value
        if (list1.val < list2.val) {
            current.next = list1;   // Append list1 node
            list1 = list1.next;     // Move pointer forward in list1
        } else {
            current.next = list2;   // Append list2 node
            list2 = list2.next;     // Move pointer forward in list2
        }

        // Move the current pointer forward in merged list
        current = current.next;
    }

    // If one list is exhausted, attach the other list directly
    // (Remaining nodes are already sorted)
    current.next = list1 !== null ? list1 : list2;

    // The head of merged list is dummy.next
    return dummy.next;
};


//above is iterative approach