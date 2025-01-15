export default function PaginatorNextButton({ changePage, currentPage }) {
    return (
        <button
            onClick={() => changePage(currentPage + 1)}
            className={`rounded-md hover:bg-gray-200 p-3 flex items-center gap-1 transition-colors`}
        >

            <p className="text-sm">Siguiente</p>
            <i className="las la-angle-right"></i>
        </button>
    )

};
