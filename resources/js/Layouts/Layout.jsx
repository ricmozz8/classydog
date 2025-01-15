import { Head } from "@inertiajs/react";
import NavBar from "@/Components/Sections/NavBar";
import FullLogotype from "@/Components/Branding/FullLogotype";

/**
 * The Guest Layout component.
 *
 * @param {object} props
 * @param {JSX.Element} props.children
 * @param {object} [props.params]
 *
 * @returns {JSX.Element}
 */
export default function Layout({ auth, pageTitle, children, ...params }) {

    const currentYear = new Date().getFullYear();
    return (
        <>
            <main {...params} className="max-w-screen-2xl m-auto">
                <Head title={pageTitle}></Head>
                <NavBar auth={auth}></NavBar>
                {children}
            </main>

            {/* footer */}
            <div className="bg-classydog-main py-4 px-2 text-white m-0">
                <div className="max-w-screen-2xl m-auto p-6">
                    <FullLogotype variant="negative" />
                    <div className="mt-10">
                        <p>Todos los derechos reservados</p>
                        <p> Classydog | &copy;{currentYear}</p>
                        <span className="font-mono font-thin text-yellow-300">v0.0.0 | DEVELOPMENT</span>
                    </div>
                </div>
            </div>

        </>
    );
}
