/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-27 14:32:28
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-27 16:05:13
 */

//布尔值
const isDone: boolean = false;

//数字
const decLiteral: number = 6;

//字符串
const name2: string = 'bob';


//数组
const list: number[] = [1, 2, 3];
const list2: string[] = ['1', '2'];
// 数组泛型
const list3: Array<number> = [1, 2, 3];
const list4: Array<string> = ['1'];


//元组 Tuple
const x: [string, number] = ['123', 2];

//枚举  默认情况下，从0开始为元素编号
enum Color { Red, Green, Blue }

// 手动赋值枚举
enum Color2 { Red = 1, Green = 3, Blue = 5 }


// any 可以赋任意值
const ay: any = '1';


// Null 和 Undefined
// 1、undefined和null两者各自有自己的类型分别叫做undefined和null;
// 2、默认情况下null和undefined是所有类型的子类型。


//Never---很少用
// 表示的是那些永不存在的值的类型;
// 返回never的函数必须存在无法达到的终点

//断言语法
const someValue: any = 'this is a string--';
const a = (someValue as string).length;
console.log(a);

export { };