import LeftButton from "@/Components/Buttons/LeftButton"
import RightButton from "@/Components/Buttons/RightButton"
export default function ProductImage({ imageURL, isFocused, size = '500px', width="fit", ...params }) {

    const focusImage = () => {


    }



    return (
            <img
                onClick={() => { focusImage(); }}
                src={imageURL}
                alt="product image"
                className={`w-${width} h-[${size}] m-auto object-contain border border-gray-300 cursor-pointer hover:brightness-75 transition-all`}
            />

    )
};
