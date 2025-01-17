import SecondaryButton from "@/Components/Buttons/SecondaryButton"
export default function ProductReviews({ reviews, ...params }) {

    const hasReviews = reviews.length > 0;

    return (
        <div className="p-4 border-b border-b-gray-200 " {...params}>

            <div className="flex items-center justify-between">
                <div className="md:flex items-center gap-2">
                    <h2 className="md:text-3xl font-semibold flex items-center gap-2">
                        <i className="las la-star"></i>
                        Valoraciones
                    </h2>
                    <p className="text-sm">({reviews.length} opiniones)</p>
                </div>
                {
                    hasReviews &&
                    <SecondaryButton>
                        <i className="las la-plus"></i>
                        <p className="text-md">Ver más</p>
                    </SecondaryButton>
                }



            </div>

            <div className="py-6">
                {
                    hasReviews ? (
                        <p>Aqui iran las valoraciones</p>
                    ) : (
                        <p className="text-sm text-center">(Sin valoraciones)</p>
                    )
                }
            </div>
        </div>
    )

};
