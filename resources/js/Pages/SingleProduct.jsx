import Layout from "@/Layouts/Layout";
import ProductImageCarrousel from "@/Components/Products/Images/ProductImageCarrousel";
import BackButton from "@/Components/Buttons/BackButton";
import ProductMainActions from "@/Components/Products/ProductMainActions";
import ProductSpecifics from "@/Components/Products/ProductSpecifics";
import ProductUserInfo from "@/Components/Products/ProductUserInfo";
import ProductReviews from "@/Components/Products/Reviews/ProductReviews";
import SimilarProducts from "@/Components/Products/SimilarProducts";


export default function SingleProduct({ auth, product, relatedProducts }) {

    return (
        <Layout pageTitle={product.name} auth={auth}>
            <ProductImageCarrousel images={[product.images_path]} />

            <div className="max-w-2xl mx-auto">

                <div className="flex-col items-center space-around gap-10">

                    <ProductMainActions product={product} />

                    <ProductSpecifics specifics={product.specifics} />

                    <p className="text-center p-6 border-b border-b-gray-200">{product.description}</p>

                    <ProductUserInfo
                        validGeo={product.user.geographics.valid}
                        country={product.user.geographics.country}
                        region={product.user.geographics.region}
                        lastEdited={product.last_edited}
                        views={product.views} />

                    <ProductReviews
                        reviews={product.user.reviews} />

                    <SimilarProducts
                        productCategory={product.category_id}
                        relatedProducts={relatedProducts} />

                </div>

            </div>
        </Layout>
    )

};
