import IconButton from "@/Components/Buttons/IconButton"
import Separator from "@/Components/Sections/Separator"
import ReviewStars from "@/Components/Products/Reviews/ReviewStars"
export default function ReviewCard({ review, ...params }) {



    return (
        <div className=" bg-gray-100 rounded-lg my-2" {...params}>

            {/* Top side */}

            <div className="p-4 flex justify-between items-center">
                <div className="flex items-center align-middle gap-2">
                    <img
                        className="w-8 h-8 rounded-full hover:brightness-95 cursor-pointer transition-all"
                        src={'https://www.picsum.photos/200/300'}
                        alt={review.made_by + ' profile'}
                    />
                    <div className="flex flex-col ">
                        <p className="font-semibold hover:underline cursor-pointer">{review.user.name}</p>
                        <span className="text-xs flex items-center gap-1">
                            <p>{review.made_on}</p>
                            {
                                review.updated && (
                                    <p className="text-xs">(Editado)</p>
                                )
                            }

                        </span>

                    </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <IconButton lineIcon="flag" size="small" />
                </div>
            </div>

            {/* Review Body */}
            <Separator />

            <div className="p-4 *:my-2">

                <ReviewStars stars={review.rating} />
                <p className="text-sm">{review.body}</p>
            </div>

        </div>
    )

};
