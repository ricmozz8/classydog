export default function ProductImageOverlay({image, ...params}) {

    return(
        <div className="sticky top-0 left-0 right-0 bottom-0 w-screen h-screen bg-gray-900/50">
            <img
                src={image}
                alt="product image"
                className="w-fit h-[500px] m-auto object-contain rounded-lg cursor-pointer hover:brightness-75 transition-all "
            />
        </div>
    )
};
