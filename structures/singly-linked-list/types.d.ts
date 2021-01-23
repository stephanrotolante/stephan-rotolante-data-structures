declare class SinglyLinkedList<T = any> {
  constructor();
  /**
   *
   * @param data
   */
  public addNode(data: T): this;
  /**
   *
   * @param data
   */
  public addMany(data: T[]): this;
  /**
   *
   * @param data
   */
  public addNodeFront(data: T): this;
  /**
   *
   * @param data
   */
  public addManyFront(data: T[]): this;
  /**
   *
   * @param index
   */
  public removeAtIndex(index: number): T | null;
  /**
   *
   */
  public removeLastNode(): T | null;
  /**
   *
   */
  public removeFirstNode(): T | null;
  /**
   *
   */
  public getSize(): number;
  /**
   *
   */
  public getFirst(): T;
  /**
   *
   */
  public getLast(): T;
  /**
   *
   */
  public toArray(): T[];
  /**
   *
   * @param index
   */
  public getIndex(index: number): T | null;
  /**
   *
   * @param callBack
   */
  public filterList(callBack: (data: T) => boolean): this;
}

export = SinglyLinkedList;
