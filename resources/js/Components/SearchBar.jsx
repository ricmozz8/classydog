export default function SearchBar(params) {
    return (
        <form className="flex" {...params}>
            <div className="rounded-full px-5 py-2 bg-gray-200 flex gap-2 items-center">
                <i className="las la-search"></i>
                <input
                    type="text"
                    placeholder='Busca algo...'
                    required={true}
                    className="bg-transparent w-full px-2 py-1 border-none outline-0 focus:border-none  focus:ring-0"
                />
            </div>
        </form>
    );
}
