# @karl_fang/mylibs

## 前言

- 这是我的第一个npm包，做这个为了熟悉下发包的流程，也会有成就感，如果喜欢的话给个🌟吧，以后会更新的
- **description**：This is a JS library that packages the common functions of mathematics, data structure, function, URL and array.

> 描述：这是一个JS库，打包了数学、数据结构、函数、URL和数组的常用函数。

- 关键词：**javascript tools**

- 版本：**1.0.2**
- 作者：**Karl_fang**
- 发布时间：**2022-04-07**
- NPM包地址：https://www.npmjs.com/package/@karl_fang/mylibs

- 所提供的类名：

|    类名     |           功能           |
| :---------: | :----------------------: |
| ArrayTools  |   提供了数组相关的函数   |
|  MathTools  |   提供了数学相关的函数   |
| MyFunctions |      提供了常用函数      |
|  MyRegExp   | 提供了正则匹配的相关函数 |
|    MyURL    |   提供了URL的相关函数    |

- 下载安装npm包：

```shell
npm i @karl_fang/mylibs
```

- 卸载npm包：

```shell
npm unistall @karl_fang/mylibs
```

- 使用npm包的函数：

```vue
// HelloWorld.vue
<script>
import { MythTools } from '@karl_fang/mylibs'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    console.log(MythTools.add([1, 2, 3]));
  },
};
</script>
```



[TOC]

## 1. ArrayTools

- 类名：**ArrayTools**

### 1.1 getUnique

**功能**：数组去重

**语法**：`arr.getUnique();`

**参数**：{void}

**返回值**：{array} 去重后的数组

**实例**：

```js
import ArrayTools from './src/array/array.js';
let arr = new ArrayTools([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]);
console.log(arr.getUnique());
// [ 1, 2, 3, 4 ]
```

### 1.2 zero

**功能**：产生全为0元素的指定行列数数组

**语法**：`ArrayTools.zero(row, column);`

**参数**：

- `row`：`可选` {number}  行数 ，默认值为`1`
- `column`：`可选` {number} 列数，默认值为`1`

**返回值**：{number[]} 返回row*column个元素的全0数组

**实例**：

```js
import ArrayTools from './src/array/array.js';
console.log(ArrayTools.zero());
// [ [ 0 ] ]
console.log(ArrayTools.zero(2));
// [ [ 0 ], [ 0 ] ]
console.log(ArrayTools.zero(undefined, 3));
// [ [ 0, 0, 0 ] ]
console.log(ArrayTools.zero(3, 4));
// [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]
```

### 1.3 unit

**功能**：产生单位矩阵

**语法**：`ArrayTools.unit(order);`

**参数**：

- `order`：`可选` {number}  单位矩阵阶数，默认值为`1`

**返回值**：{number[]} 返回order阶的单位矩阵

**实例**：

```js
import ArrayTools from './src/array/array.js';
console.log(ArrayTools.unit());
// [ [ 1 ] ]
console.log(ArrayTools.unit(3));
// [ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]
```

### 1.4 matrix

**功能**：填充矩阵

**语法**：`ArrayTools.matrix(row, column, fill);`

**参数**：

- `row`：`可选` {number}  行数 ，默认值为`1`
- `column`：`可选` {number} 列数，默认值为`1`
- `fill`：`可选  `{number | string | boolean} 填充字符，默认为`0`

**返回值**：{array} 返回填充后的矩阵

**实例**：

```js
import ArrayTools from './src/array/array.js';
console.log(ArrayTools.matrix());
// [ [ 0 ] ]
console.log(ArrayTools.matrix(2, 3, false));
// [ [ false, false, false ], [ false, false, false ] ]
console.log(ArrayTools.matrix(3, 4, 1));
// [ [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ] ]
```

### 

## 2. MathTools

- 类名：MathTools

### 2.1 add

**功能**：数组元素之和

**语法**：`MathTools.add(nums);`

**参数**：

- `nums`：{number[]}  数字数组

