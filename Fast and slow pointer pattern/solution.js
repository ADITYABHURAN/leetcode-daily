//psuedo code
//create a set to store visited nodes
//traverse the linked list
//if the current node is already in the set, return true (cycle detected)
//if not, add the current node to the set and move to the next node
//if we reach the end of the list (null), return false (no cycle)

function hasCycle(head) {
  const visited = new Set();

  while (head !== null) {
    if (visited.has(head)) {
      console.log("Cycle is there");
      return true;
    }

    visited.add(head);
    head = head.next;
  }

  console.log("No cycle");
  return false;
}
// Time complexity: O(n)
// Space complexity: O(n)

