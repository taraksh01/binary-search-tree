const Node = (v) => {
  value = v;
  leftNode = null;
  rightNode = null;
  return { value, leftNode, rightNode };
};

const Tree = (array) => {
  root = buildTree(array, 0, array.length);

  const inorder = (root) => {
    if (root === null) {
      return;
    }
    console.log(root.value);
    inorder(root.leftNode);
    inorder(root.rightNode);
  };

  return inorder;
};

const buildTree = (array, l, r) => {
  if (l < r) {
    const mid = Math.floor((l + r) / 2);
    root = Node(mid);
    console.log(root);
    root.leftNode = buildTree(array, l, mid - 1);
    root.rightNode = buildTree(array, mid + 1, r);
  }

  return root;
};

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const sortedArray = array.sort((a, b) => a - b);
const bst = Tree(sortedArray);
bst.inorder();
