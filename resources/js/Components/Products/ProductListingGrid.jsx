import { useState } from "react";
import ProductMiniSquared from "@/Components/Products/ProductMiniSquared";
import Paginator from "@/Components/Generics/Paginator";
import Separator from "@/Components/Sections/Separator";
export default function ProductListingGrid({ products, pagination = 10 }) {

    const [currentPage, setCurrentPage] = useState(1);

    const partitionToPage = (page) => {
        return products.slice((page - 1) * pagination, page * pagination);
    }

    // this is used to paginate the products to show only n products at a time
    // n being the pagination value
    const [productPage, setProductPage] = useState(partitionToPage(currentPage));

    const handlePageChange = (page) => {

        if (page < 1 || page > Math.ceil(products.length / pagination)) {
            return;
        }


        setCurrentPage(page);
        setProductPage(partitionToPage(page));
        window.scroll(0, 0);
    };

    return (
        <div className="scroll-smooth">
            <div className="grid gap-3  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full py-3">

                {productPage.map((product, index) => {
                    return (
                        <ProductMiniSquared key={index} product={product} />
                    );
                })}


            </div>


            <Separator/>
            <Paginator
                currentPage={currentPage}
                changePage={handlePageChange}
                totalPages={Math.ceil(products.length / pagination)}
            />

        </div>
    )
};
