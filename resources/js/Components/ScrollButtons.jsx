import SecondaryButton from "./SecondaryButton";
export default function ScrollButtons({ min_show_items, items, toScroll }) {
    let modify = "xl:hidden";
    if (items.length > min_show_items) {
        modify = "xl:flex";
    }

    return (
        <div className={`flex items-center gap-2 align-middle  ` + modify}>
            <SecondaryButton
                onClick={() =>
                    (document.querySelector(toScroll).scrollLeft -= 500)
                }
            >
                <i className="las la-arrow-left"></i>
            </SecondaryButton>

            <SecondaryButton
                href="#"
                onClick={() =>
                    (document.querySelector(toScroll).scrollLeft += 500)
                }
            >
                <i className="las la-arrow-right"></i>
            </SecondaryButton>
        </div>
    );
}
