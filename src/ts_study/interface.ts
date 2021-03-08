interface ITest {
    name: string;
    age?: number;//可选属性
    readonly y: number; //只读属性
}
interface ITest2 {
    name: string;
    (name: string): void//方法
}

// ------------------------------------------------------------------------------------------------------------------------
//函数类型 接口
interface ISearchFunc {
    (source: string, subString: string): boolean;
}

let f1: ISearchFunc
f1 = function name(s: string, b: string): boolean {
    console.log(s, b);
    return false
}
// ------------------------------------------------------------------------------------------------------------------------

// 可索引的类型----。。。。用的不多
// 它描述了对象索引的类型，还有相应的索引返回值类型。
interface StringArray {
    [index: number]: string;
}

// ------------------------------------------------------------------------------------------------------------------------

// 实现一个接口
class Pes implements ITest {
    name = "mt";
    y = 1
}

console.log(new Pes(), '...');
// ------------------------------------------------------------------------------------------------------------------------
// 继承接口
interface IAi {
    name: string;
}
interface IA2 {
    sex: string;
}

//继承两个接口的属性
interface IA3 extends IAi, IA2 {
    as: string
}

//继承一个接口的属性
interface IA4 extends IAi {
    age: number;
}

class P2 implements IA4 {
    name = 'mt'
    age = 12
}


export { }