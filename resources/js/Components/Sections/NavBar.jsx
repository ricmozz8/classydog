import { Link } from "@inertiajs/react";
import FullLogotype from "@/Components/Branding/FullLogotype";
import SearchBar from "@/Components/Sections/SearchBar";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import AuthModal from "@/Components/Modals/AuthModal";

import { useState } from "react";

export default function NavBar({ auth }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const mainAction = (
        <PrimaryButton>
            <i className="las la-plus"></i>
            Vende
        </PrimaryButton>
    );

    return (
        <>
            <nav className=" hidden sticky bg-white top-0 p-3 m-auto md:flex align-middle items-center justify-between z-10  border-b border-gray-300">
                <Link href="/">
                    <FullLogotype variant="positive" />

                </Link>
                <SearchBar className="flex-1 mx-20" method="POST" action="#" />
                <div className="flex items-center space-x-4">

                    {auth.user !== null ? (
                        <Link href="/profile" className="flex items-center border border-classydog-main p-2 rounded-full text-classydog-main hover:bg-gray-100 transition-colors">
                            <i className="las la-user"></i>
                            <p>{auth.user.name}</p>
                        </Link>

                    ) :
                        (
                            <SecondaryButton onClick={() => { toggleModal(); }}>
                                <i className="las la-user"></i>
                                Entra
                            </SecondaryButton>
                        )}


                    {auth.user === null ? (
                        <span onClick={() => { toggleModal(); }}>
                            {mainAction}
                        </span>
                    ) : (
                        <Link href="/sell">
                            {mainAction}
                        </Link>
                    )}




                </div>
            </nav>
            <AuthModal mode="login" show={isOpen} onclose={toggleModal} />
        </>
    );
}
