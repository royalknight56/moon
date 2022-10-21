import { useState, MouseEventHandler,TouchEventHandler, createRef } from "react";
import "./DataCss.css";
function DataSelect(props:{
    onChange?: (e: any) => void;
}) {
    const [x, setX] = useState(150);
    let handleref  = createRef<HTMLDivElement>();
    const startDrag: MouseEventHandler<HTMLDivElement> = (e) => {
        let startX = handleref.current?.offsetLeft;
        let mouseStartX = e.pageX;
        let mouseMove = (e: MouseEvent) => {
            let moveX = e.pageX - mouseStartX;
            let pos = startX! + moveX;
            if (pos < 0) {
                pos = 0;
            }else if (pos > 300-10) {
                pos = 300-10;
            }
            setX(pos);
            props.onChange?.(pos-150);
        }
        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", mouseMove);
        })
    }
    const startTouch: TouchEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();
        let startX = handleref.current?.offsetLeft;
        let touchStartX = e.touches[0].pageX;
        let touchMove = (e: TouchEvent) => {
            let moveX = e.touches[0].pageX - touchStartX;
            let pos = startX! + moveX;
            if (pos < 0) {
                pos = 0;
            }else if (pos > 300-10) {
                pos = 300-10;
            }
            setX(pos);
            props.onChange?.(pos-150);
        }
        document.addEventListener("touchmove", touchMove);
        document.addEventListener("touchend", () => {
            document.removeEventListener("touchmove", touchMove);
        })
    }


    return (
        <div>
            {/* <input
            type="date"
            value={date.toLocaleDateString()}
            onChange={(e) => setDate(new Date(e.target.value))}
        /> */}
            <div className="bar">
                <div
                ref={handleref}
                 onMouseDown={startDrag}
                 onTouchStart={startTouch}
                  className="handle"
                    style={{ left: x }}></div>
            </div>
        </div>
    );
}
export default DataSelect;