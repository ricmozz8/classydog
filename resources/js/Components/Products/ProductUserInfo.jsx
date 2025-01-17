export default function ProductUserInfo({ validGeo, region, country, lastEdited, views, ...params }) {
    console.log(validGeo);
    return (
        <div className="flex items-center gap-2 p-4 justify-between border-b border-b-gray-200" {...params}>

            <div className="flex items-center gap-2 text-sm">

                {
                    validGeo ?
                    <p className="md:text-sm font-semibold text-xs">
                        <i className="las la-map-marker-alt"></i>{region}, {country}
                    </p> :
                    null
                }

                <p className="md:text-sm text-xs">Editado {lastEdited}</p>
            </div>

            <div className="flex items-center gap-2">
                <i className="las la-eye"></i>
                <p className="text-sm">{views}</p>
                <i className="las la-heart"></i>
                <p className="text-sm">0</p>
            </div>


        </div>
    );

};
