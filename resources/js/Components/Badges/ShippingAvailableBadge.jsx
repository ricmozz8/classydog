export default function ShippingAvailableBadge({ size = 'fit',params }) {



    return (<div {...params} className={`flex items-center gap-2
        bg-classydog-main text-secondary-200
         px-2 py-1 w-${size} rounded-full text-xs`
    }>
        <i className="las la-truck"></i>
        <span className="text-nowrap">Envío Disponible</span>
    </div>
    );

};
