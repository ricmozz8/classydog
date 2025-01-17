
import PageHeader from "@/Components/Sections/PageHeader";
import ListingLayout from "@/Layouts/ListingLayout";
import ProductListingGrid from "@/Components/Products/ProductListingGrid";


export default function CategoryListing({ auth, categoryTitle,listing }) {

    return (
        <ListingLayout auth={auth} pageTitle={categoryTitle} activeCategory={listing.id}>
            <PageHeader title={categoryTitle} subtitle={listing.content} />
            <ProductListingGrid products={listing.products} pagination={12} />
        </ListingLayout>
    )

};
