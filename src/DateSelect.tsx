import { useState, MouseEventHandler, createRef } from "react";
import "./DataCss.css";
function DataSelect(props:{
    onChange?: (e: any) => void;
}) {
    const [x, setX] = useState(0);
    let handleref  = createRef<HTMLDivElement>();
    const startDrag: MouseEventHandler<HTMLDivElement> = (e) => {
        let startX = handleref.current?.offsetLeft;
        let mouseStartX = e.pageX;
        let mouseMove = (e: MouseEvent) => {
            let moveX = e.pageX - mouseStartX;
            let pos = startX!-5 + moveX
            setX(pos);
            props.onChange?.(pos);
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