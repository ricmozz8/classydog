import Layout from "@/Layouts/Layout";
import ProductImageCarrousel from "@/Components/Products/ProductImageCarrousel";
import BackButton from "@/Components/Buttons/BackButton";
import ProductMainActions from "@/Components/Products/ProductMainActions";
import Separator from "@/Components/Sections/Separator";
import ProductSpecifics from "@/Components/Products/ProductSpecifics";


export default function SingleProduct({ auth, product, reviews, relatedProducts }) {

    const prettyPrice = '$' + product.price.toFixed(2);

    return (
        <Layout pageTitle={product.name} auth={auth}>
            <BackButton />
            <ProductImageCarrousel images={[product.images_path]} />

            <div className="max-w-2xl mx-auto">

                <div className="flex-col items-center space-around gap-10">

                    <ProductMainActions product={product} />

                    <Separator />

                    <ProductSpecifics specifics={product.specifics} />

                    <Separator />

                    <p className="text-center p-6">{product.description}</p>

                    <Separator />
                </div>

            </div>
        </Layout>
    )

};
