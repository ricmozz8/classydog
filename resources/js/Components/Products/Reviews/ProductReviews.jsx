import SecondaryButton from "@/Components/Buttons/SecondaryButton"
import ReviewCard from "@/Components/Products/Reviews/ReviewCard";
import AddReviewBox from "@/Components/Products/Reviews/AddReviewBox";
export default function ProductReviews({ auth, reviews, ...params }) {

    const hasReviews = reviews.length > 0;



    return (
        <div className="p-4 border-b border-b-gray-200 " {...params}>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="md:text-3xl font-semibold flex items-center gap-2">
                        <i className="las la-star"></i>
                        Valoraciones
                    </h2>
                    <div className="flex items-center gap-2">
                        <p className="md:text-3xl font-semibold">({reviews.length})</p>
                    </div>

                </div>


                {
                    hasReviews &&
                    <SecondaryButton>
                        <i className="las la-plus"></i>
                        <p className="text-md">Ver más</p>
                    </SecondaryButton>
                }



            </div>


            <div className="py-1">
                {
                    hasReviews ? (
                        reviews.map((review, index) => {
                            return (
                                <ReviewCard key={index} review={review} />
                            );
                        })
                    ) : (
                        <p className="text-sm text-center">(Sin valoraciones)</p>
                    )
                }
            </div>
        </div>
    )

};
