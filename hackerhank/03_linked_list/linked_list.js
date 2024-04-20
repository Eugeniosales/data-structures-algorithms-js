class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 0;
  }

  // O(n)
  insert (value, position) {
    if (position > this.length) {
      this.append(value);
      return this;
    } 

    let newNode = new Node(value);

    let prev = this.head;

    for (let i = 0; i < position - 1; i++) prev = prev.next;
    
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;

    return this; 
  }

  // O(n)
  remove (index) {
    let prev = this.head;

    // See Later
    if (this.length < index) {
      this.pop();
      return this;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }

    if (index - 1 > this.length) return this;

    for (let i = 0; i < index-1; i++) prev = prev.next;

    prev.next = prev.next.next;
//    prev.next.next.ant = prev;
    this.length--;

    return this;
  }

  // O(n)
  pop() {
    console.log("pop called!")
    let prev = this.head;
    while (prev.next.next) prev = prev.next;
    prev.next = null;
    return this;
  }

  // O(1)
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this; 
  }

  // O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // O(n)
  print () {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }

  // O(1)
  reverse () {}

  size () {
    return this.length;
  }
}

const main = () => {
  const list = new List(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.reverse();
  list.print();
}

main();
