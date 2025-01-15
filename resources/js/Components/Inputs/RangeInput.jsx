import InputLabel from "@/Components/Inputs/InputLabel";
import { useState } from "react";
export default function RangeInput({ min, max, name, ...params }) {


    const [currentValue, setCurrentValue] = useState(0);

    return (

        <div className="relative mb-6">

            <div className="flex items-center gap-2">
                <InputLabel htmlFor={name} value={name} />
                <p className="text-xs">(Menor a ${currentValue})</p>
            </div>
            <input
                {...params}
                type="range"
                className="w-full h-2 accent-classydog-main bg-gray-200 rounded-lg cursor-pointer"
                min={min}
                max={max}
                step={(max - min) / 100}
                value={currentValue}
                onChange={(e) => {
                    setCurrentValue(e.target.value);
                }}
            />
            <span className="text-xs absolute start-0 -bottom-5">{min}</span>
            <span className="text-xs absolute start-1/2 -bottom-5">{(max - min) / 2}</span>
            <span className="text-xs absolute  end-0 -bottom-5">{max}</span>
        </div>

    );
};
