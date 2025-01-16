import IconButton from "@/Components/Buttons/IconButton";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import FreeShippingBadge from "@/Components/Badges/FreeShippingBadge";

export default function ProductMainActions({ product, ...params }) {

    const prettyPrice = '$' + product.price.toFixed(2);

    return (
        <div {...params} className="flex justify-between items-center py-4">
            <div className="flex-col">
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-semibold">{prettyPrice}</h1>
                    {product.can_be_shipped && product.shipping_cost === 0 && <FreeShippingBadge />}
                    {product.can_be_shipped && product.shipping_cost > 0 && <p className="text-xs">Envío ${product.shipping_cost}</p>}
                </div>
                <h2 className="text-sm">{product.name}</h2>
            </div>


            <div className="flex items-center gap-1 text-xl">
                <IconButton lineIcon="la-flag" />
                <IconButton lineIcon="la-heart" />
                <PrimaryButton>
                    <i className="las la-comments"></i>
                    <p className="text-md">Chat</p>
                </PrimaryButton>
            </div>
        </div>
    )
};
