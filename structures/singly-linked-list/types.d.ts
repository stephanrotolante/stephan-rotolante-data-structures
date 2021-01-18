declare class SinglyLinkedList<T = any> {
  constructor();
  public addNode(data: T): this;
  public addMany(data: T[]): this;
  public removeLastNode(): T | null;
  public removeFirstNode(): T | null;
  public getSize(): number;
  public getFirst(): T;
  public getLast(): T;
  public toArray(): T[];
  public getIndex(index: number): T | null;
  public filterList(callBack: (data: T) => boolean): this;
}

export = SinglyLinkedList;
