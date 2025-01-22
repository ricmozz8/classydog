export default function FreeShippingBadge({size='fit', ...params}) {
    return (
        <div {...params} className={`flex items-center gap-2
        bg-secondary-50 text-classydog-main
         px-2 py-1 w-${size} rounded-full text-xs`
        }>
            <i className="las la-truck"></i>
            <span className="text-nowrap">Envío Gratis</span>
        </div>
    );
};
