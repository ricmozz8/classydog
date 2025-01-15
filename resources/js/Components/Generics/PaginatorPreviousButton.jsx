export default function PaginatorPreviousButton({ changePage, currentPage }) {

    return (
        <button
            onClick={() => changePage(currentPage - 1)}
            className={`rounded-md hover:bg-gray-200 p-3 flex items-center gap-1 transition-colors`}
        >
            <i className="las la-angle-left"></i>
            <p className="text-sm">Anterior</p>
        </button>
    )
};
