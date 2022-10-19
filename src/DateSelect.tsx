import { useState, MouseEventHandler, createRef } from "react";
import "./DataCss.css";
function DataSelect(props:{
    onChange?: (e: any) => void;
}) {
    const [x, setX] = useState(200);
    let handleref  = createRef<HTMLDivElement>();
    const startDrag: MouseEventHandler<HTMLDivElement> = (e) => {
        let startX = handleref.current?.offsetLeft;
        let mouseStartX = e.pageX;
        let mouseMove = (e: MouseEvent) => {
            let moveX = e.pageX - mouseStartX;
            let pos = startX! + moveX;
            if (pos < 0) {
                pos = 0;
            }else if (pos > 400-10) {
                pos = 400-10;
            }
            setX(pos);
            props.onChange?.(pos-200);
        }
        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", mouseMove);
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
                 onMouseDown={startDrag} className="handle"
                    style={{ left: x }}></div>
            </div>
        </div>
    );
}
export default DataSelect;