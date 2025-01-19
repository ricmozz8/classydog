import ProductImage from "@/Components/Products/Images/ProductImage";
import ProductImageOverlay from "@/Components/Products/Images/ProductImageOverlay";
export default function ProductImageCarrousel({ images, ...params }) {

    return (
        <div className={`flex items-center gap-4 w-ful bg-gray-200 bg-cover  backdrop-blur-xl m-auto rounded-md my-5`} {...params}>
            {images.map((image, index) => {
                return (

                    <ProductImage
                        key={index}
                        imageURL={image}
                        isFocused={index === 0}
                    />
                );
            })}
        </div>
    );
};
