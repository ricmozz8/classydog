import TextArea from "@/Components/Inputs/TextArea"
export default function AddReviewBox({className = '', ...params}) {

    return (
        <div className={"p-4 rounded-md border border-gray-200 " + className} {...params}>
            <TextArea caption={"Comentario"} placeholder="Agrega tu comentario..." />

        </div>
    )

};
