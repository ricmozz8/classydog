import ProductMiniSquared from "@/Components/Products/ProductMiniSquared";
import TertiaryButton from "@/Components/Buttons/TertiaryButton";
export default function SimilarProducts({ relatedProducts, ...params }) {

    return (
        <div className="my-5" {...params}>
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-semibold">Productos similares</h2>
                <TertiaryButton>
                    <i className="las la-arrow-right"></i> Ver todos
                </TertiaryButton>

            </div>

            <div className="grid grid-cols-4 gap-4  py-4">
                {relatedProducts.map((product, index) => {
                    return (
                        <ProductMiniSquared key={index} product={product} />
                    )
                })}
            </div>
        </div>
    )
};
