export default function ProductUserInfo({ region, country, lastEdited, views, ...params }) {

    return (
        <div className="flex items-center gap-2 p-4 justify-between border-b border-b-gray-200" {...params}>

            <div className="flex items-center gap-2 text-sm">
                <i className="las la-map-marker-alt"></i>
                <p className="md:text-sm font-semibold text-xs">{region}, {country}</p>
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
