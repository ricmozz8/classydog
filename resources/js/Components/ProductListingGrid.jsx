import ProductMiniSquared from "./ProductMiniSquared";
export default function ProductListingGrid({products}) {
    return (
        <div className="grid gap-3 columns-1 md:columns-2 lg:columns-3 w-full py-3">
            {products.map((product, index) => {
                return (
                    <ProductMiniSquared key={index} product={product} />
                );
            })}
        </div>
    )
};
