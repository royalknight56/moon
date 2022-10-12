import { useState } from "react";

function DataSelect() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
        <input
            type="date"
            value={date.toLocaleDateString()}
            onChange={(e) => setDate(new Date(e.target.value))}
        />
    </div>
    );
}
export default DataSelect;