class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // O(1)
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.last) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.length++;
  }

  //O(1)
  dequeue() {
    if (this.isEmpty()) {
      return this;
    }
    if (this.length === 1) {
      this.first = null;
      this.last = null;
      this.length--;
      return this;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }

  //O(1)
  isEmpty() {
    return this.length === 0;
  }

  //O(1)
  peek() {
    return this.first?.value;
  }
}

const main = () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);

  while(!queue.isEmpty()) {
    console.log(queue.peek());
    queue.dequeue();
  }
}

main();
