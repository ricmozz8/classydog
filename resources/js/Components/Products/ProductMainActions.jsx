import IconButton from "@/Components/Buttons/IconButton";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import FreeShippingBadge from "@/Components/Badges/FreeShippingBadge";
import ShippingAvailableBadge from "@/Components/Badges/ShippingAvailableBadge";

export default function ProductMainActions({ product, ...params }) {

    const prettyPrice = '$' + product.price.toFixed(2);
    const prettyShippingCost = '$' + product.shipping_cost.toFixed(2);

    return (
        <div {...params} className="flex justify-between items-center p-4 sticky top-16 z-10 bg-white border-b border-b-gray-200">
            <div className="flex-col">

                <div className="flex items-center gap-3 text-center">
                    <h1 className="text-3xl font-semibold">{prettyPrice}</h1>
                    {product.can_be_shipped && product.shipping_cost === 0 ? (
                        <FreeShippingBadge />
                    ) : product.can_be_shipped ? (
                        <ShippingAvailableBadge/>
                    ) : null}
                </div>

                <h2 className="text-sm">{product.name}</h2>
                <p className="text-xs flex items-center md:gap-1 md:justify-start gap-4 text-nowrap">
                    Vendido por:
                    <span className="hover:underline cursor-pointer">
                        {product.user.name}
                    </span>
                    <i className="las la-star text-yellow-500"></i>{product.user.rating.toFixed(1)}
                </p>
            </div>


            <div className="flex items-center gap-1 md:text-xl">
                <div className=" items-center hidden md:flex">
                    <IconButton size={'medium'} lineIcon="flag" />
                    <IconButton size={'medium'} lineIcon="heart" />
                </div>
                <PrimaryButton>
                    <i className="las la-comments"></i>
                    <p className="text-md">Chat</p>
                </PrimaryButton>
            </div>
        </div>
    )
};
