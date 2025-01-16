import Layout from "@/Layouts/Layout";
import MainFilterSidebar from "@/Components/Sections/MainFilterSidebar";
export default function ListingLayout({auth, pageTitle, children}) {

    return(
        <Layout pageTitle={pageTitle} auth={auth}>
            <div className="flex items-start  space-around gap-10">

                <MainFilterSidebar />
                <div className=" h-full py-6 w-full">
                    {children}
                </div>
            </div>
        </Layout>
    )

};
