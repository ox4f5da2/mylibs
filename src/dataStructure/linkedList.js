function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
// args接受为链表最后一个节点指向的之前某个节点下标,一个参数，数值
export default class LinkedList {
  constructor(array, ...args) {
    this.cycleIndex = args[0];
    this.length = array.length;
    this.cycleNode = null;
    this.head = this.arrayToLinkedList(array);
  }

  /**
   * 将数组转化成链表
   * @param {number[] | string[] | boolean[]} array 含有原始值的数组
   * @returns {treeNode} 链表的头
   */
  arrayToLinkedList(array) {
    let list = new ListNode('head'), temp = list; // temp是用来防止最后得到的list是指向链表末尾
    for (let i = 0; i < array.length; i++) {
      temp.next = new ListNode(array[i]);
      temp = temp.next;
    }
    if (this.cycleIndex >=0 ) {
      if (this.cycleIndex < array.length) {
        let copyList = list, copyIndex = this.cycleIndex;
        while (copyIndex >= 0) {
          copyList = copyList.next;
          copyIndex--;
        }
        temp.next = copyList;
        this.cycleNode = copyList;
      }
      else {
        throw new Error("下标的数值不在[0, 数组长度)范围内!");
      }
    }
    return list.next;
  }

  /**
   * 将环形链表或普通链表打印
   * @example let list = new LinkedList([2, 4, 6, 5, 3]); // 普通链表
   * list.toString(); // 2 --> 4 --> 6 --> 5 --> 3
   * let list = new LinkedList([2, 4, 6, 5, 3], 2); // 环形链表
   * list.toString(); // 2 --> 4 --> 6 --> 5 --> 3 --> [Circular *3 from index=2] 6...
   */
  toString() {
    let currentNode = this.head, array = [];
    while (currentNode && array.length <= this.length) {
      array.push(currentNode.val);
      if (array.length > this.length) {
        array.splice(array.length - 1, 1, `[Circular *${this.length - this.cycleIndex} from index=${this.cycleIndex}] ${this.cycleNode.val}...`);
      }
      currentNode = currentNode === null? currentNode : currentNode.next;
    }
    console.log(array.join(" --> "));
  }
  
  static LinkedListToString(head) {
    /**
     * @param {ListNode} head
     * @return {void}
     * 只展示单向链表,不能展示有环的链表.不传值默认从实例的开头开始,也可以传其他链表的head节点
     */
    let currentNode = head, array = [];
    while (currentNode) {
      array.push(currentNode.val);
      currentNode = currentNode.next;
    }
    console.log(array.join(" --> "));
  }
}