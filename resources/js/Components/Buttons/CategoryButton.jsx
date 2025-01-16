export default function CategoryButton({children, ...params}) {

    return (
        <div {...params} className="p-3 flex items-center gap-1 cursor-pointer text-gray-600 border-b-4 border-b-transparent  select-none  hover:border-b-classydog-100 transition-colors">
            {children}
        </div>
    )
};
