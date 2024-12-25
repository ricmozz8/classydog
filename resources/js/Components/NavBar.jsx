import { Link } from '@inertiajs/inertia-react';
import ApplicationLogo from '@/Components/ApplicationLogo';
export default function NavBar({ auth }) {
    return (
        <nav className="bg-white p-3 flex align-middle justify-between">
            <Link href="/">
                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
            </Link>
            <div className="p-3"></div>
        </nav>
    );
}
