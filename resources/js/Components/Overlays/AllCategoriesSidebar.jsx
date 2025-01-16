import Sidebar from "@/Components/Overlays/Sidebar";
import { Link } from "@inertiajs/react";
export default function AllCategoriesSidebar({categoryList, onToggle, isShowing, ...params}) {


    return (
        <Sidebar onToggle={onToggle} title={"Categorías"} side="left" isOpen={isShowing} {...params}>


            {
                categoryList.map((category, index) => {
                    return (
                        <Link key={index} href={route('listing', category.id)}>
                            <div className="p-3 rounded-md hover:bg-gray-100 hover:border-transparent cursor-pointer transition-colors">
                                <p>{category.name}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </Sidebar>

    );

};
