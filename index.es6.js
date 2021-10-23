var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-23 17:49:03
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-23 17:50:29
 */
function helloWorld() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/static/data.json');
        const txt = yield res.text();
        return txt;
    });
}
(() => __awaiter(this, void 0, void 0, function* () {
    const txt = yield helloWorld();
    console.log('async func: ', txt);
}))();
