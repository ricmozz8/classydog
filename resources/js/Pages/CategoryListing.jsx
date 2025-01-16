
import PageHeader from "@/Components/Sections/PageHeader";
import ListingLayout from "@/Layouts/ListingLayout";
import ProductListingGrid from "@/Components/Products/ProductListingGrid";


export default function CategoryListing({ auth, listing }) {

    return (
        <ListingLayout auth={auth} pageTitle={listing.name} activeCategory={listing.id}>
            <PageHeader title={listing.name} subtitle={listing.content} />
            <ProductListingGrid products={listing.products} pagination={12} />
        </ListingLayout>
    )

};
