export default function PromotionalGreeter(params) {
    return (
        <img
            src={route("ad.active")}
            alt="Promotional Image"
            draggable={false}
            className={`
            hidden md:block
            my-4 rounded-md mx-auto object-contain
            h-[350px] w-full
            transition-all lg:object-cover
        `}
        />
    );
}
