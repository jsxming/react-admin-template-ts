import { Cascader } from 'antd';
import React, { useEffect, useState } from 'react';
const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];



const App = () => {
    const [value, setV] = useState<string[]>([]);
    useEffect(() => {
        setTimeout(() => {
            setV(['xihu']);
        }, 1000);
    }, []);
    const onChange = (value: any) => {
        console.log(value);
    };

    return <div>
        <Cascader onChange={onChange}
            options={options}
            placeholder="Please select"
            value={value} />
    </div>;
};


export default App;