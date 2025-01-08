import InputLabel from "./InputLabel";
import InputError from "./InputError";
export default function Input({ title, type, name, className = "", error, ...props }) {
    return (
        <div className="flex flex-col gap-2 my-4">
            <InputLabel>{title}</InputLabel>
            <input
                className={
                    `border w-full border-gray-300 rounded-md p-2 focus:border-gray-300
                focus:ring-2 focus:ring-classydog-500
                hover:bg-gray-100 transition-colors ` + className
                }
                type={type}
                name={name}
                {...props}
            />
            <InputError  message={error} />
        </div>
    );
}
