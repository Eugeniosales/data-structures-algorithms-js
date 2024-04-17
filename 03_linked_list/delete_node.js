class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  // O(n)
  print (head) {
    let curr = head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

// O(n)
function deleteNode(llist, position) {
  if (position === 0) {
    return llist.next;
  }
  let prev = llist;
  for (let i = 0; i < position - 1; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return llist;
}

const main = () => {
  let llist = new SinglyLinkedList();
  llist.insertNode(11);
  llist.insertNode(12);
  llist.insertNode(8);
  llist.insertNode(18);
  llist.insertNode(16);
  llist.insertNode(5);
  llist.insertNode(18);
  const head = deleteNode(llist.head, 0);
  llist.print(head)
}

main()