**返回值**：{number} 数组中所有数字之和

**实例**：

```js
import MathTools from './src/math/math.js';
console.log(MathTools.add([1, 2, 3, 4, 5]));
// 15
```

### 2.2 max

**功能**：数组最大值

**语法**：`MathTools.max(nums);`

**参数**：

- `nums`：{number[]}  数字数组

**返回值**：{number} 数组中最大值

**实例**：

```js
import MathTools from './src/math/math.js';
console.log(MathTools.max([1, 2, 3, 4, 5]));
// 5
```

### 2.3 min

**功能**：数组最小值

**语法**：`MathTools.min(nums);`

**参数**：

- `nums`：{number[]}  数字数组

**返回值**：{number} 数组中最小值

**实例**：

```js
import MathTools from './src/math/math.js';
console.log(MathTools.min([1, 2, 3, 4, 5]));
// 1
```

### 2.4 mean

**功能**：数组平均值

**语法**：`MathTools.mean(nums, precision);`

**参数**：

- `nums`：{number[]}  数字数组
- `precision`：`可选` {number} 保留的小数位数，默认保留`3`位小数

**返回值**：{string} 数组中平均值

**实例**：

```js
import MathTools from './src/math/math.js';
console.log(MathTools.mean([1, 2, 3, 4, 5]));
// 3.000
console.log(MathTools.mean([1, 2, 3, 4, 5], 2));
// 3.00
console.log(MathTools.mean([1, 2, 3, 4, 5], 0));
// 3
```

### 2.5 random

**功能**：生成指定范围内的随机数

**语法**：`MathTools.random(lower, upper, precision);`

**参数**：

- `lower`：{number} 下界
- `upper` ：{number} 上界
- `precision`：`可选` {number} 保留的小数位数，默认保留`0`位小数

**返回值**：{string} 随机数

**实例**：

```js
import MathTools from './src/math/math.js';
console.log(MathTools.random(1, 100));
// 29
console.log(MathTools.random(1, 100, 2));
// 79.26
```

### 2.6 range

**功能**：生成指定范围内步长固定的数组

**语法**：`MathTools.range(start, end, step);`

**参数**：

- `lower`：{number} 下界
- `upper` ：{number} 上界
- `step`：`可选` {number} 步长，默认为`1`

**返回值**：{number[]} 

**实例**：

```js
import MathTools from './src/math/math.js';
console.log(MathTools.range(3, 10));
// [3, 4, 5, 6, 7, 8, 9, 10]
console.log(MathTools.range(3, 10, 2));
// [ 3, 5, 7, 9 ]
```

### 2.7 generateSets

**功能**：产生数据集合

**语法**：`MathTools.generateSets(lower, upper, num, ifUnique);`

**参数**：

- `lower`：{number} 下界
- `upper` ：{number} 上界
- `num`：`可选` {number} 产生数字的个数，默认为`1`
- `ifUnique`：`可选` {boolean} 数组中是否含有相同元素，默认为`false`

**返回值**：{number[]} 

**实例**：

```js
import MathTools from './src/math/math.js';
console.log(MathTools.generateSets(3, 10, 10)); 
// [6, 5, 9, 3, 4, 8, 4, 8, 9, 7]
console.log(MathTools.generateSets(3, 10, 8, true)); 
// [9, 5, 6, 8, 7, 10, 3, 4]
console.log(MathTools.generateSets(3, 10, 9, true)); 
// 当ifUnique为true时，返回的数组个数最大为(upper-lower+1)
// [9, 5, 6, 8, 7, 10, 3, 4]
```

### 2.8 sortBy

**功能**：按属性排序

**语法**：`MathTools.sortBy(array, param, method);`

**参数**：

- `array`：{array} 数组
- `param` ：{string} 指定的键值
- `method`：{'desc' | 'asc'} 排序方法，默认为`desc`

**返回值**：{number[]} 

**实例**：

