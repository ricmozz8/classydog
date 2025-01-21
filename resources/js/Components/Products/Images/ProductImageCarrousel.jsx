import ProductImage from "@/Components/Products/Images/ProductImage";
import ProductImageOverlay from "@/Components/Products/Images/ProductImageOverlay";
import CarrouselImageControl from "@/Components/Products/Images/CarrouselImageControl";
import { useState } from "react";
import SelectableThumbnail from "@/Components/Products/Images/SelectableThumbnail";
export default function ProductImageCarrousel({ images, ...params }) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(images[currentImageIndex]);

    const multipleImages = images.length > 1;

    const setNextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
            setCurrentImage(images[currentImageIndex + 1]);
        }
    };

    const setPreviousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
            setCurrentImage(images[currentImageIndex - 1]);
        }
    };

    const setImage = (index) => {
        setCurrentImageIndex(index);
        setCurrentImage(images[index]);
    }
    //
    return (
        <div className="flex-col">
            <div className={`flex items-center gap-4 w-ful bg-gray-200 bg-cover  backdrop-blur-xl m-auto  my-5`} {...params}>
                {
                    multipleImages && <CarrouselImageControl trigger={() => { setPreviousImage() }} />
                }
                <ProductImage
                    imageURL={currentImage}
                />
                {
                    multipleImages && <CarrouselImageControl direction="right" trigger={() => { setNextImage() }} />
                }


            </div>

            <div className="flex items-center m-auto w-fit gap-3">
                {
                    multipleImages &&
                    images.map((image, index) => {
                        return (
                            <SelectableThumbnail
                                key={index}
                                imageURL={image}
                                index={index}
                                isFocused={index === currentImageIndex}
                                onClick={() => { setImage(index) }}
                            />
                        )
                    })
                }
            </div>


        </div>
    );
};
