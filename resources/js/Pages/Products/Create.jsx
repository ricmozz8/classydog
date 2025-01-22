import Layout from "@/Layouts/Layout";
import CreateSellProductForm from "./Partials/CreateSellProductForm";
import { usePage } from "@inertiajs/react";
export default function Create({ auth }) {

    const { availableCategories } = usePage().props;

    return (
        <Layout pageTitle='Vende' auth={auth}>

            <CreateSellProductForm categories={availableCategories}>
                <div className="py-4 flex items-center gap-2 text-4xl">
                    <i className="las la-plus-circle"></i>
                    <h1 className="font-semibold">Vende</h1>
                </div>
            </CreateSellProductForm>

        </Layout>
    )


};
