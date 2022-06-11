// Node type.
export type Node<T> = [T, Node<T> | null, Node<T> | null];

// Tree class.
export class Tree<T> {
  // Root node.
  root: Node<T>;

  // Constructor.
  constructor(root: Node<T>) {
    this.root = root;
  }

  // Returns the root node.
  getRoot(): T {
    return this.root[0];
  }

  // Returns the left node as a new tree.
  getLeft(): Tree<T> | null {
    return this.root[1] !== null ? new Tree<T>(this.root[1]) : null;
  }

  // Returns the right node as a new tree.
  getRight(): Tree<T> | null {
    return this.root[2] !== null ? new Tree<T>(this.root[2]) : null;
  }

  // Returns the pre-order traversal of the tree.
  preOrder(): T[] {
    return [
      this.getRoot(),
      ...(this.getLeft()?.preOrder() ?? []),
      ...(this.getRight()?.preOrder() ?? []),
    ];
  }

  // Returns the in-order traversal of the tree.
  inOrder(): T[] {
    return [
      ...(this.getLeft()?.inOrder() ?? []),
      this.getRoot(),
      ...(this.getRight()?.inOrder() ?? []),
    ];
  }

  // Returns the post-order traversal of the tree.
  postOrder(): T[] {
    return [
      ...(this.getLeft()?.postOrder() ?? []),
      ...(this.getRight()?.postOrder() ?? []),
      this.getRoot(),
    ];
  }
}
