import PaginatorButton from "@/Components/Generics/PaginatorButton";
import PaginatorPreviousButton from "@/Components/Generics/PaginatorPreviousButton";
import PaginatorNextButton from "@/Components/Generics/PaginatorNextButton";

export default function Paginator({ currentPage, changePage, totalPages, ...params }) {

    if (totalPages <= 1) {
        return null;
    }

    if (totalPages <= 3) {
        return (

            <div className="flex items-center gap-3" {...params}>
                {
                    Array.from({ length: totalPages }, (_, index) => {
                        return (
                            <PaginatorButton key={index} onClick={() => changePage(index + 1)} isActive={currentPage === index + 1} >
                                {index + 1}
                            </PaginatorButton>
                        )
                    })
                }
            </div>

        )
    }

    // else the content has more than 3 pages

    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, currentPage + 1);

    return (
        <div className="flex items-center gap-3 m-auto w-fit my-3" {...params}>

            <PaginatorPreviousButton changePage={changePage} currentPage={currentPage} />


            {
                Array.from({ length: end - start + 1 }, (_, index) => {
                    return (
                        <PaginatorButton key={index + start} onClick={() => changePage(index + start)} isActive={currentPage === index + start} >
                            {index + start}
                        </PaginatorButton>
                    )
                })
            }
            <PaginatorNextButton changePage={changePage} currentPage={currentPage} />

        </div>
    )
}


