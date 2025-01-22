import { Link } from "@inertiajs/react";
import FullLogotype from "@/Components/Branding/FullLogotype";
import SearchBar from "@/Components/Sections/SearchBar";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import AuthModal from "@/Components/Modals/AuthModal";
import { useEffect } from "react";

import { useState } from "react";

export default function NavBar({ auth }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };



    let onStickyBorder = 'border-b-gray-300';

    const [isSticky, setIsSticky] = useState(false);


    useEffect(() => {


        const onScrollPosition = () => {

            if (window.scrollY > 70)
                setIsSticky(true)
            else
                setIsSticky(false)
        }

        window.addEventListener('scroll', onScrollPosition);

        return () => { window.removeEventListener('scroll', onScrollPosition) };

    }, []);



    return (
        <>
            <nav className={`
            hidden sticky bg-white border-b
            top-0 p-3 m-auto md:flex align-middle items-center justify-between z-20
                ` + ' ' + (isSticky ? onStickyBorder : 'border-b-transparent')}>

                <Link href="/" className="flex items-center gap-1">
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


                    <Link href="/sell">
                        <PrimaryButton>
                            <i className="las la-plus"></i>
                            Vende
                        </PrimaryButton>
                    </Link>




                </div>
            </nav>
            <AuthModal mode="login" show={isOpen} onclose={toggleModal} />
        </>
    );
}
