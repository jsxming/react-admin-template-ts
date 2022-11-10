import styles from './index.module.less';
import React, { useEffect, useRef, useState } from 'react';

const arr = [1, 2, 3, 4];

// function SwiperItem() {
//   return (
//     <div>

//     </div>
//   );
// }

class Item extends React.Component {
    render(): React.ReactNode {
        return <div></div>;
    }
}

//屏幕宽度
const clientWidth = window.innerWidth;

interface IProps {
  children?:Item[]
}
export default function Swiper(p:IProps) {
    const [transX, setTransX] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const startData = useRef({
        screenX: 0,
        screenY: 0,
    });
    const moveData = useRef(0);
    const startTransX = useRef(0);

    const handleTouchStart = (e:React.TouchEvent) => {
        const touchData = e.touches[0];
        startTransX.current = transX;
        const { screenX, screenY } = touchData;
        startData.current = {
            screenX,
            screenY,
        };
    };

    const handleTouchMove = (e:React.TouchEvent) => {
        const touchData = e.touches[0];
        const { screenX, screenY } = touchData;
        const startX = startData.current.screenX;
        const diff = screenX - startX;
        moveData.current = diff;
        setTransX(oldv => {
            return diff + startTransX.current;
        });
    };
    useEffect(() => {

    }, []);

    useEffect(() => {
        console.log(activeIndex);
        setTransX(-(activeIndex * clientWidth));
    }, [activeIndex]);

    const handleTouchEnd = (e:React.TouchEvent) => {
        console.log(moveData.current);
        const moveDistance = moveData.current;
        //小于100滑动距离不够
        if (Math.abs(moveDistance) < 70) {
            setTransX(-(activeIndex * clientWidth));
            return;
        }
        if (moveDistance > 0) {
            // 右移
            setActiveIndex(v => {
                if (v - 1 < 0) {
                    setTransX(-(activeIndex * clientWidth));
                    return 0;
                }
                return v - 1;
            });
        } else {
            // 左移
            setActiveIndex(v => {
                const len = arr.length - 1;
                if (v + 1 > len) {
                    setTransX(-(activeIndex * clientWidth));
                    return len;
                }
                return v + 1;
            });
        }

    };
    // https://unpkg.com/mobx@6.5.0/dist/mobx.umd.production.min.js
    return (
        <div className={styles.box} >
            <div
                className={styles.boxChild}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchMove}
                onTouchStart={handleTouchStart}
                style={{
                    transform: `translateX(${transX}px)`,
                }}
            >
                {
                    arr.map((item, idx) => {
                        const isCurrentItem = activeIndex === idx;
                        return (<div key={item}
                            style={{
                                // transform: `scale(${ isCurrentItem ? 1 : 0.8})`,
                                // opacity: isCurrentItem ? 1 : 0.5,
                            }} >
                            <div>hello</div>
                        </div>);
                    })
                }
            </div>
        </div>
    );
}