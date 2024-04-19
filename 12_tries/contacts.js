class Node {
  constructor(char) {
    this.char = char;
    this.children = [];
    this.count = 0;
  }

  findOrCreateChild(char) {
    this.count++;
    return this.findChar(char) || this.createChar(char);
  }

  createChar(char) {
    const child = new Node(char);
    this.children.push(child);
    return child;
  }

  findChar(char) {
    return this.children.find(child => child.char === char);
  }
}

class Trie {
  constructor() {
    this.root = new Node(null);
  }

  insert(str) {
    let currentNode = this.root;
    for (const char of str) {
      currentNode = currentNode.findOrCreateChild(char);
    }

    currentNode.findOrCreateChild("*");
    return currentNode;
  }

  getMatchCount(str) {
    let currentNode = this.root;
    for (const char of str) {
      currentNode = currentNode.findChar(char);
      if (!currentNode) return 0;
    }
    return currentNode.count;
  }
}

function contacts(queries) {
  const trie = new Trie();
  const output = [];
  for ([command, str] of queries) {
    if (command === 'add') {
      trie.insert(str);
    } else {
       const count = trie.getMatchCount(str);
       output.push(count);
    }
  }
  return output;
}

const main = () => {
  const arr = Array(4);
  console.log(contacts([['add', 'hack'], ['add', 'hackerrank'], ['find', 'hac'],[ 'find', 'hak']]))
}

main()