```js
import MathTools from './src/math/math.js';
let arr = [{ m: 'ab', n: 3 }, { m: 'd', n: 1 }, { m: 'c', n: 2 }]
console.log(MathTools.sortBy(arr, 'm', 'desc'));
// [ { m: 'd', n: 1 }, { m: 'c', n: 2 }, { m: 'ab', n: 3 } ]
console.log(MathTools.sortBy(arr, 'm', 'asc'));
// [ { m: 'ab', n: 3 }, { m: 'c', n: 2 }, { m: 'd', n: 1 } ]
console.log(MathTools.sortBy(arr, 'n', 'desc'));
// [ { m: 'ab', n: 3 }, { m: 'c', n: 2 }, { m: 'd', n: 1 } ]
console.log(MathTools.sortBy(arr, 'n', 'asc'));
// [ { m: 'd', n: 1 }, { m: 'c', n: 2 }, { m: 'ab', n: 3 } ]
```

### 2.9 multiple和pow

- 实现了乘法和幂运算
- 也就是为了自己简单学习下快速幂算法
- 调用方法：

```js
import MathTools from './src/math/math.js';
console.log(MathTools.multiple(30, 40)); 
// 1200
console.log(MathTools.pow(3, 7));
// 2187
```



## 3 MyFunctions

### 3.1 currying

**功能**：函数柯里化

**语法**：`MyFunctions.currying(fn, ...initArgs);`

**参数**：

- `fn`：{function} 要柯里化的原函数
- `initArgs` ：{any} 初始化fn的参数

**返回值**：{function} 柯里化后的函数

**实例**：

```js
import MyFunctions from './src/function/general.js';
function add(a, b, c) {
  return a + b + c;
}
let fn = MyFunctions.currying(add);
console.log(fn(1, 2, 3)); // 6
console.log(fn(1, 2)(3)); // 6
console.log(fn(1)(2)(3)); // 6
```

### 3.2 clone

**功能**：浅拷贝

**语法**：`MyFunctions.clone(newObj, oldObj);`

**参数**：

- `newObj`：{object} 拷贝后的对象
- `oldObj` ：{object} 要拷贝的对象

**返回值**：{void} 将oldObj拷贝给newObj

**实例**：

```js
import MyFunctions from './src/function/general.js';
let obj1 = {a:1, b:[1,2,3]}
let obj2 = {}
MyFunctions.clone(obj2, obj1);
obj1.b[0] = 999;
console.log(obj2);
// { a: 1, b: [ 999, 2, 3 ] }
```

### 3.3 deepClone

**功能**：深拷贝

**语法**：`MyFunctions.deepClone(newObj, oldObj);`

**参数**：

- `newObj`：{object} 拷贝后的对象
- `oldObj` ：{object} 要拷贝的对象

**返回值**：{void} 将oldObj拷贝给newObj

**实例**：

```js
import MyFunctions from './src/function/general.js';
let obj1 = {a:1, b:[1,2,3]}
let obj2 = {}
MyFunctions.deepClone(obj2, obj1);
obj1.b[0] = 999;
console.log(obj2);
// { a: 1, b: [ 1, 2, 3 ] }
```

### 3.4 debounce

**功能**：防抖

**语法**：`MyFunctions.debounce(fn, delay);`

**参数**：

- `fn`：{function} 绑定防抖的函数
- `delay` ：{number} 延迟时间

**返回值**：{function} 返回防抖函数

**实例**：

```js
import MyFunctions from './src/function/general.js';
let buttons = document.querySelector('button');
// 调用需传参的函数
function click(name){console.log('click' + name);}
buttons.addEventListener('click', MyFunctions.debounce(click, 1000).bind(buttons, 'hahaha'));

// 调用不需传参的函数
function click1(){console.log('click');}
buttons.addEventListener('click', MyFunctions.debounce(click, 2000)
```

### 3.5 throttle

**功能**：节流

**语法**：`MyFunctions.throttle(fn, delay);`

**参数**：

