export default function PromotionalGreeter(params) {
    return (

            <img
                src={route("ad.active")}
                alt="Promotional Image"
                className={`
            hidden md:block
            my-4  mx-auto object-contain
            h-[350px] w-full cursor-pointer hover:brightness-75
            transition-all lg:object-cover
        `}
            />

        
    );
}
