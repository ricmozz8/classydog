export default function ProductImageCarrousel({images, ...params}) {

    return (
        <div className={`flex items-center gap-4 w-ful bg-gray-200 bg-cover  backdrop-blur-xl m-auto rounded-md my-5`} {...params}>
            {images.map((image, index) => {
                return (
                    <img
                        key={index}
                        src={image}
                        alt="product image"
                        className="w-fit h-[500px] m-auto object-contain rounded-lg shadow-classydog-100 shadow-xl "
                    />
                );
            })}
        </div>
    );
};
