/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
     let arr = [];
     //traverse trhough the values 

     while(head !== null) {
     arr.push(head.val);
     head = head.next;
     }

     //two pointer pattern 
    let i = 0;
    let j = arr.length - 1;
    let max = -Infinity;

    while(i < j) {
        max = Math.max(max, arr[i] + arr[j]);

        i++;
        j--;
    }
    return max;
};








/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var reversell =  function(node) {
        let curr = node;
        let prev = null;

        while(curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        }
        return prev;
    };

var pairSum = function(head) {
   let slow = head;
   let fast = head;

   while(fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
   }
   
   //reverse 2nd half
   let p2 = reversell(slow);
   let p1  = head;
   let max = -Infinity;

   while(p1 !== null && p2 !== null) {
    max = Math.max(max, p1.val + p2.val)

   p1 = p1.next;
   p2 = p2.next;

   }

  return max;
};