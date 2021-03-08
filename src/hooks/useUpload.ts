import { useEffect, useMemo, useRef } from 'react';

//支持上传的文件格式
const FILE_TYPES = ['image', 'zip', 'excel', 'pdf'];
//具体文件格式
const IMG_TYPES = ['png', 'jpg', 'jpeg', 'gif'];
const ZIP_TYPES = ['zip', 'rar', 'gz', 'tar'];
const EXCEL_TYPES = ['xls', 'xlsx'];
const PDF_TYPES = ['pdf'];

const ALL_TYPES = {
    [FILE_TYPES[0]]: IMG_TYPES,
    [FILE_TYPES[1]]: ZIP_TYPES,
    [FILE_TYPES[2]]: EXCEL_TYPES,
    [FILE_TYPES[3]]: PDF_TYPES,
};

//验证图片大小
function checkSize(size: number, maxSize: number): boolean {
    return size / 1024 / 1024 > maxSize;
}

//验证图片类型
function checkFileType(types: string[], tail: string): boolean {
    return types.indexOf(tail) === -1;
}

//获取文件后缀
function getFileTail(name: string): string {
    const index = name.lastIndexOf('.');
    return name.slice(index + 1);
}


/**上传文件 hooks
 * @param {Number} maxSize //文件大小
 * @param {String} fileType //文件类型
 * @param {Function=>Boolean} upload //上传文件触发函数 必须返回一个 Promise 布尔值
 * @param {Function} errorFunc //上传 错误时调用该方法
 */

//默认的错误处理 ---提示
function handleError(message: string): void {
    console.error(message);
}


interface IUploadParams {
    maxSize: number;
    fileType?: string;
    upload: Function;
    errorFunc?: Function;
}

interface IHandle {
    change(p?: any): void
}



export default function useUpload({ maxSize = 100, fileType = 'image', upload, errorFunc = handleError }: IUploadParams): IHandle {
    const elRef = useRef<HTMLInputElement>();
    const paramsRef = useRef<any>();
    const elID = useMemo(() => 'upload_file_inp' + Math.random(), []);

    const fileChange = async () => {
        // const { files } = e.target;
        const el = elRef.current;
        const files = el?.files;
        if (!files?.length) return;

        const file = files[0];
        if (!file) { return; }

        if (checkSize(file.size, maxSize)) {
            errorFunc('文件大于' + maxSize + 'M无法上传');
            return;
        }
        if (checkFileType(ALL_TYPES[fileType], getFileTail(file.name))) {
            errorFunc('不支持的文件类型!该文件格式仅支持以下后缀' + ALL_TYPES[fileType].join(','));
            return;
        }

        const formdata = new FormData();
        formdata.append('file', file);
        await upload(formdata, { file, ...paramsRef.current });
        // el.value = '';
        if (el) {
            el.value = '';
        }
    };

    useEffect(() => {
        if (FILE_TYPES.indexOf(fileType) === -1) {
            errorFunc('请传入正确的上传类型 fileType：image,zip,pdf,excel');
            return;
        }
        const el = document.createElement('input');
        el.id = elID;
        el.type = 'file';
        el.style.display = 'none';
        el.onchange = fileChange;
        document.body.appendChild(el);
        elRef.current = el;
        return () => {
            if (elRef.current !== null) {
                document.body.removeChild(el);
            }
        };
    }, []);

    return {
        change: (params: any) => {
            paramsRef.current = params;
            elRef.current?.click();
        }
    };
}