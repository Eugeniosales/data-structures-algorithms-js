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

/* 
[1->2->34,5]

*/

/* 
  Steps
    1.Initialize
      .temp = head
      .head = tail
      .tail = head
      .prev = null
    2.while next
      .next = temp.next
      .temp.next = prev
      .prev = temp
      .temp = next
    3.Return prev
  Edge Cases
    1.Single item
    2.Empty List
  Complexity
    .Time: O(n)
    .Space: O(1)
*/
var reverseList = function(head) {
  if(!head) return null;
  if(!head.next) return head;
  let temp = head;
  let prev = null;
  while(temp) {
    next = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next;
  }
  return prev;
};
