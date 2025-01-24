export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-classydog-main shadow-sm focus:ring-classydog-main ' +
                className
            }
        />
    );
}