- `fn`：{function} 绑定防抖的函数
- `delay` ：{number} 延迟时间

**返回值**：{function} 返回节流函数

**实例**：

```js
import MyFunctions from './src/function/general.js';
let buttons = document.querySelector('button');
// 调用需传参的函数
function click(name){console.log('click' + name);}
buttons.addEventListener('click', MyFunctions.throttle(click, 1000).bind(buttons, 'hahaha'));

// 调用不需传参的函数
function click1(){console.log('click');}
buttons.addEventListener('click', MyFunctions.throttle(click, 2000)
```

### 3.6 timeFormat

**功能**：时间格式化

**语法**：`MyFunctions.timeFormat(time, format);`

**参数**：

- `time`：`可选` {string} 想要格式化的时间，默认值为`""`，不填则使用当前时间
- `format` ：`可选` {string} 想要转换成的时间格式，默认值为`""`

> YY：年，MM：月，DD：日，hh：小时，mm：分钟，ss：秒数，一定使用指定大小写的英文字母。

**返回值**：{string | number[]} format为`""`时返回格式化后的时间 ｜ format为合法格式时返回年月日时分秒的具体时间

**实例**：

```js
import MyFunctions from './src/function/general.js';
// 不填参数则用undefined占位
console.log(MyFunctions.timeFormat());
// [ 2022, 4, 7, 9, 40, 21 ]
console.log(MyFunctions.timeFormat("2022-1-1 13:23:47"));
// [ 2022, 1, 1, 13, 23, 47 ]
console.log(MyFunctions.timeFormat(undefined, "YY-MM-DD hh:mm:ss"));
// 2022-04-07 09:40:21
```

### 3.7 getDay

**功能**：时间转星期

**语法**：`MyFunctions.getDay(time, prefix);`

**参数**：

- `time`：`可选` {string} 合法时间字符串，默认值为`""`，不填则使用当前时间
- `prefix` ：`可选` {prefix} 字符串前缀，默认值为`"星期"`

**返回值**：{string} 返回具体星期结果

**实例**：

```js
import MyFunctions from './src/function/general.js';
console.log(MyFunctions.getDay()); // 星期四
console.log(MyFunctions.getDay(undefined, "周")); // 周四
console.log(MyFunctions.getDay("2022-1-1")); // 星期六
console.log(MyFunctions.getDay("2022-1-1", "周")); // 周六
```

### 3.8 imageToBase64

**功能**：图片转base64

**语法**：`MyFunctions.imageToBase64(img);`

**参数**：

- `img`：{object} 图片的DOM对象

**返回值**：{string} 图片转换后的base64结果

**实例**：

```js
import MyFunctions from './src/function/general.js';
let image = new Image();
image.src = './js.png';
image.onload = function () {
  console.log(MyFunctions.imageToBase64(image));
}
```

### 3.9 intToRoman

**功能**：整数转罗马数字

**语法**：`MyFunctions.intToRoman(num);`

**参数**：

- `num`：{number} 正整数

**返回值**：{string} 罗马数字

**实例**：

```js
import MyFunctions from './src/function/general.js';
console.log(MyFunctions.intToRoman(945)); // CMXLV
```

### 3.10 intToChinese

**功能**：整数转中文汉字

**语法**：`MyFunctions.intToRoman(num, ifCapital);`

**参数**：

- `num`：{number} 正实数
- `ifCapital`：{boolean} 是否转大写汉字

> - 当ifCapital为false时只能输入正整数: 0 ～ 999999999999；
>
> - 当ifCapital为true时的输入范围: 0 ～ 999999999999.99

**返回值**：{string} 中文汉字

**实例**：

```js
import MyFunctions from './src/function/general.js';
console.log(MyFunctions.intToChinese(2032100443.08, true));
// 贰拾亿叁仟贰佰壹拾万零肆佰肆拾叁元捌分
console.log(MyFunctions.intToChinese(400.00, true));
// 肆佰元整
console.log(MyFunctions.intToChinese(111400.067, true));
// 壹拾壹万壹仟肆佰元柒分
console.log(MyFunctions.intToChinese(111400.067));
// 一十一万一千四百
console.log(MyFunctions.intToChinese(100000000.067));
// 一亿
console.log(MyFunctions.intToChinese(100000000));
// 一亿
```

