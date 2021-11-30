/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-11-09 09:48:01
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-09 11:21:39
 */


import React,{useContext,useReducer,createContext,useMemo} from 'react';

type Type1 = {
    count:number;
}
type IAction = {
    type:string,
    payload:any
}

type IStore = {
    state:Type1,
    dispatch:React.Dispatch<IAction>
}

function MyReducer(state:Type1={
    count:0
},action:IAction){
    const {type,payload} = action;
    const newState = Object.assign({},state);
    switch (type) {
    case 'add':
        newState.count+=1;
        break;
    case 'reduce':
        newState.count-=1;
        break;
    default:
        return newState;
    }
    return newState;
}

const initValue:Type1 = {
    count:0
};

const MyContext = createContext<IStore>({
    state:initValue,
    dispatch:()=>{}
});

function Inner(){
    const {state,dispatch} = useContext(MyContext);
    // console.log(state);
    return <h1 onClick={()=>{
        dispatch({type:'add',payload:''});
    }} >点我 + count==={state.count}</h1>;
}

//报错！！ 此写法是错误的
function getCount(){
    const {state} = useContext(MyContext);
    // console.log(state);
    return state.count;
}


function Child(){
    console.log(11);
    return <h1>child  我不需要重新渲染！！！</h1>;
}

function Child2(){
    return useMemo(() => {
        console.log(22,' 我只会打印一次！');
        return <h1>child2 使用usememo解决不依赖context变量却重新渲染组件的问题count==</h1>;
    }, []);
}



export default function Wrapper(){
    const [state, dispatch] = useReducer(MyReducer, initValue);
    function logCount(){
        const count = getCount();
        console.log(count);
    }
    return (
        <MyContext.Provider value={{state,dispatch}}>
            <h1 >use context 学习</h1>
            <div>
                <p>需要注意 useContext和redux的作用是不同的！！！</p>
                <p>useContext：解决的是组件之间值传递的问题---（有同事提出用useContext来替代redux相关的状态管理库是不对的，因为比如token等数据并不只是在react中使用，在其他js文件中也可能使用该变量，js中却拿不到context中的值）</p>
                <p>redux：是应用中统一管理状态的问题</p>
                <p>但通过和useReducer的配合使用，可以实现类似Redux的作用。（仅限在组件中） </p>
                <p>最佳实践：可以使用context存储theme相关变量，或者是只与组件交互的变量</p>
            </div>
            <hr />
            <Inner/>
            <hr />
            <h1 onClick={logCount}>点我在js普通函数中获取context值（会报错！）</h1>
            <hr />

            <Child/>
            <hr />
            <Child2/>
        </MyContext.Provider>
    );
}