export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `bg-classydog-main flex items-center gap-1
                hover:bg-classydog-400 focus:ring-classydog-400
                text-white px-4 py-2 rounded-full cursor-pointer
                font-medium
                font-sans transition-colors` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
