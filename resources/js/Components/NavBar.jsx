import { Link } from "@inertiajs/react";
import FullLogotype from "@/Components/FullLogotype";
import SearchBar from "@/Components/SearchBar";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import AuthModal from "@/Components/AuthModal";

import { useState } from "react";

export default function NavBar({ auth }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className=" hidden sticky bg-white top-0 p-6 m-auto md:flex align-middle items-center justify-between z-10  border-b border-gray-300">
                <Link href="/">
                    <FullLogotype variant="positive" />
                    
                </Link>
                <SearchBar className="flex-1 mx-20" method="POST" action="#" />
                <div className="flex items-center space-x-4">
                    <SecondaryButton
                        onClick={() => {
                            toggleModal();
                        }}
                    >
                        <i className="las la-user"></i>
                        Entra
                    </SecondaryButton>
                    <PrimaryButton
                        onClick={() => {
                            toggleModal();
                        }}
                    >
                        <i className="las la-plus"></i>
                        Vende
                    </PrimaryButton>
                </div>
            </nav>
            <AuthModal mode="login" show={isOpen} onclose={toggleModal} />
        </>
    );
}
