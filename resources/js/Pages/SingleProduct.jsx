import Layout from "@/Layouts/Layout";

export default function SingleProduct({ auth, product, reviews, relatedProducts }) {

    return (
        <Layout pageTitle={product.name} auth={auth}>
            <img src="https://picsum.photos/900" alt={product.name} />
            <span onClick={() => { window.history.back() }} className="cursor-pointer rounded-full border-slate-700 border px-2 py-1 block m-2 w-fit"><i className="las la-arrow-left"></i></span>
            <h1 className="text-3xl font-semibold">{product.price}</h1>
            <h3 className="text-3xl">{product.name}</h3>
        </Layout>
    )

};
