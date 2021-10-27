/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-27 15:48:54
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-27 16:06:03
 */

// 泛型函数
function createArr<T>(len:number,value:T):Array<T>{
    const result:T[] = [];
    for (let index = 0; index < len; index++) {
        result.push(value);
    }
    return result;
}

//多个类型参数
function swap<T,U>(t:T,u:U):[U,T]{
    return [u,t];
}


interface Length{
    length:number;
}

//泛型继承接口
function logLength<T extends Length>(arg:T):T{
    console.log(arg.length);
    return arg;
}



//含有泛型的接口
interface CreateArray{
    <T>(length:number,value:T):Array<T>
}

const cr:CreateArray = function<T>(length:number,value:T):Array<T>{
    const result:T[] = [];
    for (let index = 0; index < length; index++) {
        result.push(value);
    }
    return result;
};


// 泛型接口   (泛型类与泛型接口一样，没什么区别)
interface Hello<T>{
    <T>(arg:number,val:T):T
}

//跟上面不一样 此时在使用泛型接口的时候，需要定义泛型的类型。 【 Hello<string> 】
const hel:Hello<string> = function<T>(arg:number,val:T):T{
    console.log(arg);
    return val;
};


//制定泛型的默认参数
function log<T = string>(arg:T):T{
    console.log(arg);
    return arg;
}