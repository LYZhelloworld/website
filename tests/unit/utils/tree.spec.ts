import { Node, Tree } from "@/utils/tree";

describe("Tree", () => {
  it("should create a tree", () => {
    const tree = new Tree<number>([1, [2, null, null], [3, null, null]]);
    expect(tree.getRoot()).toBe(1);
    expect(tree.getLeft()?.getRoot()).toBe(2);
    expect(tree.getRight()?.getRoot()).toBe(3);
  });
  it("should produce correct pre-order traversal", () => {
    const tree = new Tree<number>([1, [2, null, null], [3, null, null]]);
    expect(tree.preOrder()).toEqual([1, 2, 3]);
  });
  it("should produce correct in-order traversal", () => {
    const tree = new Tree<number>([1, [2, null, null], [3, null, null]]);
    expect(tree.inOrder()).toEqual([2, 1, 3]);
  });
  it("should produce correct post-order traversal", () => {
    const tree = new Tree<number>([1, [2, null, null], [3, null, null]]);
    expect(tree.postOrder()).toEqual([2, 3, 1]);
  });
});