## 4 MyRegExp

- 类名：MyRegExp

### 4.1 ifValidUserName

**功能**：匹配用户名

**语法**：`MyRegExp.ifValidUserName(string, start, end);`

**参数**：

- `string`：{string} 要匹配的字符串
- `start` ：`可选` {number} 最小长度，默认值为`4`
- `end` ：`可选` {number} 最大长度，默认值为`16`

> 匹配数字大小写字母_-

**返回值**：{boolean}

**实例**：

```js
import MyRegExp from './src/function/regRep.js';
console.log(MyRegExp.ifValidUserName('#123fdas')); // false
console.log(MyRegExp.ifValidUserName('123fdas')); // true
console.log(MyRegExp.ifValidUserName('123fdas', 1, 6)); // false
console.log(MyRegExp.ifValidUserName('123fdas', 6)); // true
console.log(MyRegExp.ifValidUserName('123fdas', undefined, 10)); // true
```

### 4.2 ifInteger

**功能**：匹配整数

**语法**：`MyRegExp.ifInteger(string, range);`

**参数**：

- `string`：{string} 要匹配的数字字符串
- `range` ：`可选` {"all" | "positive" | "negative"} 匹配范围，默认值为`all`

> "positive": 正整数，"negative": 负整数，"all": 整数

**返回值**：{boolean}

**实例**：

```js
import MyRegExp from './src/function/regRep.js';
console.log(MyRegExp.ifInteger('-123')); // true
console.log(MyRegExp.ifInteger('-123', 'positive')); //false
console.log(MyRegExp.ifInteger('+123', 'positive')); // true
console.log(MyRegExp.ifInteger('123', 'positive')); // true
console.log(MyRegExp.ifInteger('-123', 'negative')); // true
```

### 4.3 ifFloat

**功能**：匹配浮点数

**语法**：`MyRegExp.ifFloat(string, range);`

**参数**：

- `string`：{string} 要匹配的数字字符串
- `range` ：`可选` {"all" | "positive" | "negative"} 匹配范围，默认值为`all`

> "positive": 正整数，"negative": 负整数，"all": 整数

**返回值**：{boolean}

**实例**：

```js
import MyRegExp from './src/function/regRep.js';
console.log(MyRegExp.ifFloat('-123.05')); // true
console.log(MyRegExp.ifFloat('-123', 'positive')); //false
console.log(MyRegExp.ifFloat('+123', 'positive')); // true
console.log(MyRegExp.ifFloat('123.80', 'positive')); // true
console.log(MyRegExp.ifFloat('-123.00', 'negative')); // true
```

### 4.4 其他匹配

- 传入的参数都只有一个为**需要判断的字符串{string}**

|     函数名      |       功能       |         参数（类型）         | 返回值（类型）  |
| :-------------: | :--------------: | :--------------------------: | :-------------: |
|  ifValidEmail   |     匹配邮箱     |     要匹配的邮箱(string)     | 布尔值(boolean) |
|  ifValidPhone   |    匹配手机号    |    要匹配的手机号(string)    | 布尔值(boolean) |
|  ifValidIDCard  |    匹配身份证    |    要匹配的身份证(string)    | 布尔值(boolean) |
|  ifValidRGBHex  | 匹配十六进制颜色 | 要匹配的十六进制颜色(string) | 布尔值(boolean) |
|  ifOnlyChinese  |   匹配只有汉字   |    要匹配的字符串(string)    | 布尔值(boolean) |
|  ifOnlyNumber   |   匹配只有数字   |    要匹配的字符串(string)    | 布尔值(boolean) |
|  ifOnlyLetter   | 匹配只有英文字母 |    要匹配的字符串(string)    | 布尔值(boolean) |
| ifOnlyLowercase | 匹配只有小写字母 |    要匹配的字符串(string)    | 布尔值(boolean) |
| ifOnlyUppercase | 匹配只有大写字母 |    要匹配的字符串(string)    | 布尔值(boolean) |



