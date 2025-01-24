import InputLabel from "./InputLabel";
import InputError from "./InputError";
import Checkbox from "./Checkbox";
import { useState } from "react";
export default function Boolean({ title, children, error, onCheck, caption, ...params }) {

    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="flex-col  py-3" {...params}>
            <p className="text-sm">{title}</p>
            <div onClick={() => { setIsChecked(!isChecked); onCheck(); }}
                className={`flex items-center gap-3 p-3 rounded-full
                 md:w-fit cursor-pointer transition-colors
                 ${isChecked? 'text-classydog-main bg-secondary-100 hover:bg-secondary-300' : "hover:bg-gray-100" } ` }>
                <Checkbox checked={isChecked} className="cursor-pointer" />
                <InputLabel className="flex items-center gap-1 cursor-pointer text-inherit" value={children}></InputLabel>
            </div>
            <p className="text-sm text-gray-400 py-2">{caption}</p>
            <InputError message={error.message} />
        </div>



    )



};
