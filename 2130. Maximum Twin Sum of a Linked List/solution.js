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