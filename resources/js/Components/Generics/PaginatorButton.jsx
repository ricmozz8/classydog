export default function PaginatorButton({ onClick, children, isActive, ...params }) {

    let activeClass = isActive ? 'bg-gray-200' : '';
    return (
        <button
            onClick={onClick}
            className={`rounded-full hover:bg-gray-200 px-4 py-2 flex
                items-center gap-1 transition-colors ` + activeClass
            }
            {...params}
        >
            {children}
        </button>
    );

};
