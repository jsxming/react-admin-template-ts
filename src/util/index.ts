/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-20 14:10:29
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-03 16:47:38
 */
// export  const a = '';

// export {showInfo} from './info';
export {isArray,isValidValue} from './func/validator';


// 切换 屏幕
export function toggleScreen(bool: boolean): void {
    let elem: any;
    if (bool) {
        elem = document.body;
        elem.webkitRequestFullScreen
            ? elem.webkitRequestFullScreen()
            : elem.mozRequestFullScreen
                ? elem.mozRequestFullScreen()
                : elem.msRequestFullscreen
                    ? elem.msRequestFullscreen()
                    : elem.requestFullScreen
                        ? elem.requestFullScreen()
                        : console.log('浏览器不支持全屏');
    } else {
        elem = window.document;
        elem.webkitCancelFullScreen
            ? elem.webkitCancelFullScreen()
            : elem.mozCancelFullScreen
                ? elem.mozCancelFullScreen()
                : elem.cancelFullScreen
                    ? elem.cancelFullScreen()
                    : elem.msExitFullscreen
                        ? elem.msExitFullscreen()
                        : elem.exitFullscreen
                            ? elem.exitFullscreen()
                            : console.log('切换失败,可尝试Esc退出');
    }
}