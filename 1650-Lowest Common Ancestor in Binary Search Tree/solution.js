class Solution {
    lowestCommonAncestor(root, p, q) {
        let curr = root;

        while (curr !== null) {
            if (p.val < curr.val && q.val < curr.val) {
                curr = curr.left;
            } else if (p.val > curr.val && q.val > curr.val) {
                curr = curr.right;
            } else {
                return curr;
            }
        }

        return null;
    }
}


//we count use the two pointer technique here because the array is sorted and we dont have the required dataset provided to use hashmaps or sets
//we can use the properties of the binary search tree to find the lowest common ancestor