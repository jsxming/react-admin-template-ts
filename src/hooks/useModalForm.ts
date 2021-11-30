/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-11-29 16:55:28
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-30 15:04:09
 */
import React,{useState} from 'react';

import { FormInstance} from 'antd';


interface IModalFormProps<T>{
    form:FormInstance,
    add?:(args:T,row?:T)=>Promise<boolean>;
    update?:(args:T,row?:T)=>Promise<boolean>;
}

export default function useModalForm<M>(props:IModalFormProps<M>){
    const [visible, setvisible] = useState(false);
    const [isEdit,setIsEdit] = useState(false);
    const [formdata,setFormData] = useState<M>();

    function open(bool:boolean,formdata?:M){
        setIsEdit(bool);
        if(typeof formdata !=='undefined'){
            setFormData(formdata);
            props.form.setFieldsValue(formdata);
        }
        setvisible(true);
    }

    function close(){
        props.form.resetFields();
        setvisible(false);
    }

    async function  submit(values:M){
        let b = false;
        if(isEdit){
            if(props.update){
                b=   await props.update(values,formdata);
            }
        }else{
            if(props.add){
                b=   await props.add(values,formdata);
            }
        }
        props.form.resetFields();
        setvisible(b);
    }



    return {
        formdata,
        visible,
        open,
        submit,
        close
    };
}

/**
 * demo




 */