import { Link } from "@inertiajs/react";
import FreeShippingBadge from "@/Components/Badges/FreeShippingBadge";
export default function ProductMiniSquared({ product }) {


    // simplifies the description to take only 50 characters
    const simpleDescription = () => {
        if (product.description.length > 50) {
            return product.description.substring(0, 50) + "...";
        } else {
            return product.description;
        }
    };

// href={route('', product.id)}
    const prettyPrice = '$' + product.price.toFixed(2);

    let isFreeShipping = false;

    if (product.can_be_shipped && product.shipping_cost === 0)
        isFreeShipping = true;

    return (
        <Link href={route('products.show', product.id)}>
            <div className=" max-w-52 flex-col items-center justify-center cursor-pointer  transition-colors">
                <img className="w-full h-72 object-cover rounded-lg" src={product.images_path} alt={product.name} />
                <div className="py-3">
                    {isFreeShipping && <FreeShippingBadge />}
                    <h1 className="text-3xl font-semibold">{prettyPrice}</h1>
                    <h2 className="text-sm">{product.name}</h2>
                    <p className="text-xs">{simpleDescription()}</p>
                    <p className="text-xs">Vendido por: {product.sold_by}</p>
                </div>
            </div>
        </Link>
    );
};
