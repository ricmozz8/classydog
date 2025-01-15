import { usePage, Link } from "@inertiajs/react";
import CategoryButton from "@/Components/Buttons/CategoryButton";

export default function NavCategories(params) {

    const { availableCategories } = usePage().props;



    return (
        <div className="hidden lg:flex items-center gap-2 border-b border-b-gray-300" {...params}>
            <CategoryButton>
                <i className="las la-bars"></i>
                <p>Más categorias</p>
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
    );
};
