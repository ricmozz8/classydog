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


    return (
        <div className="flex items-center gap-3 m-auto w-fit my-3" {...params}>

            {
                currentPage !== 1 &&
            <PaginatorPreviousButton changePage={changePage} currentPage={currentPage} />
            }

            {
                Array.from({ length: (totalPages - 3) - currentPage }, (_, index) => {



                    if (index >= 1 && index < totalPages) {
                        return (
                            <PaginatorButton key={index} onClick={() => changePage(index )} isActive={currentPage === index} >
                                {index}
                            </PaginatorButton>
                        )
                    }
                })
            }

            {
                currentPage !== totalPages &&
                <PaginatorButton onClick={() => changePage(totalPages)} isActive={currentPage === totalPages} >
                    {totalPages}
                </PaginatorButton>
            }


            {
                currentPage !== totalPages && <PaginatorNextButton changePage={changePage} currentPage={currentPage} />
            }



        </div>
    )
}



