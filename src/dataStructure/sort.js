export default class Sort {
  /**
   * 冒泡排序
   * @param {number[]} array 
   * @returns 排序后的数组
   */
  bubbleSort (array) {
    let startTime = + new Date();
    for (let i = array.length; i > 0; --i) {
      for (let j = 1; j < i; ++j) {
        if (array[j - 1] > array[j]) {
          [array[j - 1], array[j]] = [array[j], array[j - 1]]
        }
      }
    }
    let endTime = + new Date();
    console.log("冒泡排序用时:" + (endTime - startTime) + "ms");
    return array;
  }

  /**
   * 选择排序
   * @param {number[]} array 
   * @returns 排序后的数组
   */
  selectionSort (array) {
    let startTime = + new Date();
    for (let i = 0, len = array.length; i < len; ++i) {
      let index = i;
      for (let j = i; j < len; ++j) {
        if (array[j] < array[index]) {
          index = j;
        }
      }
      [array[i], array[index]] = [array[index], array[i]];
    }
    let endTime = + new Date();
    console.log("选择排序用时:" + (endTime - startTime) + "ms");
    return array;
  }

  /**
   * 插入排序
   * @param {number[]} array 
   * @returns 排序后的数组
   */
  insertionSort (array) {
    let startTime = + new Date();
    for (let i = 1, len = array.length; i < len; ++i) {
      let temp = array[i];
      for (let j = i - 1; j > 0; --j) {
        if (temp < array[j]) {
          array[j + 1] = array[j];
        }
        else {
          array[j + 1] = temp;
          break;
        }
      }
    }
    let endTime = + new Date();
    console.log("插入排序用时:" + (endTime - startTime) + "ms");
    return array;
  }

  /**
   * 希尔排序
   * @param {number[]} array 
   * @returns 排序后的数组
   */
  shellSort (array) {
    let startTime = + new Date();
    let step = calculateShellStep(array);
    while (step >= 1) {
      for (let i = step, len = array.length; i < len; i++) {
        for (let j = i - step; j >= 0; j -= step) {
          if (array[j + step] < array[j]) {
            [array[j + step], array[j]] = [array[j], array[j + step]];
          }
          else break;
        }
      }
      step = (step - 1) / 3;
    }
    let endTime = + new Date();
    console.log("希尔排序用时:" + (endTime - startTime) + "ms");
    return array;
    // 动态计算希尔排序的间隔
    function calculateShellStep(array) {
      let step = 1, len = array.length;
      while (step < len / 3) step = 3 * step + 1;
      return step;
    }
  }

  /**
   * 快速排序
   * @param {number[]} array 
   * @returns 排序后的数组
   */
  quickSort (array) {
    let [left, right] = [0, array.length - 1];
    recursion(left, right);
    return array;
    function recursion(left, right) {
      if (left > right) return;
      let temp = array[left];
      let [copyLeft, copyRight] = [left, right];
      while (left < right) {
        while (left < right && array[right] >= temp) right--;
        while (left < right && array[left] <= temp) left++;
        [array[left], array[right]] = [array[right], array[left]];
      }
      [array[copyLeft], array[left]] = [array[left], array[copyLeft]];
      recursion(copyLeft, left - 1);
      recursion(left + 1, copyRight);
    }

  }
}