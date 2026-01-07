class Solution {
    splitList(head) {
        let slow = head;
        let fast = head.next;

        while (fast !== head && fast.next !== head) {
            slow = slow.next;
            fast = fast.next;

            if (fast.next !== head) {
                fast = fast.next;
            }
        }

        let head1 = head;
        let head2 = slow.next; // 🔑 SAVE IT FIRST

        fast.next = head2;
        slow.next = head1;

        return [head1, head2];
    }
}
