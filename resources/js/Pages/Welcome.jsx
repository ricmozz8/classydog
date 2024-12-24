import FullLogotype from "@/Components/FullLogotype";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex flex-col items-center justify-center min-h-screen bg-black ">

                <FullLogotype className="w-64 h-32 block m-0 p-0" />
                <h1 className="text-6xl font-bold text-white">Under Construction</h1>
                <nav className="mx-5 flex flex-1 justify-end text-black">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-white focus:outline-none bg-classydog-500 font-semibold w-fit block rounded-full p-4 h-fit cursor-pointer hover:bg-classydog-700 transition-colors"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-white focus:outline-none"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route("register")}
                                className="text-white focus:outline-none"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </>
    );
}
