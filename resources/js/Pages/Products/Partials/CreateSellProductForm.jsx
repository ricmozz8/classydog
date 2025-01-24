import Input from "@/Components/Inputs/Input"
import PrefixedInput from "@/Components/Inputs/PrefixedInput"
import TextArea from "@/Components/Inputs/TextArea"
import Selection from "@/Components/Inputs/Selection"
import ImageDropper from "@/Components/Inputs/ImageDropper"
import PrimaryButton from "@/Components/Buttons/PrimaryButton"
import Boolean from "@/Components/Inputs/Boolean"
import { useState } from "react"
import { usePage } from "@inertiajs/react"
export default function CreateSellProductForm({ children, categories, errors, ...params }) {

    const [isShipped, setIsShipped] = useState(false);
    const {availableCurrencies} = usePage().props;

    return (
        <div {...params} className="rounded-md md:border md:border-gray-200 p-8 my-4 m-auto max-w-2xl">
            <form action="#">
                {children}


                <ImageDropper maxImages={8} centerText={'Arrastra tus imagenes o haz clic para subirlas'} caption="Imágenes" subtitle={'Añade varias para que los compradores conozcan el producto  (Sube imágenes de tipo JPG, PNG o JPEG)'} />

                <Input title={"Nombre del producto"}
                    type="text" name="product-name"
                    placeholder="Televisor de 27'" required />


                <PrefixedInput prefix="$" title={"Precio"}
                    type="number" name="product-price" subtitle={'Coloca un precio justo'}
                    placeholder="21.37" required className="appearance-none" step="0.01" min="0" />

                <Selection title={'Moneda'} optionsList={availableCurrencies} name='currency'/>


                <TextArea title={"Descripción"}
                    caption="Descripción del producto"
                    height={"300px"}
                    type="text" name="product-description"
                    subtitle={'Sé lo más descriptivo posible, se le hará más fácil encontrar el producto a los compradores'}
                    placeholder="Detalla el producto y sus características, ¡da a conocer tu producto!" required />

                <Selection title={"Categoría"} optionsList={categories.all} name="product-category" />

                <Selection title={"Estado"} optionsList={[{ id: 1, name: "Como nuevo" }, { id: 2, name: "Bueno" }, { id: 3, name: "Dañado" }]} name="product-category" />

                <div className="flex-col my-4">
                    <div className="md:flex items-center gap-1 my-2 w-full justify-between transition-all md:h-[100px]">
                        <Boolean
                            title={'Envío'}
                            error={''}
                            label={'¿Envío Disponible?'}
                            onCheck={() => { setIsShipped(!isShipped) }}

                        >
                            <i className="las la-truck text-xl"></i>
                            <p>Envío disponible</p>
                        </Boolean>

                        {
                            isShipped &&
                            <PrefixedInput prefix="$" error={""}
                                name={'shipping cost'} type={'number'}
                                step="0.01" subtitle={'Precio que costará enviarlo normalmente'}
                                title={'Coste de envío'}
                                placeholder="0.00"
                                className="trasition-opacity"
                                 />
                        }
                    </div>
                    <p className="text-sm text-gray-500">Selecciona esto si podrás enviar este producto a través de los servicios de correos</p>
                </div>
                <PrimaryButton className="w-full md:w-fit">
                    <i className="las la-arrow-up"></i>
                    Publicar
                </PrimaryButton>
            </form>
        </div>
    )
};
