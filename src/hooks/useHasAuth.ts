/*
 * @Description:权限判断hooks
 * @Autor: 小明～
 * @Date: 2021-11-04 17:08:55
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-04 17:10:52
 */
import {useSelector} from 'react-redux';
import {  IStore } from '@/typings/redux';

export default function useHasAuth(path:string):boolean {
    const auth = useSelector((state:IStore)=>state.authPath);
    return auth.includes(path);
}
