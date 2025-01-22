import InputLabel from "./InputLabel";
import InputError from "./InputError";
import { useRef, useState } from "react";
export default function Input({ title, subtitle, type, name, className = "", error, ...props }) {



    const [passType, setPassType] = useState(type);
    const [toggleCaption, setToggleCaption] = useState('Mostrar');

    const togglePassword = () => {

        if (passType === 'password') {
            setPassType('text');
            setToggleCaption('Ocultar');
        }
        else {
            setPassType('password');
            setToggleCaption('Mostrar');
        }
    }

    return (
        <div className="flex flex-col gap-2 my-4">

            <div className="flex items-center gap-3">
                <InputLabel>{title}</InputLabel>
                {
                    type === 'password' &&
                    <span onClick={() => { togglePassword() }} className="flex items-center gap-1 cursor-pointer text-sm">
                        <i className="las la-eye"></i>
                        <p className="hover:underline">{toggleCaption} contraseña</p>

                    </span>
                }
            </div>
            <input
                className={
                    `border w-full border-gray-300 rounded-md p-2 focus:border-gray-300
                focus:ring-2 focus:ring-classydog-500
                hover:bg-gray-100 transition-colors ` + className
                }
                type={passType}
                name={name}
                {...props}

            />
            <p className="text-xs text-gray-500">{subtitle}</p>
            <InputError message={error} />
        </div>
    );
}
