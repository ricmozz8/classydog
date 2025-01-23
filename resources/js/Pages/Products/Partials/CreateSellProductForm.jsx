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
                <ImageDropper centerText={'Arrastra tus imagenes o haz clic para subirlas'} caption="Imágenes" subtitle={'Añade varias para que los compradores conozcan el producto  (Sube imágenes de tipo JPG, PNG o JPEG)'} />

                <Input title={"Nombre del producto"}
                    type="text" name="product-name"
                    placeholder="Televisor de 27' marca GL" required />

                <Input title={"Precio"}
                    type="number" name="product-price" subtitle={'Coloca un precio justo'}
                    placeholder="21.37" required className="appearance-none" />

                <TextArea title={"Descripción"}
                    caption="Descripción del producto"
                    height={"300px"}
                    type="text" name="product-description"
                    subtitle={'Sé lo más descriptivo posible, se le hará más fácil encontrar el producto a los compradores'}
                    placeholder="Descripción del producto" required />

                <Selection title={"Categoría"} optionsList={categories.all} name="product-category" />

                <Selection title={"Estado"} optionsList={[{ id: 1, name: "Como nuevo" }, { id: 2, name: "Bueno" }, { id: 3, name: "Dañado" }]} name="product-category" />

                <PrimaryButton className="w-full md:w-fit">
                    <i className="las la-arrow-up"></i>
                    Publicar
                </PrimaryButton>
            </form>
        </div>
    )
};
