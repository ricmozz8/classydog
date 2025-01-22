import Input from "@/Components/Inputs/Input"
import TextArea from "@/Components/Inputs/TextArea"
import Selection from "@/Components/Inputs/Selection"
import ImageDropper from "@/Components/Inputs/ImageDropper"
export default function CreateSellProductForm({ children, categories, ...params }) {

    return (<div {...params} className="rounded-md border border-gray-200 p-8 my-4">

        <form action="#">

            {children}

            <ImageDropper caption="Imagen" />

            <Input title={"Nombre del producto"}
                type="text" name="product-name"
                placeholder="Televisor de 27' marca GL" required />

            <Input title={"Precio"}
                type="number" name="product-price"
                placeholder="21.37" required />

            <TextArea title={"Descripción"}
            caption="Descripción del producto"
                type="text" name="product-description"
                placeholder="Descripción del producto" required />

            <Selection title={"Categoría"} optionsList={categories.all} name="product-category" />





        </form>

    </div>)
};
