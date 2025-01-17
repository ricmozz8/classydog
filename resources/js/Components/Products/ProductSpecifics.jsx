export default function ProductSpecifics({ specifics, ...params }) {

    if(specifics.length === 0) {
        return null;
    }

    return (
        <div className="flex items-center justify-around gap-2 py-5 border-b border-b-gray-200">
            {
                specifics.map((specific, index) => {
                    return (
                        <div key={index} className="flex-col gap-2 text-center m-auto ">
                            <h2 className="text-sm text-classydog-100">{(specific.name)}</h2>
                            <p className="w-fit text-2xl font-semibold">{specific.value}</p>
                        </div>
                    )
                })
            }
        </div>
    )

};
