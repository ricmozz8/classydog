export default function ReviewStars({ stars, ...params }) {

    let filled = Math.floor(stars);
    let hollow = 5 - filled;

    return (
        <div {...params} className="flex gap-1 text-xl">
            {
                Array.from({ length: filled }, (_, index) => {
                    return (
                        <div key={index} className="text-yellow-500">
                            <i className="las la-star "></i>
                        </div>
                    )
                })
            }
            {
                Array.from({ length: hollow }, (_, index) => {
                    return (
                        <div key={index} className="text-gray-300">
                            <i className="las la-star"></i>
                        </div>
                    )
                })
            }
        </div>
    );

};
