class LinkedListNode<T = any> {
  declare data: T;
  declare next: LinkedListNode<T> | null;

  constructor(data: T) {
    this.data = data;
  }
}

export default class SinglyLinkedList<T = any> {
  private declare first: LinkedListNode<T> | null;
  private declare last: LinkedListNode<T> | null;
  private declare size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  public addNode(data: T): this {
    const newNode = new LinkedListNode<T>(data);

    if (!this.size) {
      this.first = this.last = newNode;
      this.incrementSize();
      return this;
    }

    if (this.last) this.last.next = newNode;

    this.last = newNode;
    this.incrementSize();
    return this;
  }

  public addMany(data: T[]): this {
    for (const newNode of data) {
      this.addNode(newNode);
    }

    return this;
  }

  private decrementSize(): number {
    return (this.size -= 1);
  }

  private incrementSize(): number {
    return (this.size += 1);
  }

  public clearList(): void {
    this.first = this.last = null;
    this.size = 0;
  }

  public reverseList(): void {
    if (this.getSize() === 0 || this.getSize() === 1) {
      return;
    }

    let current = this.first;
    let prev = null;
    let next = current?.next;

    this.last = current;

    while (next !== null) {
      if (current) {
        current.next = prev;
      }

      prev = current;

      current = next || null;
      next = current?.next || null;
    }

    if (current) {
      current.next = prev;
    }

    this.first = current;
  }

  public removeAtIndex(index: number): T | null {
    if (index > this.size - 1) return null;

    let currentNode = this.first;

    if (index === 0) {
      this.first = this.first?.next || null;

      if (index === this.size - 1) this.last = null;
      return currentNode?.data || null;
    }

    let count = 0;
    let prev: LinkedListNode<T> | null = this.first;
    while (count <= this.size - 1 && index !== count) {
      if (currentNode) {
        if (count == index - 1) {
          currentNode && (prev = currentNode);
        }
        currentNode = currentNode.next;

        count += 1;
      }
    }

    if (count === this.size - 1) {
      this.last = prev || null;
    }
    prev && ((prev as any).next = currentNode?.next);
    return currentNode?.data as T;
  }

  public addNodeFront(data: T): this {
    const newNode = new LinkedListNode<T>(data);

    if (!this.size) {
      this.first = this.last = newNode;
      this.incrementSize();
      return this;
    }

    newNode.next = this.first;

    this.first = newNode;
    this.incrementSize();
    return this;
  }

  public addManyFront(data: T[]): this {
    for (const newNode of data) {
      this.addNodeFront(newNode);
    }

    return this;
  }

  public removeLastNode(): T | null {
    let currentNode = this.first;
    let temp: T;

    switch (this.size) {
      case 0:
        return null;
      case 1:
        temp = this.first?.data as T;
        this.first = this.last = null;
        this.decrementSize();

        return temp;

      default:
        while (currentNode?.next !== this.last) {
          if (currentNode?.next) currentNode = currentNode?.next;
        }

        temp = currentNode.next?.data as T;
        this.last = currentNode;
        currentNode.next = null;

        this.decrementSize();

        return temp;
    }
  }
  public removeFirstNode(): T | null {
    let temp: T;

    switch (this.size) {
      case 0:
        return null;
      case 1:
        temp = this.first?.data as T;
        this.first = this.last = null;
        this.decrementSize();

        return temp;

      default:
        temp = this.first?.data as T;

        this.first = this.first?.next as LinkedListNode<T>;

        this.decrementSize();

        return temp;
    }
  }

  public getSize(): number {
    return this.size;
  }

  public getFirst(): T {
    return this.first?.data as T;
  }
  public getLast(): T {
    return this.last?.data as T;
  }

  public toArray(): T[] {
    let currentNode = this.first;

    const array: T[] = [];

    while (currentNode) {
      if (currentNode) {
        array.push(currentNode.data);
        currentNode = currentNode.next;
      }
    }

    return array;
  }

  public getIndex(index: number): T | null {
    if (index > this.size - 1) return null;

    let count = 0;

    let currentNode = this.first;
    while (count <= this.size - 1 && index !== count) {
      if (currentNode) {
        currentNode = currentNode.next;
        count += 1;
      }
    }
    return currentNode?.data as T;
  }
  public filterList(callBack: (data: T) => boolean): this {
    switch (this.size) {
      case 0:
        break;
      case 1:
        const data = this.first?.data as T;
        if (!callBack(data)) {
          this.first = this.last = null;
          this.decrementSize();
        }
        break;
      default:
        let currentNode = this.first;

        while (currentNode) {
          if (currentNode) {
            if (currentNode === this.first) {
              if (!callBack(currentNode.data)) {
                this.first = currentNode.next;
                currentNode = currentNode.next;
                this.decrementSize();
                continue;
              }
            }

            if (currentNode.next === this.last) {
              if (currentNode.next && !callBack(currentNode?.next.data)) {
                this.last = currentNode;
                currentNode.next = null;
                this.decrementSize();
              }
            }

            if (currentNode.next && !callBack(currentNode.next.data)) {
              currentNode.next = currentNode.next?.next || null;
              this.decrementSize();
            } else {
              currentNode = currentNode.next;
            }
          }
        }
        break;
    }
    return this;
  }
}
