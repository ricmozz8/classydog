import Input from "@/Components/Inputs/Input"
import TextArea from "@/Components/Inputs/TextArea"
import Selection from "@/Components/Inputs/Selection"
import ImageDropper from "@/Components/Inputs/ImageDropper"
import PrimaryButton from "@/Components/Buttons/PrimaryButton"
export default function CreateSellProductForm({ children, categories, ...params }) {

    return (
        <div {...params} className="rounded-md md:border md:border-gray-200 p-8 my-4 m-auto max-w-2xl">
            <form action="#">
                {children}
                <ImageDropper caption="Imagen" />

                <Input title={"Nombre del producto"}
                    type="text" name="product-name"
                    placeholder="Televisor de 27' marca GL" required />

                <Input title={"Precio"}
                    type="number" name="product-price" subtitle={'Coloca un precio justo'}
                    placeholder="21.37" required className="appearance-none" />

                <TextArea title={"Descripción"}
                    caption="Descripción del producto"
                    type="text" name="product-description"
                    subtitle={'Sé lo más descriptivo posible, se le hará más fácil encontrar el producto a los compradores'}
                    placeholder="Descripción del producto" required />

                <Selection title={"Categoría"} optionsList={categories.all} name="product-category" />

                <Selection title={"Estado"} optionsList={[{ id: 1, name: "Nuevo" }, { id: 2, name: "Usado" }]} name="product-category" />

                <PrimaryButton className="w-full md:w-fit">
                    <i className="las la-arrow-up"></i>
                    Publicar
                </PrimaryButton>
            </form>
        </div>
    )
};
