export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {

    let color = 'bg-classydog-main hover:bg-classydog-400';

    if (disabled) {
        color = 'bg-classydog-100 hover:bg-classydog-100';
    }

    return (
        <button
            {...props}
            className={
               color + ` flex items-center gap-1
                 focus:ring-classydog-400
                text-white px-4 py-2 rounded-full cursor-pointer
                font-medium
                font-sans transition-colors ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
