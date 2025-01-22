export default function Selection({ optionsList, title, ...params }) {

    return (
        <div className="my-4">
            <p className="text-sm">{title}</p>
            <select {...params} className="border border-gray-300 rounded-md p-2 focus:border-gray-300 focus:ring-2 w-full block my-2 focus:ring-classydog-500 hover:bg-gray-100 transition-colors">

                <option value="">Selecciona una opción</option>
                {
                    optionsList.map((option, index) => {
                        return (
                            <option key={index} value={option.id}>{option.name}</option>
                        )
                    })
                }

            </select>
        </div>
    )

};
