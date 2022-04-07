export default class MinStack {
  constructor() {
    this.storage = [];
    this.minStack = []; // 保存最小值
    this.length = 0;
  }
  /** 
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.storage.push(val);
    if (this.length === 0) this.minStack.push(val);
    else {
      if (val < this.minStack[this.length - 1]) this.minStack.push(val);
      else this.minStack.push(this.minStack[this.length - 1]);
    }
    this.length++;
  }
  /**
   * @return {void}
   */
  pop() {
    this.storage.pop();
    this.minStack.pop();
    this.length = this.length - 1 < 0 ? 0 : this.length - 1;
  };

  /**
   * @return {number}
   */
  top () {
    return this.storage[this.length - 1];
  };

  /**
   * 返回当前栈内最小数
   * @return {number} 
   */
  getMin () {
    return this.minStack[this.length - 1];
  };
}