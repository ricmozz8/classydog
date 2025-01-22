export default function TextArea({ content = '', caption = '', ...params }) {


    return (
        <div className="flex flex-col gap-2">
            <textarea
                {...params}
                className={`w-full h-full bg-gray-200
                     border border-gray-200 rounded-md p-2 text-sm
                     focus:outline-none focus:border-classydog-main focus:ring-1 focus:ring-classydog-main transition-colors`}
                name="new-comment"
                id="new-comment" >{content}
            </textarea>

            <p className="text-xs text-gray-500">{caption}</p>
        </div>
    )
};
