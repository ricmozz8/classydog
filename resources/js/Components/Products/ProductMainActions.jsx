import IconButton from "@/Components/Buttons/IconButton";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import FreeShippingBadge from "@/Components/Badges/FreeShippingBadge";
import Separator from "../Sections/Separator";

export default function ProductMainActions({ product, ...params }) {

    const prettyPrice = '$' + product.price.toFixed(2);
    const prettyShippingCost = '$' + product.shipping_cost.toFixed(2);

    return (
    <div {...params} className="flex justify-between items-center p-4 sticky top-16 bg-white border-b border-b-gray-200">
            <div className="flex-col">
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-semibold">{prettyPrice}</h1>
                    {product.can_be_shipped && product.shipping_cost === 0 ? (
                        <FreeShippingBadge />
                    ) : product.can_be_shipped ? (
                        <p className="text-xs">Envío {prettyShippingCost}</p>
                    ) : null}
                </div>
                <h2 className="text-sm">{product.name}</h2>
                <p className="text-xs">Vendido por: {product.user.name}</p>
            </div>


            <div className="flex items-center gap-1 md:text-xl">
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
