class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor () {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  
  // O(1)
  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return this;
    }

    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }

  // O(1)
  pop() {
    if (!this.top) {
      return this;
    }
    
    if(this.length === 1) {
      this.top = null;
      this.bottom = null;
      this.length--;
      return this;
    }

    this.top = this.top.next;
    this.length--;
    return this.top.value;
  }

  empty() {
    return this.length === 0;
  }

  peek() {
    return this.top?.value ?? 0;
  }
}

const main = () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);

  while(!stack.empty()) {
    console.log(stack.peek());
    stack.pop();
  }
}

main()
