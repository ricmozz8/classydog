export default function TextArea({content, ...params}) {
    return
    (
        <textarea className="w-full border border-gray-300 rounded-md p-2" name="new-comment" id="new-comment" >{content}</textarea>
    )
};
