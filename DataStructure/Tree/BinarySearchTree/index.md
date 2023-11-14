# Binary Search Tree

## WHAT?

> `이진탐색 트리`란 노드로 이루어진 이진 트리형태의 데이터 구조다.

## 특징

- `왼쪽` 하위 트리는 노드의 key보다 `작은` 값들의 노드들로만 이루어져 있다.
- `오른쪽` 하위 트리는 노드의 key보다 `큰` 값들의 노드들로만 이루어져 있다.
- 따라서, 이진탐색을 할 떄 매우 유리하다.
- 오른쪽과 왼쪽 각각의 하위 트리들 또한 이진 탐색 트리여야한다.

## 형태

![Binary Search Tree](/images/bst-21.png)

## 구현

- BST 자료 구조를 통해 여러 연산들을 할 수 있다

  - 삽입
  - 순환 (traversal)
  - 삭제

- 트리를 만들기 위해 구성할 노드들을 초기화해준다.
- 값은 `key`, 왼쪽과 오른쪽 노드는 `null`로 초기화 해준다.

```js
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
```

### 삽입 : O(n)

```js
function insert(node, key) {
  if (node === null) return new Node(key); // 만약 트리가 비어있다면 새로운 노드를 생성한다.
  if (key < node.key) node.left = insert(node.left, key);
  if (key > node.key) node.right = insert(node.right, key);
  return node;
}
```

### Traversal

#### inorder : 왼쪽 자식 노드 방문 -> root 방문 -> 오른쪽 자식 노드 방문 (O(n))

```js
function inorder(root) {
  if (root != null) {
    inorder(root.left);
    console.log(root.key);
    inorder(root.right);
  }
}
```

#### preorder 순회 : (O(n))

#### postorder 순회 : (O(n))

#### breadth first 순회 : (O(n))

### 특정 높이에 있는 노드들 모두 출력: (O(n))

### leaf 노드들 모두 출력(자식 노드가 없는 노드들): (O(n))

### BST의 가장 오른쪽 노드들만 보기: (O(n))

### BST의 높이 구하기: (O(n))

### 노드 삭제 : O(log N)

- 삭제해야하는 노드의 위치에 따라 다르다
  - leaf 노드(자식 노드가 없는 노드 일 경우) : 해당 노드의 값을 null로 하면 된다
  - 자식 노드가 `하나` 있을 경우 : 자식 노드로 대체하면 된다.
  - 자식 노드가 `두개` 있을 경우
    - 삭제 노드를 대체할 노드가 어떤 노드여야할 지 결정해야함
    - 대체해야할 노드를 오른쪽, 또는 왼쪽 노드에서 고르면
      - 왼쪽 노드일 경우 : 왼쪽 하위 트리에서 가장 큰 값으로 대체해야한다.
      - 오른쪽 노드일 경우 : 오른쪽 하위 트리에서 가장 작은 값으로 대체해야한다.

### 가장 작은 값의 노드 구하기 : O(log N)

### BST 전체 노드의 개수 구하기 :O(N)

### BST 삭제하기 :O(N)

## 적용

- [그래프 알고리즘]
- [우선순위 큐]() : 가장 우선순위가 높은 원소가 트리의 root에 있고, 낮은 원소들은 하위 트리에 저장되는 자료 구조
- [Self-balancing 이진트리]()
  - [AVL]()
  - [Red Black tree]()
- 데이터 저장과 회수 : 특정 기록을 `O(logN)` 시간만에 찾는데 사용될 수 있다.

## 장단점

### 장점

- 빠른 검색 속도 : BST에서 특정값을 찾는 평균 시간 복잡도는 `O(logN)`이다. N은 트리의 노드의 개수이다.
  - 이는 `O(N)` 시간복잡도를 지닌 [배열]()이나 [연결리스트]()보다 빠르다.
- In-order 순회등을 통해 데이터를 sort하는데 유용하게 쓰일 수 있다.
- 효율적인 공간 사용 : [배열]()이나 [연결리스트]()와 달리 잉여 정보를 저장하지 않는다.

### 단점

- Skewed trees : 트리가 균형있지 않고 한 쪽으로 치워친다면 삽입,삭제, 검색의 시간복잡도는 `O(n) `가 된다.
- Self-balancing 이진트리는 삽입/삭제 시 트리를 밸런싱하는 시간이 든다
- 효율성 : 중복 데이터가 있는 경우 공간 낭비를 하기 때문에 비효율적일 수 있다.

## 문제 풀이

- [길찾기 게임](https://school.programmers.co.kr/learn/courses/30/lessons/42892/solution_groups?language=javascript&type=my)

# Related Topics

- [priority queue]()
- [배열(Array)]()
- [연결리스트(Linked List)]()
- [AVL]()
- [Red black tree]()

# References

-[geeksforgeeks : bst](https://www.geeksforgeeks.org/introduction-to-binary-search-tree-data-structure-and-algorithm-tutorials/)
