import { Link } from "@inertiajs/react";
import TertiaryButton from "./TertiaryButton";
import ScrollButtons from "./ScrollButtons";

export default function MainCategorySelector({ title, content, allRoute, id }) {
    return (
        <div className="flex-col max-h-screen m-6 2xl:mx-0">
            <div className="md:flex items-center align-middle justify-between py-4">
                <h1 className="text-3xl font-semibold flex items-center justify-between gap-2">
                    {title}
                    <ScrollButtons
                        min_show_items={4}
                        items={content}
                        toScroll={"#slider-" + id}
                    />
                </h1>
                <TertiaryButton href={allRoute}>
                    {" "}
                    <i className="las la-arrow-right"></i> Ver todos
                </TertiaryButton>
            </div>

            <div
                id={`slider-` + id}
                className="flex no-scrollbar p-2 gap-4 max-w-full scroll-smooth overflow-x-scroll overflow-y-hidden touch-pan-x z-0"
            >
                {content.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            href={item.route}
                            className="flex-col hover:scale-105 transition-all w-full items-center align-middle justify-between py-4"
                        >
                            <img
                                className="min-w-[300px] h-[500px] object-cover rounded-md hover:brightness-75 transition-all "
                                src={item.image}
                                alt={item.title}
                                draggable={false}
                            />
                            <h1 className="text-2xl font-semibold">
                                {item.title}
                            </h1>
                            <p>{item.ads} anuncios</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
