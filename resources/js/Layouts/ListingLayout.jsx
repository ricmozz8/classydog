import Layout from "@/Layouts/Layout";
import MainFilterSidebar from "@/Components/Sections/MainFilterSidebar";
export default function ListingLayout({auth, pageTitle, activeCategory, children}) {

    return(
        <Layout pageTitle={pageTitle} auth={auth} activeCategory={activeCategory}>
            <div className="flex items-start gap-2">

                <MainFilterSidebar />
                <div className=" h-full p-6 w-full">
                    {children}
                </div>
            </div>
        </Layout>
    )

};
