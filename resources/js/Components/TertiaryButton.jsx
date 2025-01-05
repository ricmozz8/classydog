import { Link } from "@inertiajs/react";

export default function TertiaryButton({
    type = "button",
    className = "",
    disabled,
    children,
    ...props
}) {
    return (

            <button
                disabled={disabled}
                type={type}
                {...props}
                className={
                    `underline hover:text-classydog-200 cursor-pointer bg-transparent border-none outline-none font-medium` +
                    className
                }
            >
                {children}
            </button>

    );
}
