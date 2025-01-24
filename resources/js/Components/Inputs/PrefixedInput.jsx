import InputError from "./InputError";
import InputLabel from "./InputLabel";
import { useState } from "react";
export default function PrefixedInput({ title, subtitle, prefix = '@', type, name, className = "", error, ...props }) {

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

            <div className={
                `border w-full border-gray-300 rounded-md focus:border-gray-300
                focus:ring-2 focus:ring-classydog-500
                 transition-colors flex items-center ` + className}>

                <div className="bg-gray-200 block py-2 px-4 border-r border-gray-300 rounded-l-md text-gray-600">
                    {prefix}
                </div>

                <input
                    type={passType}
                    name={name}
                    {...props}
                    className="border-none p-2 w-full rounded-r-md bg-transparent outline-none focus:ring-0 hover:bg-gray-100 transition-colors"
                />
            </div>

            <p className="text-xs text-gray-500">{subtitle}</p>
            <InputError message={error} />
        </div>
    );

};
