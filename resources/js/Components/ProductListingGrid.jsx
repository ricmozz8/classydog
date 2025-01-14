import ProductMiniSquared from "./ProductMiniSquared";
export default function ProductListingGrid({products}) {
    return (
        <div className="grid gap-3  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full py-3">
            {products.map((product, index) => {
                return (
                    <ProductMiniSquared key={index} product={product} />
                );
            })}
        </div>
    )
};
