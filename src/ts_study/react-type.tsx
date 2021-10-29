/*
 * @Description:react 相关类型学习
 * @Autor: 小明～
 * @Date: 2021-10-29 10:01:18
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-29 10:43:53
 */
import React, { ChangeEvent, Component, CSSProperties, FC, MouseEvent, useState } from 'react';

type Props = {
    id:number;
}

// 纯函数组件本身不具备 State，所以没有状态，一切通过 Props
const VTest:FC<Props> = ({id}:Props)=>{
    console.log(id);

    const [style] = useState<CSSProperties>({
        color:'red',
        fontSize:'20px'
    });

    //事件处理
    const change = function(e:ChangeEvent<HTMLInputElement>){
        console.log(e.target.value); //有value属性
    };

    const click = function(e:MouseEvent){
        console.log(e.target); //e.target 没有value属性
    };
    return (
        <div>
            <h1 onClick={click}
                style={style} >FCProps</h1>
            <input onChange={change}
                type="text" />
        </div>
    );
};


type State = {
    value:string;
}


//联合类型  拥有 State和Props的共同属性
type AA = State & Props


function log(a:AA){
    console.log(a.id,a.value);
}




// 类组件比函数组件多了State
class VDemo extends Component<Props,State>{
    constructor(props:Props){
        super(props);
        console.log(props.id);
    }
    readonly state:State = {
        value:'123'
    }
}

// const AF = typeof VDemo;

type OO = typeof log