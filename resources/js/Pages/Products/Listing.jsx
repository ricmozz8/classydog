import Layout from "@/Layouts/Layout";
import ProductListingGrid from "@/Components/Products/ProductListingGrid";
import MainFilterSidebar from "@/Components/Sections/MainFilterSidebar";

export default function Listing({products, auth}) {

    return (

        <Layout pageTitle='Productos' auth={auth}>
            <div className="flex items-start  space-around gap-10">

                <MainFilterSidebar />
                <div className=" h-full py-6 w-full">
                    <h1 className="text-3xl font-semibold">Todos los productos</h1>
                    <ProductListingGrid products={products} pagination={12}/>
                </div>

            </div>

        </Layout>
    );

};
