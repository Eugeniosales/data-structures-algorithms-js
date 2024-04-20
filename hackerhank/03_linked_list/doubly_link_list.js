class Node {
  constructor(value) {
    this.value = value;
    this.ant = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // O(n)
  insert (value, index) {
    let newNode = new Node(value);

    let prev = this.head;

    for(let i = 0; i < index - 1; i++) prev = prev.next;

    newNode.next = prev.next;
    prev.next.ant = newNode;

    prev.next = newNode;
    newNode.ant = prev;

    this.length++;

    return this;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.ant = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.ant = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printForwards () {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }

  printBackwards (){
    let curr = this.tail;
    while(curr) {
      console.log(curr.value);
      curr = curr.ant;
    }
  }
}

const main = () => {
  const doublyLinkedList = new DoublyLinkedList(1);
  doublyLinkedList.append(3);
  doublyLinkedList.append(15);
  doublyLinkedList.append(17);
  doublyLinkedList.insert(99, 2);
  doublyLinkedList.insert(5, 2);
  doublyLinkedList.insert(7, 3);
  doublyLinkedList.printBackwards();
}

main();

