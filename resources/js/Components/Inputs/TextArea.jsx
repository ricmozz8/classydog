export default function TextArea({ content = '', caption = '', ...params }) {


    return (
        <div className="flex flex-col gap-2">
            <p className="text-sm">{caption}</p>
            <textarea
                {...params}
                className={`border w-full border-gray-300 rounded-md p-2 focus:border-gray-300
                focus:ring-2 focus:ring-classydog-500
                hover:bg-gray-100 transition-colors`}
                name="new-comment"
                id="new-comment" >{content}
            </textarea>


        </div>
    )
};
