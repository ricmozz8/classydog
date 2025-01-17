import LeftButton from "@/Components/Buttons/LeftButton"
import RightButton from "@/Components/Buttons/RightButton"
export default function ProductImage({ imageURL, isFocused, ...params }) {

    return (
        <img
            src={imageURL}
            alt="product image"
            className="w-fit h-[500px] m-auto object-contain border border-gray-300 cursor-pointer hover:brightness-75 transition-all "
        />
    )
};
