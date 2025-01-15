import RangeInput from "@/Components/Inputs/RangeInput";
import { useState, useEffect } from "react";
export default function MainFilterSidebar({ filters, categories }) {



    const [showable, setShowable] = useState(false);

    let showClass = showable ? 'flex-col' : 'hidden';

    useEffect(() => {

        const handleSizeChange = () => {
            if (window.innerWidth > 1024) {
                setShowable(true);
            } else {
                setShowable(false);
            }
        }

        window.addEventListener('resize', handleSizeChange);
        handleSizeChange();

        return () => {
            window.removeEventListener('resize', handleSizeChange);
        }

    }, []);


    return (
        <div className={`
        fixed md:w-1/8 h-full
        top-0 lg:shadow-none shadow-lg
        bg-white lg:sticky md:top-16
        left-0 lg:border-r border-r-gray-300
        px-6 py-12 ` + showClass} >

            <div className="flex items-center gap-2">
                <i className="las la-filter"></i>
                <h2 className="text-2xl">Filtros</h2>
            </div>


            <h3 className="text-lg font-semibold my-3 ">Categorías</h3>
            {categories.map((category, index) => {
                return (<p className="cursor-pointer text-sm hover:font-semibold hover:underline" key={index}>{category.name}</p>)
            })}

            <h3 className="text-lg font-semibold my-3 ">Precio</h3>
            <RangeInput min={0} max={100} name={"Precio"} />


        </div>
    )


};
