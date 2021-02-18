import SinglyLinkedList from "./index";
describe("Singly Linked List", () => {
  let singlyLinkedList: SinglyLinkedList<{
    num: number;
  }> = new SinglyLinkedList<{ num: number }>();
  beforeEach(() => {
    singlyLinkedList.clearList();
  });
  it("addNode #1", () => {
    singlyLinkedList.addNode({ num: 2 });

    expect(singlyLinkedList.getSize()).toEqual(1);
    expect(singlyLinkedList.toArray()).toEqual([{ num: 2 }]);
    expect(singlyLinkedList.getFirst()).toEqual({ num: 2 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 2 });
  });

  it("addNode #2", () => {
    singlyLinkedList.addNode({ num: 2 });
    singlyLinkedList.addNode({ num: 4 });
    expect(singlyLinkedList.getSize()).toEqual(2);
    expect(singlyLinkedList.toArray()).toEqual([{ num: 2 }, { num: 4 }]);
    expect(singlyLinkedList.getFirst()).toEqual({ num: 2 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 4 });
  });

  it("addMany", () => {
    singlyLinkedList.addMany([{ num: 2 }, { num: 4 }, { num: 6 }, { num: 8 }]);
    expect(singlyLinkedList.getSize()).toEqual(4);
    expect(singlyLinkedList.toArray()).toEqual([
      { num: 2 },
      { num: 4 },
      { num: 6 },
      { num: 8 },
    ]);
    expect(singlyLinkedList.getFirst()).toEqual({ num: 2 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 8 });
  });

  it("addNodeFront #1", () => {
    singlyLinkedList.addNodeFront({ num: 2 });

    expect(singlyLinkedList.getSize()).toEqual(1);
    expect(singlyLinkedList.toArray()).toEqual([{ num: 2 }]);
    expect(singlyLinkedList.getFirst()).toEqual({ num: 2 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 2 });
  });

  it("addNodeFront #2", () => {
    singlyLinkedList.addNodeFront({ num: 2 });
    singlyLinkedList.addNodeFront({ num: 4 });
    expect(singlyLinkedList.getSize()).toEqual(2);
    expect(singlyLinkedList.toArray()).toEqual([{ num: 4 }, { num: 2 }]);
    expect(singlyLinkedList.getFirst()).toEqual({ num: 4 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 2 });
  });

  it("addManyFront", () => {
    singlyLinkedList.addManyFront([
      { num: 2 },
      { num: 4 },
      { num: 6 },
      { num: 8 },
    ]);
    expect(singlyLinkedList.getSize()).toEqual(4);
    expect(singlyLinkedList.toArray()).toEqual([
      { num: 8 },
      { num: 6 },
      { num: 4 },
      { num: 2 },
    ]);
    expect(singlyLinkedList.getFirst()).toEqual({ num: 8 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 2 });
  });
  it("removeLastNode #1 ", () => {
    expect(singlyLinkedList.removeLastNode()).toEqual(null);
    expect(singlyLinkedList.getSize()).toEqual(0);
    expect(singlyLinkedList.toArray()).toEqual([]);
  });

  it("removeLastNode #2", () => {
    singlyLinkedList.addNode({ num: 2 });
    expect(singlyLinkedList.removeLastNode()).toEqual({ num: 2 });
    expect(singlyLinkedList.getSize()).toEqual(0);
    expect(singlyLinkedList.toArray()).toEqual([]);
  });
  it("removeLastNode #3", () => {
    singlyLinkedList.addNode({ num: 2 });
    singlyLinkedList.addNode({ num: 4 });
    expect(singlyLinkedList.removeLastNode()).toEqual({ num: 4 });
    expect(singlyLinkedList.getSize()).toEqual(1);
    expect(singlyLinkedList.toArray()).toEqual([{ num: 2 }]);
    expect(singlyLinkedList.getFirst()).toEqual({ num: 2 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 2 });
  });
  it("removeLastNode #4", () => {
    singlyLinkedList.addNode({ num: 2 });
    singlyLinkedList.addNode({ num: 4 });
    singlyLinkedList.addNode({ num: 6 });
    expect(singlyLinkedList.removeLastNode()).toEqual({ num: 6 });
    expect(singlyLinkedList.getSize()).toEqual(2);
    expect(singlyLinkedList.toArray()).toEqual([{ num: 2 }, { num: 4 }]);
    expect(singlyLinkedList.getFirst()).toEqual({ num: 2 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 4 });
  });
  it("removeFirstNode #1", () => {
    // Case 0
    expect(singlyLinkedList.removeFirstNode()).toEqual(null);
    expect(singlyLinkedList.getSize()).toEqual(0);
    expect(singlyLinkedList.toArray()).toEqual([]);

    // Case 1
  });

  it("removeFirstNode #2", () => {
    singlyLinkedList.addNode({ num: 2 });
    expect(singlyLinkedList.removeFirstNode()).toEqual({ num: 2 });
    expect(singlyLinkedList.getSize()).toEqual(0);
    expect(singlyLinkedList.toArray()).toEqual([]);
  });
  it("removeFirstNode #3", () => {
    singlyLinkedList.addNode({ num: 2 });
    singlyLinkedList.addNode({ num: 4 });
    expect(singlyLinkedList.removeFirstNode()).toEqual({ num: 2 });
    expect(singlyLinkedList.getSize()).toEqual(1);
    expect(singlyLinkedList.toArray()).toEqual([{ num: 4 }]);
    expect(singlyLinkedList.getFirst()).toEqual({ num: 4 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 4 });
  });
  it("removeFirstNode #4", () => {
    singlyLinkedList.addNode({ num: 4 });
    singlyLinkedList.addNode({ num: 6 });
    singlyLinkedList.addNode({ num: 8 });
    expect(singlyLinkedList.removeFirstNode()).toEqual({ num: 4 });
    expect(singlyLinkedList.getSize()).toEqual(2);
    expect(singlyLinkedList.toArray()).toEqual([{ num: 6 }, { num: 8 }]);
    expect(singlyLinkedList.getFirst()).toEqual({ num: 6 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 8 });
  });

  it("Filter #1", () => {
    singlyLinkedList.addNode({ num: 1 });
    expect(singlyLinkedList.getSize()).toEqual(1);
    singlyLinkedList.filterList(({ num }) => num >= 3);

    expect(singlyLinkedList.getSize()).toEqual(0);
    expect(singlyLinkedList.toArray()).toEqual([]);
    expect(singlyLinkedList.getFirst()).toEqual(undefined);
    expect(singlyLinkedList.getLast()).toEqual(undefined);
  });
  it("Filter #2", () => {
    singlyLinkedList.addNode({ num: 1 });
    singlyLinkedList.addNode({ num: 2 });
    singlyLinkedList.addNode({ num: 3 });
    singlyLinkedList.addNode({ num: 4 });
    singlyLinkedList.addNode({ num: 5 });
    expect(singlyLinkedList.getSize()).toEqual(5);
    singlyLinkedList.filterList(({ num }) => num >= 3);

    expect(singlyLinkedList.getSize()).toEqual(3);
    expect(singlyLinkedList.toArray()).toEqual([
      { num: 3 },
      { num: 4 },
      { num: 5 },
    ]);
    expect(singlyLinkedList.getFirst()).toEqual({ num: 3 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 5 });
  });
  it("Filter #3", () => {
    singlyLinkedList.addNode({ num: 5 });
    singlyLinkedList.addNode({ num: 2 });
    singlyLinkedList.addNode({ num: 1 });
    singlyLinkedList.addNode({ num: 4 });
    singlyLinkedList.addNode({ num: 3 });
    expect(singlyLinkedList.getSize()).toEqual(5);
    singlyLinkedList.filterList(({ num }) => num >= 3);

    expect(singlyLinkedList.getSize()).toEqual(3);
    expect(singlyLinkedList.toArray()).toEqual([
      { num: 5 },
      { num: 4 },
      { num: 3 },
    ]);
    expect(singlyLinkedList.getFirst()).toEqual({ num: 5 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 3 });
  });
  it("Filter #4", () => {
    singlyLinkedList.addNode({ num: 5 });
    singlyLinkedList.addNode({ num: 4 });
    singlyLinkedList.addNode({ num: 3 });
    singlyLinkedList.addNode({ num: 2 });
    singlyLinkedList.addNode({ num: 1 });
    expect(singlyLinkedList.getSize()).toEqual(5);
    singlyLinkedList.filterList(({ num }) => num >= 3);

    expect(singlyLinkedList.getSize()).toEqual(3);
    expect(singlyLinkedList.toArray()).toEqual([
      { num: 5 },
      { num: 4 },
      { num: 3 },
    ]);
    expect(singlyLinkedList.getFirst()).toEqual({ num: 5 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 3 });
  });
  it("Filter #5", () => {
    singlyLinkedList.addNode({ num: 5 });
    singlyLinkedList.addNode({ num: 2 });
    singlyLinkedList.addNode({ num: 3 });
    singlyLinkedList.addNode({ num: 1 });
    singlyLinkedList.addNode({ num: 4 });
    expect(singlyLinkedList.getSize()).toEqual(5);
    singlyLinkedList.filterList(({ num }) => num >= 3);

    expect(singlyLinkedList.getSize()).toEqual(3);
    expect(singlyLinkedList.toArray()).toEqual([
      { num: 5 },
      { num: 3 },
      { num: 4 },
    ]);
    expect(singlyLinkedList.getFirst()).toEqual({ num: 5 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 4 });
  });

  it("Filter #6", () => {
    singlyLinkedList.addNode({ num: 2 });
    singlyLinkedList.filterList(({ num }) => num >= 3);
    expect(singlyLinkedList.getFirst()).toEqual(undefined);
    expect(singlyLinkedList.getLast()).toEqual(undefined);
    expect(singlyLinkedList.getSize()).toEqual(0);
    expect(singlyLinkedList.toArray()).toEqual([]);
  });

  it("Filter #6", () => {
    singlyLinkedList.addNode({ num: 2 });
    singlyLinkedList.filterList(({ num }) => num >= 3);
    expect(singlyLinkedList.getFirst()).toEqual(undefined);
    expect(singlyLinkedList.getLast()).toEqual(undefined);
    expect(singlyLinkedList.getSize()).toEqual(0);
    expect(singlyLinkedList.toArray()).toEqual([]);
  });

  it("Filter #7", () => {
    singlyLinkedList.addNode({ num: 3 });
    singlyLinkedList.addNode({ num: 2 });
    singlyLinkedList.filterList(({ num }) => num >= 3);
    expect(singlyLinkedList.getFirst()).toEqual({ num: 3 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 3 });
    expect(singlyLinkedList.getSize()).toEqual(1);
    expect(singlyLinkedList.toArray()).toEqual([{ num: 3 }]);
  });
  it("getIndex", () => {
    singlyLinkedList.addNode({ num: 5 });
    singlyLinkedList.addNode({ num: 2 });
    singlyLinkedList.addNode({ num: 3 });
    singlyLinkedList.addNode({ num: 1 });
    singlyLinkedList.addNode({ num: 4 });
    expect(singlyLinkedList.getIndex(0)).toEqual({ num: 5 });
    expect(singlyLinkedList.getIndex(1)).toEqual({ num: 2 });
    expect(singlyLinkedList.getIndex(2)).toEqual({ num: 3 });
    expect(singlyLinkedList.getIndex(3)).toEqual({ num: 1 });
    expect(singlyLinkedList.getIndex(4)).toEqual({ num: 4 });
  });

  it("removeAtIndex #1", () => {
    expect(singlyLinkedList.removeAtIndex(0)).toEqual(null);
    expect(singlyLinkedList.getFirst()).toEqual(undefined);
    expect(singlyLinkedList.getLast()).toEqual(undefined);
    expect(singlyLinkedList.toArray()).toEqual([]);
  });
  it("removeAtIndex #2", () => {
    singlyLinkedList.addNode({ num: 5 });
    expect(singlyLinkedList.removeAtIndex(0)).toEqual({ num: 5 });
    expect(singlyLinkedList.getFirst()).toEqual(undefined);
    expect(singlyLinkedList.getLast()).toEqual(undefined);
    expect(singlyLinkedList.toArray()).toEqual([]);
  });
  it("removeAtIndex #3", () => {
    singlyLinkedList.addNode({ num: 5 });
    singlyLinkedList.addNode({ num: 2 });
    expect(singlyLinkedList.removeAtIndex(0)).toEqual({ num: 5 });
    expect(singlyLinkedList.getFirst()).toEqual({ num: 2 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 2 });
    expect(singlyLinkedList.toArray()).toEqual([{ num: 2 }]);
  });
  it("removeAtIndex #4", () => {
    singlyLinkedList.addNode({ num: 5 });
    singlyLinkedList.addNode({ num: 2 });
    expect(singlyLinkedList.removeAtIndex(1)).toEqual({ num: 2 });
    expect(singlyLinkedList.getFirst()).toEqual({ num: 5 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 5 });
    expect(singlyLinkedList.toArray()).toEqual([{ num: 5 }]);
  });
  it("removeAtIndex #5", () => {
    singlyLinkedList.addNode({ num: 5 });
    singlyLinkedList.addNode({ num: 2 });
    singlyLinkedList.addNode({ num: 3 });
    expect(singlyLinkedList.removeAtIndex(0)).toEqual({ num: 5 });
    expect(singlyLinkedList.getFirst()).toEqual({ num: 2 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 3 });
    expect(singlyLinkedList.toArray()).toEqual([{ num: 2 }, { num: 3 }]);
  });
  it("removeAtIndex #6", () => {
    singlyLinkedList.addNode({ num: 5 });
    singlyLinkedList.addNode({ num: 2 });
    singlyLinkedList.addNode({ num: 3 });
    expect(singlyLinkedList.removeAtIndex(1)).toEqual({ num: 2 });
    expect(singlyLinkedList.getFirst()).toEqual({ num: 5 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 3 });
    expect(singlyLinkedList.toArray()).toEqual([{ num: 5 }, { num: 3 }]);
  });
  it("removeAtIndex #7", () => {
    singlyLinkedList.addNode({ num: 5 });
    singlyLinkedList.addNode({ num: 2 });
    singlyLinkedList.addNode({ num: 3 });
    expect(singlyLinkedList.removeAtIndex(2)).toEqual({ num: 3 });
    expect(singlyLinkedList.getFirst()).toEqual({ num: 5 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 2 });
    expect(singlyLinkedList.toArray()).toEqual([{ num: 5 }, { num: 2 }]);
  });

  it("reverse list", () => {
    singlyLinkedList.addMany([
      { num: 1 },
      { num: 2 },
      { num: 3 },
      { num: 4 },
      { num: 5 },
      { num: 6 },
      { num: 7 },
    ]);

    singlyLinkedList.reverseList();

    expect(singlyLinkedList.getFirst()).toEqual({ num: 7 });
    expect(singlyLinkedList.getLast()).toEqual({ num: 1 });
    expect(singlyLinkedList.toArray()).toEqual([
      { num: 7 },
      { num: 6 },
      { num: 5 },
      { num: 4 },
      { num: 3 },
      { num: 2 },
      { num: 1 },
    ]);
  });
});
