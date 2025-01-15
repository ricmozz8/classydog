export default function FreeShippingBadge(params) {
    return (
        <div {...params} className={`flex items-center gap-2
        bg-secondary-50 text-classydog-main
         px-2 py-1 w-fit rounded-full text-xs`
        }>
            <i className="las la-truck"></i>
            <span>Envío Gratis</span>
        </div>
    );
};