## 5 MyURL

- 类名：MyURL

> 该类的方法是可以实例调用的，因此要先`new MyURL(合法的url)`，然后再使用方法

### 5.1 getURLParams

**功能**：获取URL参数

**语法**：`url.getURLParams(param);`

**参数**：

- `params`：{string[]} 含有URL合法属性的数组

> 有效值包含hash, host, hostname, href, origin, password, pathname, port, protocol, search, searchParams, username

**返回值**：{object} 以params中的元素为键值的对象

**实例**：

```js
import MyURL from './src/function/URL.js';
let url = new MyURL('http://127.0.0.1:5500/test.html?b=aaa&c=123&a=1234');
console.log(url.getURLParams(['host', 'href'])); 
// {host: '127.0.0.1:5500', href: 'http://127.0.0.1:5500/test.html?b=aaa&c=123&a=1234'}
```

### 5.2 getURLQueryParams

**功能**：获取URL中query的参数

**语法**：`url.getURLParams(param, returnType);`

**参数**：

- `params`：`可选` {string[]} URL中query含有参数的数组，如果不传则返回所有参数，默认值为`[]`
- `returnType`：`可选` {'object' | 'string'} URL中query含有参数的数组，如果不传则返回所有参数，默认值为`object`

> 有效值包含'object' 和 'string'，如果选择'string'，那么会返回完整的search，不会被params的影响，可以与appendURLQueryParams()和deleteURLQueryParams()配合使用。

**返回值**：{object ｜ string} 以params中的元素为键值的对象

**实例**：

```js
import MyURL from './src/function/URL.js';
let url = new MyURL('http://127.0.0.1:5500/test.html?b=aaa&c=123&a=1234');
console.log(url.getURLQueryParams(['a'])); 
// {a: '1234'}
console.log(url.getURLQueryParams());
// {b: 'aaa', c: '123', a: '1234'}
console.log(url.getURLQueryParams(['a', 'b'], 'string'));
// b=aaa&c=123&a=1234
console.log(url.getURLQueryParams(undefined, 'string'));
// b=aaa&c=123&a=1234
```

### 5.3 appendURLQueryParams

**功能**：插入URL搜索参数:支持链式编程

**语法**：`url.appendURLQueryParams(paramObj);`

**参数**：

- `paramObj`：{object} 以键值对的形式输入想要插入的新搜索参数

**返回值**：{MyURL} 返回实例对象

### 5.4 deleteURLQueryParams

**功能**：删除URL搜索参数:支持链式编程

**语法**：`url.deleteURLQueryParams(params);`

**参数**：

- `params`：{string[]} 想要删除的搜索参数

**返回值**：{MyURL} 返回实例对象

**实例**：

```js
import MyURL from './src/function/URL.js';
let url = new MyURL('http://127.0.0.1:5500/test.html?b=aaa&c=123&a=1234');
let res = url
	.appendURLQueryParams({user: 'karl'})
	.deleteURLQueryParams(['a', 'b'])
	.getURLQueryParams(undefined, 'string');
console.log(res);
// c=123&user=karl
```

### 5.5 hasURLQueryParams

**功能**：判断指定的键名对应的值是否存在

**语法**：`url.deleteURLQueryParams(paramObj);`

**参数**：

- `params`：{string[]} 要判断的键值所组成的数组

**返回值**：{boolean[]} params[i]的查询结果

**实例**：

```js
import MyURL from './src/function/URL.js';
let url = new MyURL('http://127.0.0.1:5500/test.html?b=aaa&c=123&a=1234');
console.log(url.hasURLQueryParams(['a', 'b', 'd'])); 
// [true, true, false]
```

## License

**MIT**
