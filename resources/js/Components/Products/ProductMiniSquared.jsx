import { Link } from "@inertiajs/react";
import FreeShippingBadge from "@/Components/Badges/FreeShippingBadge";
export default function ProductMiniSquared({ product, size = 'vertical', ...params }) {


    // simplifies the description to take only 50 characters
    const simpleDescription = () => {
        if (product.description.length > 50) {
            return product.description.substring(0, 50) + "...";
        } else {
            return product.description;
        }
    };

    let imageSize;

    switch (size) {
        case 'squared':
            imageSize = 'h-[200px] w-[200px]';
            break;
        case 'vertical':
            imageSize = 'h-[350px] w-full';
            break;
        case 'horizontal':
            imageSize = 'h-[200px] w-[400px]';
            break;
        default:
            imageSize = 'h-[200px] w-[200px]';
            break;
    }

    // href={route('', product.id)}
    const prettyPrice = '$' + product.price.toFixed(2);

    let isFreeShipping = false;

    if (product.can_be_shipped && product.shipping_cost === 0)
        isFreeShipping = true;

    return (
        <Link href={route('products.show', product.id)}>
            <div className={`
                h-full flex-col items-center
                justify-center cursor-pointer
                transition-all  hover:-translate-y-1 `}>
                <img className={imageSize + " object-cover rounded-lg"} src={product.images_path} alt={product.name} />
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
