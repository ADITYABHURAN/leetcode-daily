/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head;
    let fast =  head;

    while(fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    }
    return slow;
};

/**
 * Definition for singly-linked list.
 * 1 2 3 4 5
 * s
 * f
 *   s
 *     f
 *       s
 *         f
 * as there are nu numbers of nodes, when fast reaches null, slow will be at middle
 * so mid points is 3 
 */