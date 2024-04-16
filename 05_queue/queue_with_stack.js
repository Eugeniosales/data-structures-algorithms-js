class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {}

  // O(1)
  enqueue(value) {}

  //O(1)
  dequeue() {}

  //O(1)
  isEmpty() {}

  //O(1)
  peek() {}
}

const main = () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);

  while (!queue.isEmpty()) {
    console.log(queue.peek());
    queue.dequeue();
  }
};

main();
