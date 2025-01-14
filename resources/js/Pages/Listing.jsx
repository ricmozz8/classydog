import Layout from "@/Layouts/Layout";
import ProductListingGrid from "@/Components/ProductListingGrid";
export default function Listing({products, categories, auth}) {

    return (
        <Layout pageTitle='Productos' auth={auth}>
            <div className="flex items-start  space-around gap-3">

                {/* filter category selector sidebar */}
                <div className="flex-col w-1/4 h-full border-r border-r-gray-300 p-6">
                    <h2 className="text-2xl">Filtros</h2>

                    <h3 className="text-lg font-semibold ">Categorías</h3>
                    {categories.map((category, index) => {
                        return ( <p className="cursor-pointer text-sm hover:font-semibold hover:underline" key={index}>{category.name}</p> )
                    })}
                </div>
                <div className=" h-full p-6">
                    <h1 className="text-3xl font-semibold">Todos los productos</h1>
                    <ProductListingGrid products={products}/>

                </div>

            </div>
        </Layout>
    );

};
