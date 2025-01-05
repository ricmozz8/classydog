import { Link } from '@inertiajs/react';
import FullLogotype from '@/Components/FullLogotype';
import SearchBar from '@/Components/SearchBar';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
export default function NavBar({ auth }) {
    return (
        <nav className=" hidden  p-6 m-auto md:flex align-middle items-center justify-between  border-b border-gray-300">
            <Link href="/">
                <FullLogotype className="object-contain" width={"150px"} />
            </Link>

            <SearchBar className="flex-1 mx-20" method="POST" action="#" />

            <div className="flex items-center space-x-4">
                <SecondaryButton>
                    Regístrate
                    </SecondaryButton>
                <PrimaryButton>
                    <i className='las la-plus'></i>
                    Vende
                    </PrimaryButton>
            </div>
        </nav>
    );
}
