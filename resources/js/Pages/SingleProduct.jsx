import Layout from "@/Layouts/Layout";
import ProductImageCarrousel from "@/Components/Products/ProductImageCarrousel";
import BackButton from "@/Components/Buttons/BackButton";
import ProductMainActions from "@/Components/Products/ProductMainActions";
import ProductSpecifics from "@/Components/Products/ProductSpecifics";
import ProductUserInfo from "@/Components/Products/ProductUserInfo";
import ProductReviews from "@/Components/Products/ProductReviews";
import SimilarProducts from "@/Components/Products/SimilarProducts";


export default function SingleProduct({ auth, product, reviews, relatedProducts }) {

    const prettyPrice = '$' + product.price.toFixed(2);
    console.log(product);

    return (
        <Layout pageTitle={product.name} auth={auth}>
            <ProductImageCarrousel images={[product.images_path]} />

            <div className="max-w-2xl mx-auto">

                <div className="flex-col items-center space-around gap-10">

                    <ProductMainActions product={product} />



                    <ProductSpecifics specifics={product.specifics} />



                    <p className="text-center p-6 border-b border-b-gray-200">{product.description}</p>


                    <ProductUserInfo location={product.user.country} lastEdited={product.last_edited} views={product.views}  />


                    <ProductReviews reviews={[]} />

                    <SimilarProducts relatedProducts={[product, product, product, product]} />

                </div>

            </div>
        </Layout>
    )

};
