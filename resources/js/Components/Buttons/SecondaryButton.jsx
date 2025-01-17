export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={`
                border border-classydog-main items-center flex  gap-1 text-classydog-main
                px-4 py-2 rounded-full cursor-pointer font-sans font-medium
                hover:border-classydog-500 hover:text-classydog-500 hover:bg-gray-100
                transition-colors

                `}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
