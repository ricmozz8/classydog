import Layout from "@/Layouts/Layout";
import ProductImageCarrousel from "@/Components/Products/ProductImageCarrousel";
import BackButton from "@/Components/Buttons/BackButton";


export default function SingleProduct({ auth, product, reviews, relatedProducts }) {

    return (
        <Layout pageTitle={product.name} auth={auth}>
            <BackButton/>
            <ProductImageCarrousel images={[product.images_path]} />

            <h1 className="text-3xl font-semibold">${product.price}</h1>
            <h3 className="text-3xl">{product.name}</h3>
        </Layout>
    )

};
