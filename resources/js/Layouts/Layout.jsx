import { Head } from "@inertiajs/react";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

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
    return (
        <>
            <main {...params} className="max-w-screen-xl m-auto">
                <Head title={pageTitle}></Head>
                <NavBar></NavBar>
                {children}
            </main>
            <Footer />

        </>
    );
}
