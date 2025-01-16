import { usePage, Link } from "@inertiajs/react";
import CategoryButton from "@/Components/Buttons/CategoryButton";
import AllCategoriesSidebar from "@/Components/Overlays/AllCategoriesSidebar";
import { useState } from "react";

export default function NavCategories(params) {

    const { availableCategories } = usePage().props;
    const [showAllCategories, setShowAllCategories] = useState(false);

    const toggleCategoriesSidebar = () => {
        console.log('categories opened');
        setShowAllCategories(!showAllCategories);
    }


    return (
        <>
            <div className="hidden lg:flex items-center gap-2 border-b border-b-gray-300" {...params}>
                <CategoryButton onClick={() => { toggleCategoriesSidebar() }}>
                    <i className="las la-bars"></i>
                    <p>Más categorías</p>
                </CategoryButton>

                {
                    availableCategories.popular.map((category, index) => {
                        return (

                            <Link key={index} href={route('listing', category.id)}>
                                <CategoryButton key={index}>
                                    <p>{category.name}</p>
                                </CategoryButton>
                            </Link>
                        )
                    })
                }

            </div>
            <AllCategoriesSidebar onToggle={toggleCategoriesSidebar} isShowing={showAllCategories} categoryList={availableCategories.all} />
        </>
    );
};
